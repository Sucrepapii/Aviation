import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Flight {
    id: string;
    flightNumber: string;
    originIata: string;
    originCity: string;
    destinationIata: string;
    destinationCity: string;
    departureTime: string;
    arrivalTime: string;
    basePrice: number;
    availableSeats: number;
    travelClass: string;
    airline: string;
}

const SearchResults: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);

    // Extract query values
    const origin = queryParams.get('origin') || '';
    const destination = queryParams.get('destination') || '';
    const date = queryParams.get('date') || '';

    const [flights, setFlights] = useState<Flight[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchFlights = async () => {
            setLoading(true);
            try {
                // Determine origin/dest IATA codes. Usually "City (IATA)" format from the input
                const extractIata = (str: string) => {
                    const match = str.match(/\(([A-Z]{3})\)/);
                    return match ? match[1] : str;
                };

                const originIata = extractIata(origin);
                const destIata = extractIata(destination);

                let url = 'http://localhost:5000/api/flights';
                const queryParts = [];
                if (originIata) queryParts.push(`origin=${originIata}`);
                if (destIata) queryParts.push(`destination=${destIata}`);
                if (date) queryParts.push(`date=${date}`);

                if (queryParts.length > 0) {
                    url += `?${queryParts.join('&')}`;
                }

                const res = await axios.get(url);
                setFlights(res.data);
            } catch (err) {
                console.error("Failed to fetch flights", err);
                setError('Failed to fetch available flights. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchFlights();
    }, [origin, destination, date]);

    const formatTime = (isoString: string) => {
        return new Date(isoString).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    };

    const formatDate = (isoString: string) => {
        return new Date(isoString).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    const calculateDuration = (dep: string, arr: string) => {
        const diffMs = new Date(arr).getTime() - new Date(dep).getTime();
        const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
        const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        return `${diffHrs}h ${diffMins}m`;
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-28 pb-20">
            {/* Search Header Sidebar-like background element */}
            <div className="absolute top-0 left-0 w-full h-80 bg-primary -z-10"></div>

            <div className="max-w-[1240px] mx-auto px-6">

                {/* Search Modification Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                            Select your <span className="text-accent italic font-light">departure</span>
                        </h1>
                        <p className="text-white/70 font-medium mt-2 flex items-center gap-2">
                            <i className="ri-plane-line"></i>
                            {origin || "Anywhere"} to {destination || "Anywhere"}
                            {date && ` • ${new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}`}
                        </p>
                    </div>

                    <button onClick={() => navigate('/')} className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 rounded-2xl font-bold transition-all flex items-center gap-2 group">
                        <i className="ri-search-line group-hover:scale-110 transition-transform"></i> Modify Search
                    </button>
                </div>

                {/* Results Container */}
                <div className="bg-transparent relative">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-4xl shadow-xl shadow-primary/5">
                            <i className="ri-loader-4-line text-6xl text-primary animate-spin mb-4"></i>
                            <h3 className="text-2xl font-black text-primary tracking-tight">Searching available routes</h3>
                            <p className="text-text-light mt-2">Connecting with our premium global network...</p>
                        </div>
                    ) : error ? (
                        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-4xl shadow-xl shadow-primary/5">
                            <i className="ri-error-warning-line text-6xl text-red-500 mb-4"></i>
                            <h3 className="text-2xl font-black text-primary tracking-tight">Search Failed</h3>
                            <p className="text-text-light mt-2 text-center max-w-md">{error}</p>
                            <button onClick={() => window.location.reload()} className="mt-6 px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-all">Try Again</button>
                        </div>
                    ) : flights.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-4xl shadow-xl shadow-primary/5 border border-gray-100">
                            <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                                <i className="ri-passport-line text-4xl text-primary opacity-50"></i>
                            </div>
                            <h3 className="text-2xl font-black text-primary tracking-tight">No flights found</h3>
                            <p className="text-text-light mt-2 text-center max-w-md">We couldn't find any flights matching your criteria. Try adjusting your dates or destinations.</p>
                            <button onClick={() => navigate('/')} className="mt-8 px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-bold transition-all">
                                Return to Search
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <div className="flex justify-between items-center mb-6 px-2">
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">{flights.length} Flights Available</p>
                                <div className="flex gap-2">
                                    <span className="px-4 py-2 bg-white text-xs font-bold text-primary rounded-lg shadow-sm border border-gray-100 flex items-center gap-2 cursor-pointer hover:border-accent transition-colors">
                                        Price (Lowest) <i className="ri-arrow-down-s-line"></i>
                                    </span>
                                </div>
                            </div>

                            {flights.map((flight) => (
                                <div key={flight.id} className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-xl shadow-primary/5 border border-gray-100 hover:shadow-2xl hover:shadow-primary/10 hover:border-accent/30 transition-all duration-300 group">
                                    <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">

                                        {/* Left Side: Airline & Timing */}
                                        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-6">

                                            {/* Departure */}
                                            <div className="text-left w-full sm:w-auto">
                                                <p className="text-4xl font-black text-primary tracking-tighter">{formatTime(flight.departureTime)}</p>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1 mb-2">{formatDate(flight.departureTime)}</p>
                                                <div className="flex items-center gap-2">
                                                    <span className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-primary font-black text-sm border border-gray-100">{flight.originIata}</span>
                                                    <span className="text-sm font-bold text-text-light">{flight.originCity}</span>
                                                </div>
                                                <div className="mt-4">
                                                    <span className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg border border-primary/10">
                                                        {flight.airline}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Duration Timeline */}
                                            <div className="flex flex-col items-center justify-center w-full px-4 relative min-w-[150px]">
                                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest bg-white z-10 px-2 relative -bottom-2">{calculateDuration(flight.departureTime, flight.arrivalTime)}</span>
                                                <div className="w-full flex items-center gap-2 group-hover:text-accent transition-colors">
                                                    <div className="w-2 h-2 rounded-full border-2 border-current bg-white z-10"></div>
                                                    <div className="flex-1 h-[2px] bg-linear-to-r from-gray-200 via-current to-gray-200 relative">
                                                        <i className="ri-flight-takeoff-line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-current"></i>
                                                    </div>
                                                    <div className="w-2 h-2 rounded-full border-2 border-current bg-white z-10"></div>
                                                </div>
                                                <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full mt-3">Direct Flight</span>
                                            </div>

                                            {/* Arrival */}
                                            <div className="text-left sm:text-right w-full sm:w-auto">
                                                <p className="text-4xl font-black text-primary tracking-tighter">{formatTime(flight.arrivalTime)}</p>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1 mb-2">{formatDate(flight.arrivalTime)}</p>
                                                <div className="flex items-center sm:justify-end gap-2">
                                                    <span className="text-sm font-bold text-text-light">{flight.destinationCity}</span>
                                                    <span className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-primary font-black text-sm border border-gray-100">{flight.destinationIata}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Side: Price & Action */}
                                        <div className="w-full lg:w-auto flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-4 pl-0 lg:pl-10 border-t lg:border-t-0 lg:border-l border-gray-100 pt-6 lg:pt-0">
                                            <div className="flex flex-col lg:items-end">
                                                <span className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{flight.travelClass}</span>
                                                <p className="text-3xl font-black text-primary tracking-tighter">
                                                    <sup className="text-lg font-bold text-gray-400 mr-1">$</sup>
                                                    {flight.basePrice.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                                </p>
                                                <span className="text-[10px] text-gray-400 font-bold mt-1">{flight.availableSeats} Seats Left</span>
                                            </div>

                                            <Link to={`/book/${flight.id}`} className="px-8 py-4 bg-primary text-white text-sm font-black rounded-2xl hover:bg-accent hover:-translate-y-1 transition-all shadow-lg shadow-primary/20 flex items-center gap-2 whitespace-nowrap">
                                                Book Now <i className="ri-arrow-right-line"></i>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
