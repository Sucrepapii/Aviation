import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';

import exclusiveVideo from '../assets/videos/privare jet.mp4';

const PrivateJet: React.FC = () => {
    const [showQuoteModal, setShowQuoteModal] = useState(false);
    const [showFleetModal, setShowFleetModal] = useState(false);

    useEffect(() => {
        if (showQuoteModal || showFleetModal) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [showQuoteModal, showFleetModal]);
    return (
        <div className="bg-white min-h-screen">
            <PageHeader
                title="Private Jet"
                subtitle="Unprecedented flexibility, unparalleled privacy, and bespoke scheduling for our elite clientele."
            />

            {/* Introduction Overview */}
            <section className="py-24 px-6 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative group rounded-4xl overflow-hidden shadow-2xl shadow-primary/10">
                    <video
                        src={exclusiveVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-[400px] lg:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    <div className="absolute bottom-10 left-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-xs font-black tracking-widest uppercase mb-1 text-accent">Ultimate Privacy</p>
                        <p className="text-3xl font-serif italic">Your sky, your rules.</p>
                    </div>
                </div>

                <div className="space-y-8 lg:pl-8">
                    <div className="flex items-center gap-4">
                        <span className="w-12 h-[2px] bg-accent"></span>
                        <p className="text-accent font-black uppercase tracking-[0.2em] text-xs">A Higher Standard</p>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-primary leading-[1.2]">
                        Charter the <br /> <span className="text-accent italic font-light">Extraordinary</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Flivan Private Aviation provides an exclusive travel experience tailored entirely to your itinerary. Bypass commercial terminals and step directly onto tarmac access, departing on your schedule without compromise.
                    </p>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Whether you require a light jet for a quick regional hop or an ultra-long-range cabin for transcontinental business, our dedicated charter specialists ensure every detail is handled with absolute discretion.
                    </p>
                </div>
            </section>

            {/* The Fleet Showcase */}
            <section className="py-32 px-6 bg-gray-50 border-y border-gray-100/50">
                <div className="max-w-[1280px] mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <h3 className="text-4xl md:text-5xl font-black text-primary">Our Elite Fleet</h3>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">A modern collection of aircraft ready to exceed the demands of the modern traveler.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Light Jet */}
                        <div className="bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 group">
                            <div className="h-48 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1000&auto=format&fit=crop" alt="Light Jet In Flight" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full">Up to 6 Pax</div>
                            </div>
                            <div className="p-8">
                                <h4 className="text-2xl font-bold text-primary mb-2">Light Jets</h4>
                                <p className="text-accent text-sm font-black tracking-widest uppercase mb-4">Regional Agility</p>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    Perfect for short-haul travel, offering exceptional speed and the ability to land at smaller, closer airports to save you time.
                                </p>
                                <div className="flex items-center gap-4 text-xs font-bold text-gray-400">
                                    <span className="flex items-center gap-1"><i className="ri-flight-takeoff-line text-accent text-lg"></i> 3.5h Range</span>
                                    <span className="flex items-center gap-1"><i className="ri-speed-mini-fill text-accent text-lg"></i> 400kts</span>
                                </div>
                            </div>
                        </div>

                        {/* Midsize Jet */}
                        <div className="bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 group">
                            <div className="h-48 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1583416750470-965b2707b355?q=80&w=1000&auto=format&fit=crop" alt="Midsize Jet" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full">Up to 9 Pax</div>
                            </div>
                            <div className="p-8">
                                <h4 className="text-2xl font-bold text-primary mb-2">Midsize Jets</h4>
                                <p className="text-accent text-sm font-black tracking-widest uppercase mb-4">Continental Comfort</p>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    Featuring stand-up cabins, a dedicated flight attendant, and ample room for collaborative business or absolute relaxation.
                                </p>
                                <div className="flex items-center gap-4 text-xs font-bold text-gray-400">
                                    <span className="flex items-center gap-1"><i className="ri-flight-takeoff-line text-accent text-lg"></i> 6.0h Range</span>
                                    <span className="flex items-center gap-1"><i className="ri-speed-mini-fill text-accent text-lg"></i> 460kts</span>
                                </div>
                            </div>
                        </div>

                        {/* Heavy Jet */}
                        <div className="bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 group">
                            <div className="h-48 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1517400508447-f8dd518b86db?q=80&w=1000&auto=format&fit=crop" alt="Heavy Jet Interior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full">Up to 16 Pax</div>
                            </div>
                            <div className="p-8">
                                <h4 className="text-2xl font-bold text-primary mb-2">Ultra-Long Range</h4>
                                <p className="text-accent text-sm font-black tracking-widest uppercase mb-4">Global Reach</p>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    The pinnacle of private travel. Multiple cabin zones, full-sized beds, and non-stop capabilities across oceans.
                                </p>
                                <div className="flex items-center gap-4 text-xs font-bold text-gray-400">
                                    <span className="flex items-center gap-1"><i className="ri-flight-takeoff-line text-accent text-lg"></i> 14h+ Range</span>
                                    <span className="flex items-center gap-1"><i className="ri-speed-mini-fill text-accent text-lg"></i> 510kts</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bespoke Services Grid */}
            <section className="py-24 px-6 max-w-[1280px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center space-y-4 p-6">
                        <div className="w-20 h-20 mx-auto rounded-full bg-primary/5 flex items-center justify-center text-accent text-3xl">
                            <i className="ri-user-star-line"></i>
                        </div>
                        <h4 className="text-xl font-bold text-primary">Dedicated Concierge</h4>
                        <p className="text-sm text-gray-500">A 24/7 personal manager to handle every aspect of your door-to-door journey.</p>
                    </div>
                    <div className="text-center space-y-4 p-6">
                        <div className="w-20 h-20 mx-auto rounded-full bg-primary/5 flex items-center justify-center text-accent text-3xl">
                            <i className="ri-car-line"></i>
                        </div>
                        <h4 className="text-xl font-bold text-primary">Tarmac Transfer</h4>
                        <p className="text-sm text-gray-500">Chauffeur-driven luxury vehicles waiting right at the steps of your aircraft.</p>
                    </div>
                    <div className="text-center space-y-4 p-6">
                        <div className="w-20 h-20 mx-auto rounded-full bg-primary/5 flex items-center justify-center text-accent text-3xl">
                            <i className="ri-restaurant-line"></i>
                        </div>
                        <h4 className="text-xl font-bold text-primary">Bespoke Catering</h4>
                        <p className="text-sm text-gray-500">Menus customized entirely to your preferences, sourced from top local restaurants.</p>
                    </div>
                    <div className="text-center space-y-4 p-6">
                        <div className="w-20 h-20 mx-auto rounded-full bg-primary/5 flex items-center justify-center text-accent text-3xl">
                            <i className="ri-shield-star-line"></i>
                        </div>
                        <h4 className="text-xl font-bold text-primary">Absolute Discretion</h4>
                        <p className="text-sm text-gray-500">Private terminals and strict confidentiality protocols protect your highly valued privacy.</p>
                    </div>
                </div>
            </section>

            {/* Charter CTA */}
            <section className="relative py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-primary">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/10 blur-[150px] rounded-full pointer-events-none"></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center text-white space-y-8">
                    <p className="text-accent font-black uppercase tracking-[0.2em] text-sm">Ready for Departure</p>
                    <h2 className="text-5xl md:text-6xl font-black leading-[1.1]">
                        Inquire About a Charter
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Connect with our private aviation specialists to receive a tailored itinerary and transparent quote within hours.
                    </p>
                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button onClick={() => setShowQuoteModal(true)} className="w-full sm:w-auto px-10 py-5 bg-white text-primary font-bold tracking-widest uppercase text-sm rounded-full hover:bg-accent transition-all hover:-translate-y-1">
                            Request Quote
                        </button>
                        <button onClick={() => setShowFleetModal(true)} className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/30 text-white font-bold tracking-widest uppercase text-sm rounded-full hover:bg-white/10 transition-all">
                            View Fleet Guide
                        </button>
                    </div>
                </div>
            </section>

            {/* Request Quote Modal */}
            {showQuoteModal && (
                <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-8 pt-8 sm:pt-12 pb-8 sm:pb-12 overflow-y-auto">
                    <div className="fixed inset-0 bg-primary/80 backdrop-blur-md" onClick={() => setShowQuoteModal(false)}></div>
                    <div className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl animate-fade-in flex flex-col items-center mb-24">
                        <div className="p-8 md:p-16 w-full max-w-2xl text-center">
                            <button onClick={() => setShowQuoteModal(false)} className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-primary hover:bg-accent hover:text-primary transition-colors z-10">
                                <i className="ri-close-line text-xl"></i>
                            </button>
                            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <i className="ri-mail-send-line text-3xl"></i>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-primary mb-4">Request a Charter Quote</h3>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                Please provide your itinerary details below. One of our private aviation specialists will prepare a transparent quote and contact you within two hours.
                            </p>

                            <form className="space-y-4 text-left" onSubmit={(e) => { e.preventDefault(); setShowQuoteModal(false); }}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-black uppercase text-gray-500 tracking-wider mb-2">Departure City</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none font-medium transition-all" placeholder="e.g. New York (Teterboro)" required />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black uppercase text-gray-500 tracking-wider mb-2">Arrival City</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none font-medium transition-all" placeholder="e.g. London (Farnborough)" required />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-black uppercase text-gray-500 tracking-wider mb-2">Departure Date</label>
                                        <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none font-medium transition-all" required />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black uppercase text-gray-500 tracking-wider mb-2">Passengers</label>
                                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none font-medium transition-all appearance-none" required>
                                            <option value="">Select number of pax</option>
                                            <option value="1-4">1-4</option>
                                            <option value="5-8">5-8</option>
                                            <option value="9-14">9-14</option>
                                            <option value="15+">15+</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase text-gray-500 tracking-wider mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none font-medium transition-all" placeholder="you@company.com" required />
                                </div>
                                <button type="submit" className="w-full mt-4 px-8 py-4 bg-primary text-white font-bold tracking-widest uppercase text-xs rounded-xl hover:bg-accent hover:text-primary transition-all">
                                    Submit Request
                                </button>
                            </form>
                            <button onClick={() => setShowQuoteModal(false)} className="mt-6 text-sm font-medium text-gray-400 hover:text-primary underline transition-colors">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Fleet Guide Modal */}
            {showFleetModal && (
                <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-8 pt-8 sm:pt-12 pb-8 sm:pb-12">
                    <div className="fixed inset-0 bg-primary/80 backdrop-blur-md" onClick={() => setShowFleetModal(false)}></div>
                    <div className="relative bg-white w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl animate-fade-in flex flex-col h-[90vh] lg:h-[85vh]">
                        <div className="p-8 md:p-16 overflow-y-auto">
                            <button onClick={() => setShowFleetModal(false)} className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-primary hover:bg-accent hover:text-primary transition-colors z-10">
                                <i className="ri-close-line text-xl"></i>
                            </button>
                            <div className="text-center mb-12 space-y-4 pt-4">
                                <h3 className="text-3xl font-black text-primary">Flivan Private Fleet</h3>
                                <p className="text-gray-500 font-serif italic text-lg">Aircraft specifications and capabilities</p>
                            </div>

                            <div className="space-y-12">
                                <div>
                                    <h4 className="text-xs font-black tracking-[0.2em] uppercase text-accent mb-6 border-b border-gray-100 pb-2">Light Jets</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="bg-gray-50 p-6 rounded-2xl">
                                            <p className="font-bold text-primary text-lg mb-2">Phenom 300</p>
                                            <ul className="text-sm text-gray-500 space-y-2">
                                                <li><span className="font-bold">Pax:</span> Up to 7</li>
                                                <li><span className="font-bold">Range:</span> 1,971 nm</li>
                                                <li><span className="font-bold">Speed:</span> 453 kts</li>
                                                <li><span className="font-bold">Cabin:</span> Best-in-class altitude</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-2xl">
                                            <p className="font-bold text-primary text-lg mb-2">Citation CJ4</p>
                                            <ul className="text-sm text-gray-500 space-y-2">
                                                <li><span className="font-bold">Pax:</span> Up to 8</li>
                                                <li><span className="font-bold">Range:</span> 2,165 nm</li>
                                                <li><span className="font-bold">Speed:</span> 451 kts</li>
                                                <li><span className="font-bold">Cabin:</span> Advanced refreshment center</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-black tracking-[0.2em] uppercase text-accent mb-6 border-b border-gray-100 pb-2">Midsize & Super-Midsize</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="bg-gray-50 p-6 rounded-2xl">
                                            <p className="font-bold text-primary text-lg mb-2">Citation Latitude</p>
                                            <ul className="text-sm text-gray-500 space-y-2">
                                                <li><span className="font-bold">Pax:</span> Up to 9</li>
                                                <li><span className="font-bold">Range:</span> 2,700 nm</li>
                                                <li><span className="font-bold">Speed:</span> 446 kts</li>
                                                <li><span className="font-bold">Cabin:</span> Flat floor, stand-up cabin</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-2xl">
                                            <p className="font-bold text-primary text-lg mb-2">Challenger 350</p>
                                            <ul className="text-sm text-gray-500 space-y-2">
                                                <li><span className="font-bold">Pax:</span> Up to 10</li>
                                                <li><span className="font-bold">Range:</span> 3,200 nm</li>
                                                <li><span className="font-bold">Speed:</span> 470 kts</li>
                                                <li><span className="font-bold">Cabin:</span> Unrestricted baggage access</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-black tracking-[0.2em] uppercase text-accent mb-6 border-b border-gray-100 pb-2">Heavy & Ultra-Long Range</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="bg-gray-50 p-6 rounded-2xl">
                                            <p className="font-bold text-primary text-lg mb-2">Global 6000</p>
                                            <ul className="text-sm text-gray-500 space-y-2">
                                                <li><span className="font-bold">Pax:</span> Up to 14</li>
                                                <li><span className="font-bold">Range:</span> 6,000 nm</li>
                                                <li><span className="font-bold">Speed:</span> 513 kts</li>
                                                <li><span className="font-bold">Cabin:</span> Private stateroom, Ka-band Wi-Fi</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-2xl">
                                            <p className="font-bold text-primary text-lg mb-2">Gulfstream G650ER</p>
                                            <ul className="text-sm text-gray-500 space-y-2">
                                                <li><span className="font-bold">Pax:</span> Up to 16</li>
                                                <li><span className="font-bold">Range:</span> 7,500 nm</li>
                                                <li><span className="font-bold">Speed:</span> 516 kts</li>
                                                <li><span className="font-bold">Cabin:</span> Lowest cabin altitude, 4 living areas</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default PrivateJet;
