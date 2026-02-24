import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';

import exclusiveVideo from '../assets/videos/airline landing.mp4';

const partners = [
    {
        name: "Qatar Airways",
        region: "Middle East & Beyond",
        description: "Experience the World's Best Business Class, Qsuite, connecting through the state-of-the-art Hamad International Airport.",
        logo: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "British Airways",
        region: "Europe & The Americas",
        description: "Seamless access to Europe and North America through the exclusive Terminal 5 at London Heathrow.",
        logo: "https://images.unsplash.com/photo-1522093537031-3ee9dfb101ff?q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "Cathay Pacific",
        region: "Asia Pacific",
        description: "Unrivaled connectivity across Asia Pacific, anchored by the award-winning lounges at Hong Kong International.",
        logo: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "Qantas",
        region: "Australasia",
        description: "The Spirit of Australia, offering premium ultra-long-haul routes connecting the world to Oceania.",
        logo: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=800&auto=format&fit=crop"
    }
];

const PartnerAirlines: React.FC = () => {
    const [showNetworkModal, setShowNetworkModal] = useState(false);

    // Scroll to top when modal opens
    useEffect(() => {
        if (showNetworkModal) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [showNetworkModal]);

    return (
        <div className="bg-white min-h-screen">
            <PageHeader
                title="Partner Airlines"
                subtitle="Seamlessly connecting you to a global network of the world's most premium carriers."
            />

            {/* Introduction Overview */}
            <section className="py-24 px-6 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 lg:pr-8">
                    <div className="flex items-center gap-4">
                        <span className="w-12 h-[2px] bg-accent"></span>
                        <p className="text-accent font-black uppercase tracking-[0.2em] text-xs">The oneworld Alliance</p>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-primary leading-[1.2]">
                        Global Reach. <br /> <span className="text-accent italic font-light">Singular Standard.</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Flivan is a proud member of the oneworld® alliance, bringing together world-class airlines to deliver a superior, seamless travel experience to more than 900 destinations globally.
                    </p>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Whether you are traveling for business or leisure, our partnerships ensure your journey is distinguished by consistent, premium service from departure to final arrival.
                    </p>
                    <div className="pt-4">
                        <button
                            onClick={() => setShowNetworkModal(true)}
                            className="px-8 py-4 bg-primary text-white font-bold tracking-widest uppercase text-xs rounded-xl hover:bg-accent hover:text-primary transition-all shadow-xl shadow-primary/20"
                        >
                            View Global Network Map
                        </button>
                    </div>
                </div>

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
                    <div className="absolute inset-x-0 bottom-0 p-10 flex items-center justify-between">
                        <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <p className="text-xs font-black tracking-widest uppercase mb-1 text-accent">13 Member Airlines</p>
                            <p className="text-3xl font-serif italic">170 Territories</p>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                            <i className="ri-earth-line text-3xl text-white"></i>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seamless Benefits */}
            <section className="py-24 px-6 bg-primary text-white">
                <div className="max-w-[1280px] mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <h3 className="text-4xl font-black">Frictionless Connectivity</h3>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Benefits that travel with you, regardless of the operating carrier.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4 border-l-2 border-accent/20 pl-6 hover:border-accent transition-colors">
                            <i className="ri-luggage-cart-line text-3xl text-accent mb-4 block"></i>
                            <h4 className="text-xl font-bold">Through Check-In</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Check your baggage through to your final destination in a single transaction, seamlessly transferring across all member airlines.
                            </p>
                        </div>
                        <div className="space-y-4 border-l-2 border-accent/20 pl-6 hover:border-accent transition-colors">
                            <i className="ri-vip-crown-line text-3xl text-accent mb-4 block"></i>
                            <h4 className="text-xl font-bold">Reciprocal Tiers</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Your Executive Club status is recognized network-wide. Enjoy Priority Boarding, extra baggage allowance, and fast-track security.
                            </p>
                        </div>
                        <div className="space-y-4 border-l-2 border-accent/20 pl-6 hover:border-accent transition-colors">
                            <i className="ri-cup-line text-3xl text-accent mb-4 block"></i>
                            <h4 className="text-xl font-bold">600+ Lounges</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Eligible guests and elite members are granted access to an unparalleled network of luxury lounges worldwide before every flight.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Partners Grid */}
            <section className="py-32 px-6 bg-gray-50 border-y border-gray-100/50">
                <div className="max-w-[1280px] mx-auto">
                    <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <h3 className="text-4xl font-black text-primary mb-4">Strategic Partners</h3>
                            <p className="text-gray-500 text-lg max-w-xl">
                                We have forged deep codeshare alliances with the industry's most respected carriers to optimize your global itineraries.
                            </p>
                        </div>
                        <button className="text-accent font-bold tracking-widest uppercase text-xs flex items-center gap-2 group">
                            View All Partner Airlines <i className="ri-arrow-right-line group-hover:translate-x-2 transition-transform"></i>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {partners.map((partner, index) => (
                            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group flex flex-col sm:flex-row">
                                <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                                    />
                                </div>
                                <div className="p-8 sm:w-3/5 flex flex-col justify-center">
                                    <p className="text-accent text-xs font-black tracking-widest uppercase mb-2">{partner.region}</p>
                                    <h4 className="text-2xl font-bold text-primary mb-4">{partner.name}</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed mb-6">
                                        {partner.description}
                                    </p>
                                    <button className="mt-auto self-start text-xs font-bold text-primary uppercase tracking-widest border-b-2 border-transparent hover:border-primary transition-colors pb-1">
                                        View Schedule
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Network Map Modal */}
            {showNetworkModal && (
                <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-8 pt-8 sm:pt-12 pb-8 sm:pb-12">
                    <div className="absolute inset-0 bg-primary/90 backdrop-blur-md" onClick={() => setShowNetworkModal(false)}></div>
                    <div className="relative bg-white w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl animate-fade-in flex flex-col h-[90vh] lg:h-[85vh]">
                        {/* Modal Header */}
                        <div className="flex-none p-6 md:p-8 border-b border-gray-100 flex justify-between items-center bg-white z-10 sticky top-0">
                            <div>
                                <h3 className="text-2xl font-black text-primary">Global Network Map</h3>
                                <p className="text-gray-500 text-sm mt-1">Interactive Alliance Destinations</p>
                            </div>
                            <button onClick={() => setShowNetworkModal(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors">
                                <i className="ri-close-line text-xl"></i>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="flex-1 overflow-y-auto bg-gray-50 p-8 md:p-12">
                            <div className="space-y-12">
                                <div className="text-center max-w-2xl mx-auto space-y-6">
                                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto text-accent mb-6">
                                        <i className="ri-earth-line text-4xl"></i>
                                    </div>
                                    <h4 className="text-3xl font-black text-primary">Map System Offline</h4>
                                    <p className="text-gray-500 leading-relaxed">
                                        Our interactive globe is currently undergoing scheduled maintenance to add 15 new destinations across South America.
                                        Please use the Partner Directory to view flight schedules and book codeshare flights.
                                    </p>
                                    <button
                                        onClick={() => setShowNetworkModal(false)}
                                        className="px-8 py-4 bg-primary text-white font-bold tracking-widest uppercase text-xs rounded-xl hover:bg-accent hover:text-primary transition-all shadow-xl shadow-primary/20"
                                    >
                                        Return to Directory
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-12 border-t border-gray-200">
                                    <div>
                                        <h5 className="font-bold text-primary mb-4">North America</h5>
                                        <ul className="space-y-2 text-sm text-gray-500">
                                            <li>New York (JFK)</li>
                                            <li>Los Angeles (LAX)</li>
                                            <li>Chicago (ORD)</li>
                                            <li>Miami (MIA)</li>
                                            <li>Toronto (YYZ)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-primary mb-4">Europe</h5>
                                        <ul className="space-y-2 text-sm text-gray-500">
                                            <li>London (LHR)</li>
                                            <li>Madrid (MAD)</li>
                                            <li>Helsinki (HEL)</li>
                                            <li>Paris (CDG)</li>
                                            <li>Frankfurt (FRA)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-primary mb-4">Asia & ME</h5>
                                        <ul className="space-y-2 text-sm text-gray-500">
                                            <li>Doha (DOH)</li>
                                            <li>Tokyo (HND)</li>
                                            <li>Hong Kong (HKG)</li>
                                            <li>Singapore (SIN)</li>
                                            <li>Dubai (DXB)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-primary mb-4">Oceania</h5>
                                        <ul className="space-y-2 text-sm text-gray-500">
                                            <li>Sydney (SYD)</li>
                                            <li>Melbourne (MEL)</li>
                                            <li>Auckland (AKL)</li>
                                            <li>Brisbane (BNE)</li>
                                            <li>Perth (PER)</li>
                                        </ul>
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

export default PartnerAirlines;
