import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';

const OnboardDining: React.FC = () => {
    const [showMenuModal, setShowMenuModal] = useState(false);
    const [showPreOrderModal, setShowPreOrderModal] = useState(false);

    // Scroll to top when modals open
    useEffect(() => {
        if (showMenuModal || showPreOrderModal) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [showMenuModal, showPreOrderModal]);

    return (
        <div className="bg-white min-h-screen">
            <PageHeader
                title="Onboard Dining"
                subtitle="Michelin-star inspired menus crafted from organic, locally-sourced ingredients at 40,000 feet."
            />

            {/* Introduction & Chef Section */}
            <section className="py-24 px-6 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <span className="w-12 h-[2px] bg-accent"></span>
                        <p className="text-accent font-black uppercase tracking-[0.2em] text-xs">A Culinary Journey</p>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-primary leading-[1.2]">
                        Gastronomy <br /> <span className="text-accent italic font-light">Above the Clouds</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        We believe that dining at 40,000 feet should rival the world's most acclaimed restaurants. Flivan has partnered with globally renowned Michelin-starred chefs to curate menus that celebrate seasonality, provenance, and extraordinary flavor profiles.
                    </p>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Every dish is masterfully prepared onboard, paired with an award-winning cellar of vintage wines and artisanal spirits, served on fine bone china with bespoke crystal glassware.
                    </p>
                    <button onClick={() => setShowMenuModal(true)} className="mt-4 px-8 py-4 bg-primary text-white font-bold tracking-widest uppercase text-xs rounded-full hover:bg-accent hover:text-primary transition-all shadow-xl shadow-primary/20">
                        View Seasonal Menu
                    </button>
                </div>
                <div className="relative group rounded-4xl overflow-hidden shadow-2xl shadow-primary/10">
                    <img
                        src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2000&auto=format&fit=crop"
                        alt="Master Chef preparing a dish"
                        className="w-full h-[400px] lg:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    <div className="absolute bottom-10 left-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-xs font-black tracking-widest uppercase mb-1 text-accent">Executive Chef</p>
                        <p className="text-3xl font-serif italic">Jean-Luc Renard</p>
                    </div>
                </div>
            </section>

            {/* Menu Highlights Grid */}
            <section className="py-32 px-6 bg-gray-50 border-y border-gray-100/50">
                <div className="max-w-[1280px] mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <h3 className="text-4xl md:text-5xl font-black text-primary">The Signature Collection</h3>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">A glimpse into our meticulously crafted multi-course dining experience.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Course 1 */}
                        <div className="bg-white rounded-4xl p-10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 group">
                            <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-primary transition-colors">
                                <i className="ri-restaurant-2-line text-3xl text-primary group-hover:text-primary"></i>
                            </div>
                            <h4 className="text-2xl font-bold text-primary mb-4">Caviar Service</h4>
                            <p className="text-gray-500 leading-relaxed mb-8">
                                Exclusive Oscietra caviar presented with traditional garnishes, warm blinis, and a mother-of-pearl spoon.
                            </p>
                            <p className="text-xs font-black uppercase text-accent tracking-widest pt-6 border-t border-gray-100 mt-auto">First Class Exclusive</p>
                        </div>
                        {/* Course 2 */}
                        <div className="bg-white rounded-4xl p-10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 group">
                            <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-primary transition-colors">
                                <i className="ri-goblet-line text-3xl text-primary group-hover:text-primary"></i>
                            </div>
                            <h4 className="text-2xl font-bold text-primary mb-4">Sommelier's Cellar</h4>
                            <p className="text-gray-500 leading-relaxed mb-8">
                                A curated selection of rare Grand Cru vintages, boutique champagnes, and artisanal spirits from around the globe.
                            </p>
                            <p className="text-xs font-black uppercase text-accent tracking-widest pt-6 border-t border-gray-100 mt-auto">Expert Pairing</p>
                        </div>
                        {/* Course 3 */}
                        <div className="bg-white rounded-4xl p-10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 group">
                            <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-primary transition-colors">
                                <i className="ri-leaf-line text-3xl text-primary group-hover:text-primary"></i>
                            </div>
                            <h4 className="text-2xl font-bold text-primary mb-4">Plant-Based Mastery</h4>
                            <p className="text-gray-500 leading-relaxed mb-8">
                                Innovative and vibrant vegan menus utilizing the finest organic produce, designed to delight every palate.
                            </p>
                            <p className="text-xs font-black uppercase text-accent tracking-widest pt-6 border-t border-gray-100 mt-auto">Dietary Excellence</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Anytime Dining CTA */}
            <section className="relative py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1544025162-8e6ad1c911b6?q=80&w=2000&auto=format&fit=crop" alt="Wine pouring" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center text-white space-y-8">
                    <h2 className="text-5xl md:text-6xl font-black leading-[1.1]">
                        Dine On Demand
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Your schedule governs your journey. Enjoy our exquisite à la carte menu at any time during your flight. From midnight snacks to formal dinners, our crew is ready to serve you whenever you desire.
                    </p>
                    <div className="pt-8">
                        <button onClick={() => setShowPreOrderModal(true)} className="px-8 py-4 bg-white text-primary font-bold tracking-widest uppercase text-xs rounded-full hover:bg-accent transition-all hover:-translate-y-1">
                            Discover Pre-Order
                        </button>
                    </div>
                </div>
            </section>

            {/* Seasonal Menu Modal */}
            {showMenuModal && (
                <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-8 pt-8 sm:pt-12 pb-8 sm:pb-12">
                    <div className="absolute inset-0 bg-primary/80 backdrop-blur-md" onClick={() => setShowMenuModal(false)}></div>
                    <div className="relative bg-white w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl animate-fade-in flex flex-col h-[90vh] lg:h-[85vh]">
                        <div className="p-8 md:p-16 overflow-y-auto">
                            <button onClick={() => setShowMenuModal(false)} className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-primary hover:bg-accent hover:text-primary transition-colors z-10">
                                <i className="ri-close-line text-xl"></i>
                            </button>
                            <div className="text-center mb-12 space-y-4 pt-4">
                                <h3 className="text-3xl font-black text-primary">Autumn Collection</h3>
                                <p className="text-gray-500 font-serif italic text-lg">Curated by Chef Jean-Luc Renard</p>
                            </div>

                            <div className="space-y-10">
                                <div>
                                    <h4 className="text-xs font-black tracking-[0.2em] uppercase text-accent mb-6 border-b border-gray-100 pb-2">Amuse-Bouche</h4>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <p className="font-bold text-primary text-lg">White Truffle Gougères</p>
                                    </div>
                                    <p className="text-sm text-gray-500 italic">Warm gruyère puffs infused with Alba white truffle oil.</p>
                                </div>

                                <div>
                                    <h4 className="text-xs font-black tracking-[0.2em] uppercase text-accent mb-6 border-b border-gray-100 pb-2">Appetizer</h4>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <p className="font-bold text-primary text-lg">Lobster & Citrus Carpaccio</p>
                                    </div>
                                    <p className="text-sm text-gray-500 italic">Poached Maine lobster, blood orange, micro-basil, yuzu vinaigrette.</p>
                                </div>

                                <div>
                                    <h4 className="text-xs font-black tracking-[0.2em] uppercase text-accent mb-6 border-b border-gray-100 pb-2">Main Course</h4>
                                    <div className="space-y-8">
                                        <div>
                                            <div className="flex justify-between items-baseline mb-2">
                                                <p className="font-bold text-primary text-lg">Wagyu Beef Filet</p>
                                                <span className="text-xs font-bold bg-accent/20 text-primary px-3 py-1 rounded-full uppercase tracking-wider">Chef's Signature</span>
                                            </div>
                                            <p className="text-sm text-gray-500 italic">Seared A5 Wagyu, truffled potato purée, charred asparagus, bordelaise reduction.</p>
                                        </div>
                                        <div>
                                            <div className="flex justify-between items-baseline mb-2">
                                                <p className="font-bold text-primary text-lg">Miso-Glazed Chilean Sea Bass</p>
                                            </div>
                                            <p className="text-sm text-gray-500 italic">Sustainably sourced, served with baby bok choy and ginger-infused dashi broth.</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-black tracking-[0.2em] uppercase text-accent mb-6 border-b border-gray-100 pb-2">Dessert</h4>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <p className="font-bold text-primary text-lg">Valrhona Chocolate Dome</p>
                                    </div>
                                    <p className="text-sm text-gray-500 italic">Dark chocolate mousse, passion fruit center, hazelnut praline crunch.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Pre-Order Modal */}
            {showPreOrderModal && (
                <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-8 pt-8 sm:pt-12 pb-8 sm:pb-12 overflow-y-auto">
                    <div className="fixed inset-0 bg-primary/80 backdrop-blur-md" onClick={() => setShowPreOrderModal(false)}></div>
                    <div className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl animate-fade-in flex flex-col items-center mb-24">
                        <div className="p-8 md:p-16 w-full max-w-2xl text-center">
                            <button onClick={() => setShowPreOrderModal(false)} className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-primary hover:bg-accent hover:text-primary transition-colors z-10">
                                <i className="ri-close-line text-xl"></i>
                            </button>
                            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <i className="ri-calendar-check-line text-3xl"></i>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-primary mb-4">Reserve Your Entrée</h3>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                Ensure your preferred culinary selection is available on your flight. Enter your booking reference to browse options and pre-order up to 24 hours before departure.
                            </p>

                            <form className="space-y-4 text-left" onSubmit={(e) => { e.preventDefault(); setShowPreOrderModal(false); }}>
                                <div>
                                    <label className="block text-xs font-black uppercase text-gray-500 tracking-wider mb-2">Booking Reference (PNR)</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none font-medium transition-all" placeholder="e.g. A8X9YL" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase text-gray-500 tracking-wider mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none font-medium transition-all" placeholder="Enter last name" required />
                                </div>
                                <button type="submit" className="w-full mt-4 px-8 py-4 bg-primary text-white font-bold tracking-widest uppercase text-xs rounded-xl hover:bg-accent hover:text-primary transition-all">
                                    Continue to Pre-Order
                                </button>
                            </form>
                            <button onClick={() => setShowPreOrderModal(false)} className="mt-6 text-sm font-medium text-gray-400 hover:text-primary underline transition-colors">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OnboardDining;
