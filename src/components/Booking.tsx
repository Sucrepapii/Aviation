import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AIRPORTS } from '../constants/airports';

const Booking: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'book' | 'manage' | 'status'>('book');
    const [isSearching, setIsSearching] = useState(false);

    // Date Picker State
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [departureDate, setDepartureDate] = useState<Date | null>(null);
    const [returnDate, setReturnDate] = useState<Date | null>(null);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const datePickerRef = useRef<HTMLDivElement>(null);

    // Passenger Picker State
    const [showPassengerPicker, setShowPassengerPicker] = useState(false);
    const [passengers, setPassengers] = useState({
        adults: 1,
        children: 0,
        infants: 0
    });
    const [travelClass, setTravelClass] = useState<'Economy' | 'Premium Economy' | 'Business' | 'First Class'>('Economy');
    const passengerPickerRef = useRef<HTMLDivElement>(null);

    // Search/Autocomplete State
    const [flyingFrom, setFlyingFrom] = useState('');
    const [fromSearch, setFromSearch] = useState('');
    const [showFromSearch, setShowFromSearch] = useState(false);
    const fromSearchRef = useRef<HTMLDivElement>(null);

    const [flyingTo, setFlyingTo] = useState('');
    const [toSearch, setToSearch] = useState('');
    const [showToSearch, setShowToSearch] = useState(false);
    const toSearchRef = useRef<HTMLDivElement>(null);

    const filterAirports = (search: string) => {
        const term = search.trim().toLowerCase();
        if (!term) return AIRPORTS.slice(0, 6); // Show popular ones

        return AIRPORTS.filter(a =>
            a.iata.toLowerCase().includes(term) ||
            a.city.toLowerCase().includes(term) ||
            a.country.toLowerCase().includes(term) ||
            a.name.toLowerCase().includes(term)
        ).slice(0, 10);
    };

    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSearching(true);
        setTimeout(() => {
            setIsSearching(false);
            if (activeTab === 'book') {
                navigate('/login');
            }
        }, 2000);
    };

    const inputContainerClass = "relative flex flex-col border-r border-white/10 last:border-none p-5 sm:p-6 w-full transition-all hover:bg-white/40 group cursor-pointer";
    const labelClass = "text-[10px] font-black text-accent uppercase tracking-widest mb-2 group-hover:text-primary transition-colors italic";
    const inputClass = "w-full bg-transparent border-none text-primary font-black text-sm placeholder:text-gray-300 focus:outline-none focus:ring-0 peer pr-16";

    const tabs = [
        { id: 'book', label: 'Book Flight', icon: 'ri-chat-history-line' },
        { id: 'manage', label: 'Manage Booking', icon: 'ri-settings-4-line' },
        { id: 'status', label: 'Flight Status', icon: 'ri-radar-line' },
    ] as const;

    // Calendar logic
    const daysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (month: number, year: number) => new Date(year, month, 1).getDay();

    const generateCalendarDays = () => {
        const days = [];
        const totalDays = daysInMonth(currentMonth.getMonth(), currentMonth.getFullYear());
        const firstDay = firstDayOfMonth(currentMonth.getMonth(), currentMonth.getFullYear());

        for (let i = 0; i < firstDay; i++) {
            days.push(null);
        }
        for (let i = 1; i <= totalDays; i++) {
            days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i));
        }
        return days;
    };

    const changeMonth = (offset: number) => {
        const nextMonth = new Date(currentMonth.setMonth(currentMonth.getMonth() + offset));
        setCurrentMonth(new Date(nextMonth));
    };

    const handleDateSelect = (date: Date) => {
        if (!departureDate || (departureDate && returnDate)) {
            setDepartureDate(date);
            setReturnDate(null);
        } else {
            if (date < departureDate) {
                setDepartureDate(date);
                setReturnDate(null);
            } else {
                setReturnDate(date);
                setShowDatePicker(false);
            }
        }
    };

    const isSameDay = (d1: Date | null, d2: Date | null) => {
        return d1 && d2 && d1.toDateString() === d2.toDateString();
    };

    const isDateInRange = (date: Date) => {
        if (!departureDate || !returnDate) return false;
        return date > departureDate && date < returnDate;
    };

    // Passenger logic
    const updatePassenger = (type: keyof typeof passengers, delta: number) => {
        setPassengers(prev => ({
            ...prev,
            [type]: Math.max(type === 'adults' ? 1 : 0, prev[type] + delta)
        }));
    };

    const getPassengerString = () => {
        const parts = [];
        const total = passengers.adults + passengers.children + passengers.infants;
        if (total === 1) {
            parts.push('1 Traveller');
        } else {
            parts.push(`${total} Travellers`);
        }
        parts.push(travelClass);
        return parts.join(', ');
    };

    // Outside click to close pickers
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
                setShowDatePicker(false);
            }
            if (passengerPickerRef.current && !passengerPickerRef.current.contains(event.target as Node)) {
                setShowPassengerPicker(false);
            }
            if (fromSearchRef.current && !fromSearchRef.current.contains(event.target as Node)) {
                setShowFromSearch(false);
            }
            if (toSearchRef.current && !toSearchRef.current.contains(event.target as Node)) {
                setShowToSearch(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <section id="booking" className="relative z-30 max-w-[1240px] mx-auto px-6 -mt-16 sm:-mt-24">
            <div className={`bg-white/85 backdrop-blur-3xl rounded-4xl shadow-premium border border-white/60 animate-fade-in ring-1 ring-black/5 transition-all duration-500 ${isSearching ? 'scale-[0.98] opacity-90' : 'scale-100'}`}>
                {/* Navigation Tabs */}
                <div className="flex bg-gray-100/30 p-2 gap-2 rounded-t-4xl overflow-hidden">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative flex items-center gap-3 px-8 py-4 text-xs font-black uppercase tracking-widest transition-all rounded-2xl ${activeTab === tab.id
                                ? 'text-primary bg-white shadow-sm'
                                : 'text-gray-400 hover:text-primary hover:bg-white/50'
                                }`}
                        >
                            <i className={`${tab.icon} text-lg ${activeTab === tab.id ? 'text-accent' : ''}`}></i>
                            {tab.label}
                            {activeTab === tab.id && (
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-accent rounded-full"></span>
                            )}
                        </button>
                    ))}
                </div>

                <form className="p-2 sm:p-3" onSubmit={handleSearch}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center bg-white/40 rounded-4xl border border-white/40 ring-1 ring-black/5 shadow-inner relative">

                        {activeTab === 'book' && (
                            <>
                                {/* Location */}
                                <div ref={fromSearchRef} className={`${inputContainerClass} overflow-visible!`} onClick={() => setShowFromSearch(true)}>
                                    <span className={labelClass}>Flying From</span>
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-accent group-hover:bg-primary group-hover:text-white transition-all">
                                            <i className="ri-map-pin-2-line text-xl"></i>
                                        </span>
                                        <input
                                            id="from-input"
                                            type="text"
                                            placeholder="From City, Country or Airport"
                                            className={inputClass}
                                            value={showFromSearch ? fromSearch : (flyingFrom || '')}
                                            onChange={(e) => {
                                                setFromSearch(e.target.value);
                                                setShowFromSearch(true);
                                            }}
                                            onFocus={(e) => {
                                                e.target.select();
                                                setShowFromSearch(true);
                                            }}
                                            autoComplete="off"
                                            required
                                        />
                                        {(fromSearch || flyingFrom) && showFromSearch && (
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setFromSearch('');
                                                    setFlyingFrom('');
                                                }}
                                                className="absolute right-12 top-1/2 -translate-y-1/2 text-primary/30 hover:text-accent transition-colors"
                                            >
                                                <i className="ri-close-circle-fill text-lg"></i>
                                            </button>
                                        )}
                                    </div>
                                    <div className="absolute top-4 right-4 opacity-10 transition-opacity group-hover:opacity-30">
                                        <i className="ri-community-line text-4xl"></i>
                                    </div>

                                    {/* Autocomplete Dropdown */}
                                    {showFromSearch && (
                                        <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl shadow-premium border border-gray-100 py-3 z-100 animate-fade-in">
                                            <div className="px-6 py-2 mb-2 border-b border-gray-50">
                                                <span className="text-[10px] font-black text-accent uppercase tracking-widest">
                                                    {!fromSearch ? 'Popular Destinations' : 'Search Results'}
                                                </span>
                                            </div>
                                            {filterAirports(fromSearch).length > 0 ? (
                                                filterAirports(fromSearch).map((airport) => (
                                                    <button
                                                        key={airport.iata}
                                                        type="button"
                                                        className="w-full px-6 py-3 text-left hover:bg-primary/5 flex items-center justify-between group/item"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setFlyingFrom(`${airport.city} (${airport.iata})`);
                                                            setFromSearch('');
                                                            setShowFromSearch(false);
                                                        }}
                                                    >
                                                        <div className="flex flex-col">
                                                            <span className="text-xs font-black text-primary group-hover/item:text-accent uppercase tracking-wider">{airport.city}, {airport.country}</span>
                                                            <span className="text-[10px] text-gray-400 font-bold">{airport.name}</span>
                                                        </div>
                                                        <span className="text-xs font-black text-accent bg-accent/10 px-2 py-1 rounded-lg">{airport.iata}</span>
                                                    </button>
                                                ))
                                            ) : (
                                                <div className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center italic">
                                                    No airports found for "{fromSearch}"
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* To */}
                                <div ref={toSearchRef} className={`${inputContainerClass} overflow-visible!`} onClick={() => setShowToSearch(true)}>
                                    <span className={labelClass}>Flying To</span>
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-accent group-hover:bg-primary group-hover:text-white transition-all">
                                            <i className="ri-map-pin-user-line text-xl"></i>
                                        </span>
                                        <input
                                            id="to-input"
                                            type="text"
                                            placeholder="To City, Country or Airport"
                                            className={inputClass}
                                            value={showToSearch ? toSearch : (flyingTo || '')}
                                            onChange={(e) => {
                                                setToSearch(e.target.value);
                                                setShowToSearch(true);
                                            }}
                                            onFocus={(e) => {
                                                e.target.select();
                                                setShowToSearch(true);
                                            }}
                                            autoComplete="off"
                                            required
                                        />
                                        {(toSearch || flyingTo) && showToSearch && (
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setToSearch('');
                                                    setFlyingTo('');
                                                }}
                                                className="absolute right-12 top-1/2 -translate-y-1/2 text-primary/30 hover:text-accent transition-colors"
                                            >
                                                <i className="ri-close-circle-fill text-lg"></i>
                                            </button>
                                        )}
                                    </div>
                                    <div className="absolute top-4 right-4 opacity-10 transition-opacity group-hover:opacity-30">
                                        <i className="ri-earth-line text-4xl"></i>
                                    </div>

                                    {/* Autocomplete Dropdown */}
                                    {showToSearch && (
                                        <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl shadow-premium border border-gray-100 py-3 z-100 animate-fade-in">
                                            <div className="px-6 py-2 mb-2 border-b border-gray-50">
                                                <span className="text-[10px] font-black text-accent uppercase tracking-widest">
                                                    {!toSearch ? 'Popular Destinations' : 'Search Results'}
                                                </span>
                                            </div>
                                            {filterAirports(toSearch).length > 0 ? (
                                                filterAirports(toSearch).map((airport) => (
                                                    <button
                                                        key={airport.iata}
                                                        type="button"
                                                        className="w-full px-6 py-3 text-left hover:bg-primary/5 flex items-center justify-between group/item"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setFlyingTo(`${airport.city} (${airport.iata})`);
                                                            setToSearch('');
                                                            setShowToSearch(false);
                                                        }}
                                                    >
                                                        <div className="flex flex-col">
                                                            <span className="text-xs font-black text-primary group-hover/item:text-accent uppercase tracking-wider">{airport.city}, {airport.country}</span>
                                                            <span className="text-[10px] text-gray-400 font-bold">{airport.name}</span>
                                                        </div>
                                                        <span className="text-xs font-black text-accent bg-accent/10 px-2 py-1 rounded-lg">{airport.iata}</span>
                                                    </button>
                                                ))
                                            ) : (
                                                <div className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center italic">
                                                    No airports found for "{toSearch}"
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Dates with Custom Dropdown */}
                                <div className={`${inputContainerClass} overflow-visible!`} onClick={(e) => {
                                    e.stopPropagation();
                                    setShowDatePicker(!showDatePicker);
                                    setShowPassengerPicker(false);
                                }}>
                                    <span className={labelClass}>Travel Dates</span>
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-accent group-hover:bg-primary group-hover:text-white transition-all">
                                            <i className="ri-calendar-event-line text-xl"></i>
                                        </span>
                                        <input
                                            readOnly
                                            value={departureDate ? `${departureDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}${returnDate ? ` - ${returnDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}` : ''}` : ''}
                                            placeholder="Select Outbound - Inbound"
                                            className={`${inputClass} cursor-pointer`}
                                            required
                                        />
                                    </div>
                                    <div className="absolute top-4 right-4 opacity-10 transition-opacity group-hover:opacity-30">
                                        <i className="ri-time-line text-4xl"></i>
                                    </div>

                                    {/* Date Picker Dropdown */}
                                    {showDatePicker && (
                                        <div
                                            ref={datePickerRef}
                                            className="absolute top-full left-0 mt-4 w-[320px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 p-6 z-100 animate-fade-in -translate-y-2"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <div className="flex items-center justify-between mb-6 gap-2">
                                                <button
                                                    type="button"
                                                    onClick={() => changeMonth(-1)}
                                                    className="p-3 hover:bg-primary/5 rounded-xl transition-colors text-accent flex items-center justify-center ring-1 ring-primary/20"
                                                    title="Previous Month"
                                                >
                                                    <i className="ri-arrow-left-s-fill text-2xl"></i>
                                                </button>

                                                <div className="flex items-center gap-1 flex-1 justify-center">
                                                    <select
                                                        value={currentMonth.getMonth()}
                                                        onChange={(e) => {
                                                            const newDate = new Date(currentMonth);
                                                            newDate.setMonth(parseInt(e.target.value));
                                                            setCurrentMonth(newDate);
                                                        }}
                                                        className="bg-transparent border-none text-xs font-black text-primary uppercase tracking-widest cursor-pointer hover:text-accent transition-colors outline-none appearance-none px-1"
                                                    >
                                                        {Array.from({ length: 12 }).map((_, i) => (
                                                            <option key={i} value={i} className="text-primary bg-white uppercase">
                                                                {new Date(0, i).toLocaleString('default', { month: 'short' })}
                                                            </option>
                                                        ))}
                                                    </select>

                                                    <select
                                                        value={currentMonth.getFullYear()}
                                                        onChange={(e) => {
                                                            const newDate = new Date(currentMonth);
                                                            newDate.setFullYear(parseInt(e.target.value));
                                                            setCurrentMonth(newDate);
                                                        }}
                                                        className="bg-transparent border-none text-xs font-black text-primary uppercase tracking-widest cursor-pointer hover:text-accent transition-colors outline-none appearance-none px-1"
                                                    >
                                                        {Array.from({ length: 11 }).map((_, i) => (
                                                            <option key={i} value={new Date().getFullYear() + i - 5} className="text-primary bg-white">
                                                                {new Date().getFullYear() + i - 5}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() => changeMonth(1)}
                                                    className="p-3 hover:bg-primary/5 rounded-xl transition-colors text-accent flex items-center justify-center ring-1 ring-primary/20"
                                                    title="Next Month"
                                                >
                                                    <i className="ri-arrow-right-s-fill text-2xl"></i>
                                                </button>
                                            </div>

                                            <div className="grid grid-cols-7 gap-1 mb-2">
                                                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                                    <div key={day} className="text-[10px] font-black text-accent text-center uppercase py-2">{day}</div>
                                                ))}
                                            </div>

                                            <div className="grid grid-cols-7 gap-1">
                                                {generateCalendarDays().map((date, index) => (
                                                    <div key={index} className="aspect-square flex items-center justify-center">
                                                        {date && (
                                                            <button
                                                                type="button"
                                                                onClick={() => handleDateSelect(date)}
                                                                className={`w-full h-full flex items-center justify-center text-xs font-bold transition-all relative
                                                                    ${isSameDay(date, departureDate) || isSameDay(date, returnDate)
                                                                        ? 'bg-primary text-white shadow-lg scale-110 z-10 rounded-xl'
                                                                        : isDateInRange(date)
                                                                            ? 'bg-primary/10 text-primary rounded-none! w-full!'
                                                                            : 'hover:bg-accent/10 hover:text-primary rounded-xl'
                                                                    }`}
                                                            >
                                                                {date.getDate()}
                                                                {isSameDay(date, departureDate) && !returnDate && (
                                                                    <span className="absolute -bottom-1 w-1 h-1 bg-white rounded-full"></span>
                                                                )}
                                                            </button>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Travellers with Custom Dropdown */}
                                <div className={`${inputContainerClass} overflow-visible!`} onClick={(e) => {
                                    e.stopPropagation();
                                    setShowPassengerPicker(!showPassengerPicker);
                                    setShowDatePicker(false);
                                }}>
                                    <span className={labelClass}>Passengers</span>
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-accent group-hover:bg-primary group-hover:text-white transition-all">
                                            <i className="ri-user-smile-line text-xl"></i>
                                        </span>
                                        <input
                                            readOnly
                                            value={getPassengerString()}
                                            placeholder="1 Adult, First Class"
                                            className={`${inputClass} cursor-pointer`}
                                            required
                                        />
                                    </div>
                                    <div className="absolute top-4 right-4 opacity-10 transition-opacity group-hover:opacity-30">
                                        <i className="ri-vip-crown-line text-4xl"></i>
                                    </div>

                                    {/* Passenger Picker Dropdown */}
                                    {showPassengerPicker && (
                                        <div
                                            ref={passengerPickerRef}
                                            className="absolute top-full right-0 mt-4 w-[320px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 p-8 z-100 animate-fade-in -translate-y-2"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <div className="space-y-6">
                                                {/* Actors Selector */}
                                                {[
                                                    { id: 'adults' as const, label: 'Adults', sub: '12+ years' },
                                                    { id: 'children' as const, label: 'Children', sub: '2-12 years' },
                                                    { id: 'infants' as const, label: 'Infants', sub: 'Under 2 years' }
                                                ].map((type) => (
                                                    <div key={type.id} className="flex items-center justify-between">
                                                        <div className="flex flex-col">
                                                            <span className="text-xs font-black text-primary uppercase tracking-wider">{type.label}</span>
                                                            <span className="text-[10px] text-gray-400 font-bold">{type.sub}</span>
                                                        </div>
                                                        <div className="flex items-center gap-4">
                                                            <button
                                                                type="button"
                                                                onClick={() => updatePassenger(type.id, -1)}
                                                                className="w-9 h-9 rounded-xl border-2 border-primary/20 flex items-center justify-center hover:border-accent hover:text-accent transition-all text-accent"
                                                            >
                                                                <i className="ri-subtract-fill text-xl"></i>
                                                            </button>
                                                            <span className="w-4 text-center text-sm font-black text-primary">
                                                                {passengers[type.id]}
                                                            </span>
                                                            <button
                                                                type="button"
                                                                onClick={() => updatePassenger(type.id, 1)}
                                                                className="w-9 h-9 rounded-xl border-2 border-primary/20 flex items-center justify-center hover:border-accent hover:text-accent transition-all text-accent"
                                                            >
                                                                <i className="ri-add-fill text-xl"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}

                                                <div className="h-px bg-gray-100 my-4"></div>

                                                {/* Class Selector */}
                                                <div className="flex flex-col gap-3">
                                                    <span className="text-[10px] font-black text-accent uppercase tracking-widest">Travel Class</span>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        {(['Economy', 'Premium Economy', 'Business', 'First Class'] as const).map((tier) => (
                                                            <button
                                                                key={tier}
                                                                type="button"
                                                                onClick={() => setTravelClass(tier)}
                                                                className={`px-3 py-2 text-[10px] font-black uppercase tracking-tighter rounded-xl transition-all border ${travelClass === tier
                                                                    ? 'bg-primary text-white border-primary shadow-lg'
                                                                    : 'bg-white text-primary border-primary/10 hover:border-accent'
                                                                    }`}
                                                            >
                                                                {tier}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassengerPicker(false)}
                                                    className="w-full mt-4 py-3 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-primary hover:text-white transition-all"
                                                >
                                                    Apply Selection
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}

                        {activeTab === 'manage' && (
                            <>
                                <div className={`${inputContainerClass} lg:col-span-2`} onClick={() => document.getElementById('ref-input')?.focus()}>
                                    <span className={labelClass}>Booking Reference</span>
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-accent group-hover:bg-primary group-hover:text-white transition-all">
                                            <i className="ri-ticket-2-line text-xl"></i>
                                        </span>
                                        <input id="ref-input" type="text" placeholder="e.g. AB1234" className={inputClass} required />
                                    </div>
                                </div>
                                <div className={`${inputContainerClass} lg:col-span-2`} onClick={() => document.getElementById('last-input')?.focus()}>
                                    <span className={labelClass}>Last Name</span>
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-accent group-hover:bg-primary group-hover:text-white transition-all">
                                            <i className="ri-user-line text-xl"></i>
                                        </span>
                                        <input id="last-input" type="text" placeholder="Passenger Surname" className={inputClass} required />
                                    </div>
                                </div>
                            </>
                        )}

                        {activeTab === 'status' && (
                            <>
                                <div className={`${inputContainerClass} lg:col-span-2`} onClick={() => document.getElementById('flight-input')?.focus()}>
                                    <span className={labelClass}>Flight Number</span>
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-accent group-hover:bg-primary group-hover:text-white transition-all">
                                            <i className="ri-plane-line text-xl"></i>
                                        </span>
                                        <input id="flight-input" type="text" placeholder="e.g. FL101" className={inputClass} required />
                                    </div>
                                </div>
                                <div className={`${inputContainerClass} lg:col-span-2`} onClick={() => document.getElementById('date-status-input')?.focus()}>
                                    <span className={labelClass}>Date</span>
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-accent group-hover:bg-primary group-hover:text-white transition-all">
                                            <i className="ri-calendar-line text-xl"></i>
                                        </span>
                                        <input id="date-status-input" type="text" placeholder="Today" className={inputClass} required />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-6 px-6 pb-4">
                        <div className="flex items-center gap-8">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="relative w-6 h-6 border-2 border-primary/10 rounded-lg bg-white/50 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent transition-all ring-offset-2 ring-primary/5 peer-checked:bg-accent peer-checked:border-accent">
                                    <i className="ri-check-line text-white opacity-0 peer-checked:opacity-100 transition-opacity"></i>
                                </div>
                                <span className="text-[11px] font-black text-primary/60 group-hover:text-primary transition-colors uppercase tracking-widest">Use Reward Seats</span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="relative w-6 h-6 border-2 border-primary/10 rounded-lg bg-white/50 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent transition-all peer-checked:bg-accent peer-checked:border-accent">
                                    <i className="ri-check-line text-white opacity-0 peer-checked:opacity-100 transition-opacity"></i>
                                </div>
                                <span className="text-[11px] font-black text-primary/60 group-hover:text-primary transition-colors uppercase tracking-widest">Flexible Calendar</span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={isSearching}
                            className={`relative w-full sm:w-auto px-16 py-5 bg-primary text-white text-sm font-black rounded-3xl shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-4 group active:scale-95 overflow-hidden ring-4 ring-primary/5 ${isSearching ? 'bg-accent cursor-wait' : 'hover:bg-accent-red'}`}
                        >
                            <div className={`absolute inset-0 bg-linear-to-r from-accent-red to-red-800 transition-opacity ${isSearching ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}></div>
                            <span className="relative">
                                {isSearching ? (
                                    <span className="flex items-center gap-2">
                                        <i className="ri-loader-4-line animate-spin text-xl"></i>
                                        PROCESSING...
                                    </span>
                                ) : (
                                    activeTab === 'book' ? 'SEARCH FLIGHTS' :
                                        activeTab === 'manage' ? 'RETRIEVE BOOKING' : 'CHECK STATUS'
                                )}
                            </span>
                            {!isSearching && (
                                <i className="ri-arrow-right-up-line text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 relative"></i>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Booking;
