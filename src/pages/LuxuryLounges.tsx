import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';

const loungeFeatures = [
    {
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2000&auto=format&fit=crop",
        label: "Signature Architecture",
        title: "London Heathrow (LHR)"
    },
    {
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2000&auto=format&fit=crop",
        label: "Desert Oasis",
        title: "Dubai International (DXB)"
    },
    {
        image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2000&auto=format&fit=crop",
        label: "Botanical Retreat",
        title: "Singapore Changi (SIN)"
    }
];

const LuxuryLounges: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedLounge, setSelectedLounge] = useState<string | null>(null);

    // Scroll to top when modal opens
    useEffect(() => {
        if (selectedLounge) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [selectedLounge]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % loungeFeatures.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <PageHeader
                title="Luxury Lounges"
                subtitle="Oases of tranquility globally positioned to elevate your pre-flight experience."
            />

            {/* Introduction Overview */}
            <section className="py-24 px-6 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 lg:pr-8">
                    <div className="flex items-center gap-4">
                        <span className="w-12 h-[2px] bg-accent"></span>
                        <p className="text-accent font-black uppercase tracking-[0.2em] text-xs">Sanctuary Before Flight</p>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-primary leading-[1.2]">
                        Your Personal <br /> <span className="text-accent italic font-light">Retreat</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Escape the bustling terminal and step into a world of refined calm. Flivan’s global network of luxury lounges has been architecturally designed to provide an unparalleled environment for relaxation, dining, and productivity.
                    </p>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Exclusively available to First Class, Business Class, and top-tier Executive Club members, our lounges offer bespoke services that anticipate your every need before departure.
                    </p>
                </div>

                <div className="relative group rounded-4xl overflow-hidden shadow-2xl shadow-primary/10 h-[400px] lg:h-[600px]">
                    {loungeFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        >
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className={`w-full h-full object-cover transition-transform duration-10000 ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            <div className="absolute bottom-10 left-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-xs font-black tracking-widest uppercase mb-1 text-accent">{feature.label}</p>
                                <p className="text-3xl font-serif italic">{feature.title}</p>
                            </div>
                        </div>
                    ))}

                    {/* Carousel Nav */}
                    <div className="absolute top-6 right-6 z-20 flex gap-2">
                        {loungeFeatures.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-accent w-6' : 'bg-white/50 hover:bg-white/80'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium Amenities Grid */}
            <section className="py-24 px-6 bg-primary text-white">
                <div className="max-w-[1280px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="space-y-4">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-accent text-3xl mb-6">
                                <i className="ri-restaurant-line"></i>
                            </div>
                            <h4 className="text-2xl font-bold">A La Carte Dining</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Curated pre-flight menus by Michelin-starred chefs, served in dedicated dining rooms with sommelier-paired wine lists.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-accent text-3xl mb-6">
                                <i className="ri-drop-line"></i>
                            </div>
                            <h4 className="text-2xl font-bold">Six Senses Spa</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Rejuvenate with complimentary 15-minute express treatments, deep-tissue massages, and premium skincare therapies.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-accent text-3xl mb-6">
                                <i className="ri-macbook-line"></i>
                            </div>
                            <h4 className="text-2xl font-bold">Business Suites</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Soundproofed private offices, high-speed encrypted Wi-Fi, and fully equipped boardroom facilities.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-accent text-3xl mb-6">
                                <i className="ri-moon-clear-line"></i>
                            </div>
                            <h4 className="text-2xl font-bold">Quiet Suites</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Catch up on sleep in private day-beds featuring luxury linens and acoustic isolation during long transits.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Network Locations */}
            <section className="py-32 px-6 bg-gray-50 border-y border-gray-100/50">
                <div className="max-w-[1280px] mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <h3 className="text-4xl md:text-5xl font-black text-primary">Global Access</h3>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">Discover our flagship hubs positioned at major international gateways.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Hub 1 */}
                        <div className="bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 group">
                            <div className="h-64 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop" alt="London Lounge" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">Flagship</div>
                            </div>
                            <div className="p-10">
                                <h4 className="text-2xl font-bold text-primary mb-2">London Heathrow</h4>
                                <p className="text-accent text-sm font-black tracking-widest uppercase mb-6">Terminal 5, Concourses A & B</p>
                                <ul className="space-y-3 text-sm text-gray-500 mb-8">
                                    <li className="flex items-center gap-3"><i className="ri-check-line text-accent text-lg"></i> Direct Boarding Access</li>
                                    <li className="flex items-center gap-3"><i className="ri-check-line text-accent text-lg"></i> Laurent-Perrier Bar</li>
                                    <li className="flex items-center gap-3"><i className="ri-check-line text-accent text-lg"></i> Elemis Travel Spa</li>
                                </ul>
                                <button onClick={() => setSelectedLounge('London Heathrow')} className="w-full py-4 text-primary font-bold tracking-widest uppercase text-xs rounded-xl border-2 border-primary hover:bg-primary hover:text-white transition-all">
                                    View Details
                                </button>
                            </div>
                        </div>

                        {/* Hub 2 */}
                        <div className="bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 group">
                            <div className="h-64 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop" alt="Dubai Lounge" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="p-10">
                                <h4 className="text-2xl font-bold text-primary mb-2">Dubai International</h4>
                                <p className="text-accent text-sm font-black tracking-widest uppercase mb-6">Terminal 3, Concourse A</p>
                                <ul className="space-y-3 text-sm text-gray-500 mb-8">
                                    <li className="flex items-center gap-3"><i className="ri-check-line text-accent text-lg"></i> Cigar Room</li>
                                    <li className="flex items-center gap-3"><i className="ri-check-line text-accent text-lg"></i> Moët & Chandon Cellar</li>
                                    <li className="flex items-center gap-3"><i className="ri-check-line text-accent text-lg"></i> Luxury Duty-Free Boutique</li>
                                </ul>
                                <button onClick={() => setSelectedLounge('Dubai International')} className="w-full py-4 text-primary font-bold tracking-widest uppercase text-xs rounded-xl border-2 border-primary hover:bg-primary hover:text-white transition-all">
                                    View Details
                                </button>
                            </div>
                        </div>

                        {/* Hub 3 */}
                        <div className="bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 group">
                            <div className="h-64 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1549880181-a7b218d6e355?q=80&w=1000&auto=format&fit=crop" alt="Singapore Lounge" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="p-10">
                                <h4 className="text-2xl font-bold text-primary mb-2">Singapore Changi</h4>
                                <p className="text-accent text-sm font-black tracking-widest uppercase mb-6">Terminal 3, Level 3</p>
                                <ul className="space-y-3 text-sm text-gray-500 mb-8">
                                    <li className="flex items-center gap-3"><i className="ri-check-line text-accent text-lg"></i> Private Nap Suites</li>
                                    <li className="flex items-center gap-3"><i className="ri-check-line text-accent text-lg"></i> Hawker Street Food Station</li>
                                    <li className="flex items-center gap-3"><i className="ri-check-line text-accent text-lg"></i> Botanical Garden Views</li>
                                </ul>
                                <button onClick={() => setSelectedLounge('Singapore Changi')} className="w-full py-4 text-primary font-bold tracking-widest uppercase text-xs rounded-xl border-2 border-primary hover:bg-primary hover:text-white transition-all">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* View Details Modal */}
            {selectedLounge && (
                <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-8 pt-8 sm:pt-12 pb-8 sm:pb-12">
                    <div className="fixed inset-0 bg-primary/80 backdrop-blur-md" onClick={() => setSelectedLounge(null)}></div>
                    <div className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl animate-fade-in flex flex-col h-[90vh] lg:h-[85vh]">
                        <div className="p-8 md:p-16 overflow-y-auto w-full">
                            <button onClick={() => setSelectedLounge(null)} className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-primary hover:bg-accent hover:text-primary transition-colors z-10">
                                <i className="ri-close-line text-xl"></i>
                            </button>

                            <h3 className="text-3xl md:text-5xl font-black text-primary mb-2 pr-12">{selectedLounge}</h3>
                            <p className="text-accent font-black tracking-widest uppercase text-sm mb-12">Flagship Lounge Details</p>

                            <div className="space-y-12">
                                {/* Access Rules */}
                                <div>
                                    <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                            <i className="ri-passport-line"></i>
                                        </div>
                                        Lounge Access
                                    </h4>
                                    <p className="text-gray-500 leading-relaxed max-w-2xl text-sm">
                                        Complimentary access is extended to Flivan First and Business Class guests departing on a same-day flight, as well as Executive Club Platinum and Diamond members. Eligible guests may bring one companion traveling on the same itinerary.
                                    </p>
                                </div>

                                {/* Amenities List */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-gray-50 rounded-2xl p-6">
                                        <h5 className="font-bold text-primary mb-4 border-b border-gray-200 pb-2">Dining & Bar</h5>
                                        <ul className="space-y-3 text-sm text-gray-500">
                                            <li className="flex items-start gap-3"><i className="ri-restaurant-line mt-0.5 text-accent"></i> <span>À la carte dining room with seasonal menu</span></li>
                                            <li className="flex items-start gap-3"><i className="ri-goblet-line mt-0.5 text-accent"></i> <span>Fully-tended bar featuring premium spirits</span></li>
                                            <li className="flex items-start gap-3"><i className="ri-cup-line mt-0.5 text-accent"></i> <span>Barista-made coffee and artisanal tea selection</span></li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-50 rounded-2xl p-6">
                                        <h5 className="font-bold text-primary mb-4 border-b border-gray-200 pb-2">Wellness & Facilities</h5>
                                        <ul className="space-y-3 text-sm text-gray-500">
                                            <li className="flex items-start gap-3"><i className="ri-drop-line mt-0.5 text-accent"></i> <span>Luxury shower suites with Elemis amenities</span></li>
                                            <li className="flex items-start gap-3"><i className="ri-macbook-line mt-0.5 text-accent"></i> <span>Fully equipped business center and private pods</span></li>
                                            <li className="flex items-start gap-3"><i className="ri-moon-clear-line mt-0.5 text-accent"></i> <span>Quiet contemplation zone with day beds</span></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Spa Banner */}
                                <div className="bg-primary text-white rounded-2xl p-8 relative overflow-hidden group hover:shadow-xl transition-shadow">
                                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative z-10">
                                        <h5 className="font-bold text-2xl mb-2">Complimentary Spa Therapies</h5>
                                        <p className="text-gray-300 text-sm max-w-lg mb-6 leading-relaxed">
                                            First Class and Platinum members are invited to enjoy a 15-minute complimentary spa therapy. Choose from a neck and shoulder massage, revitalizing facial, or a luxury hot shave.
                                        </p>
                                        <button className="px-6 py-3 bg-white text-primary font-bold tracking-widest uppercase text-xs rounded-xl hover:bg-accent transition-all">
                                            View Spa Menu
                                        </button>
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

export default LuxuryLounges;
