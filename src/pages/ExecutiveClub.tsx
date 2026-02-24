import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';

import exclusiveVideo from '../assets/videos/airport prestige.mp4';

const ExecutiveClub: React.FC = () => {
    const [showJoinModal, setShowJoinModal] = useState(false);
    const [showTiersModal, setShowTiersModal] = useState(false);

    // Scroll to top when modals open
    useEffect(() => {
        if (showJoinModal || showTiersModal) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [showJoinModal, showTiersModal]);

    return (
        <div className="bg-white min-h-screen">
            <PageHeader
                title="Executive Club"
                subtitle="Exclusive privileges and bespoke services reserved for our most distinguished travelers."
            />

            {/* Introduction Overview */}
            <section className="py-24 px-6 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 lg:pr-8">
                    <div className="flex items-center gap-4">
                        <span className="w-12 h-[2px] bg-accent"></span>
                        <p className="text-accent font-black uppercase tracking-[0.2em] text-xs">Beyond Loyalty</p>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-primary leading-[1.2]">
                        A World of <br /> <span className="text-accent italic font-light">Privilege</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        The Flivan Executive Club is more than a frequent flyer program; it is a curated lifestyle of unprecedented exclusivity. Designed for those who demand excellence in every aspect of their journey.
                    </p>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Members enjoy priority access, enhanced baggage allowances, and guaranteed reservations, ensuring that travel is always seamless, sophisticated, and tailored to their exact preferences.
                    </p>
                    <div className="pt-4">
                        <button
                            onClick={() => setShowJoinModal(true)}
                            className="px-8 py-4 bg-primary text-white font-bold tracking-widest uppercase text-xs rounded-xl hover:bg-accent hover:text-primary transition-all shadow-xl shadow-primary/20"
                        >
                            Become a Member
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
                        className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    <div className="absolute bottom-10 left-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-xs font-black tracking-widest uppercase mb-1 text-accent">Invitation Only</p>
                        <p className="text-3xl font-serif italic">Global Recognition</p>
                    </div>
                </div>
            </section>

            {/* Membership Tiers */}
            <section className="py-32 px-6 bg-gray-50 border-y border-gray-100/50">
                <div className="max-w-[1280px] mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <h3 className="text-4xl md:text-5xl font-black text-primary">Elite Tiers</h3>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">Ascend through our meticulously crafted membership levels.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Silver Tier */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-400 transition-colors relative overflow-hidden group hover:-translate-y-2 duration-500 shadow-sm hover:shadow-xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200/20 rounded-bl-full -z-10 transition-transform group-hover:scale-150 duration-700"></div>
                            <h4 className="text-2xl font-bold text-gray-400 mb-2">Silver</h4>
                            <p className="text-xs font-black tracking-widest uppercase text-gray-500 mb-8 pb-4 border-b border-gray-100">25,000 Tier Miles</p>
                            <ul className="space-y-4 text-sm text-gray-600 mb-8">
                                <li className="flex items-start gap-3"><i className="ri-check-line text-gray-400 mt-0.5"></i> 25% Tier Bonus Miles</li>
                                <li className="flex items-start gap-3"><i className="ri-check-line text-gray-400 mt-0.5"></i> Priority Check-in</li>
                                <li className="flex items-start gap-3"><i className="ri-check-line text-gray-400 mt-0.5"></i> Additional 15kg Baggage</li>
                            </ul>
                        </div>

                        {/* Gold Tier */}
                        <div className="bg-white rounded-3xl p-8 border border-yellow-200 hover:border-yellow-400 transition-colors relative overflow-hidden group hover:-translate-y-2 duration-500 shadow-sm hover:shadow-xl hover:shadow-yellow-500/10">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-bl-full -z-10 transition-transform group-hover:scale-150 duration-700"></div>
                            <h4 className="text-2xl font-bold text-yellow-600 mb-2">Gold</h4>
                            <p className="text-xs font-black tracking-widest uppercase text-gray-500 mb-8 pb-4 border-b border-gray-100">50,000 Tier Miles</p>
                            <ul className="space-y-4 text-sm text-gray-600 mb-8">
                                <li className="flex items-start gap-3"><i className="ri-check-line text-yellow-500 mt-0.5"></i> 50% Tier Bonus Miles</li>
                                <li className="flex items-start gap-3"><i className="ri-check-line text-yellow-500 mt-0.5"></i> Lounge Access (+1 Guest)</li>
                                <li className="flex items-start gap-3"><i className="ri-check-line text-yellow-500 mt-0.5"></i> Priority Boarding & Baggage</li>
                                <li className="flex items-start gap-3"><i className="ri-check-line text-yellow-500 mt-0.5"></i> Guaranteed Seat (48hrs)</li>
                            </ul>
                        </div>

                        {/* Platinum Tier */}
                        <div className="bg-primary rounded-3xl p-8 border border-primary relative overflow-hidden group hover:-translate-y-2 duration-500 shadow-lg shadow-primary/20">
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -z-10 transition-transform group-hover:scale-150 duration-700"></div>
                            <h4 className="text-2xl font-bold text-white mb-2">Platinum</h4>
                            <p className="text-xs font-black tracking-widest uppercase text-gray-400 mb-8 pb-4 border-b border-white/10">100,000 Tier Miles</p>
                            <ul className="space-y-4 text-sm text-gray-300 mb-8">
                                <li className="flex items-start gap-3"><i className="ri-check-line text-accent mt-0.5"></i> 100% Tier Bonus Miles</li>
                                <li className="flex items-start gap-3"><i className="ri-check-line text-accent mt-0.5"></i> First Class Lounge Access</li>
                                <li className="flex items-start gap-3"><i className="ri-check-line text-accent mt-0.5"></i> Complimentary Upgrades</li>
                                <li className="flex items-start gap-3"><i className="ri-check-line text-accent mt-0.5"></i> Guaranteed Seat (24hrs)</li>
                            </ul>
                        </div>

                        {/* Diamond Tier */}
                        <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 relative overflow-hidden group hover:-translate-y-2 duration-500 shadow-2xl">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -z-10 transition-transform group-hover:scale-150 duration-700"></div>
                            <div className="flex items-center gap-2 mb-2">
                                <h4 className="text-2xl font-bold text-white">Diamond</h4>
                                <i className="ri-vip-diamond-line text-blue-400"></i>
                            </div>
                            <p className="text-xs font-black tracking-widest uppercase text-gray-400 mb-8 pb-4 border-b border-gray-800">Invitation Only</p>
                            <ul className="space-y-4 text-sm text-gray-300 mb-8 relative z-10">
                                <li className="flex items-start gap-3"><i className="ri-check-line text-blue-400 mt-0.5"></i> Bespoke Concierge 24/7</li>
                                <li className="flex items-start gap-3"><i className="ri-check-line text-blue-400 mt-0.5"></i> Private Tarmac Transfers</li>
                                <li className="flex items-start gap-3"><i className="ri-check-line text-blue-400 mt-0.5"></i> Partner Pilot Program</li>
                                <li className="flex items-start gap-3"><i className="ri-check-line text-blue-400 mt-0.5"></i> Lifetime Platinum Status</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowTiersModal(true)}
                            className="px-8 py-4 text-primary font-bold tracking-widest uppercase text-xs rounded-xl border-2 border-primary hover:bg-primary hover:text-white transition-all"
                        >
                            Compare All Tier Benefits
                        </button>
                    </div>
                </div>
            </section>

            {/* Exclusive Privileges */}
            <section className="py-24 px-6 max-w-[1280px] mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h3 className="text-4xl font-black text-primary">Hallmarks of the Club</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="text-center space-y-4 group">
                        <div className="w-20 h-20 mx-auto rounded-full bg-gray-50 flex items-center justify-center text-primary text-3xl group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                            <i className="ri-medal-fill"></i>
                        </div>
                        <h4 className="text-xl font-bold text-primary">Reward Miles</h4>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto">
                            Earn miles on every flight and with our global partners. Redeem them for reward flights, upgrades, or luxury experiences.
                        </p>
                    </div>
                    <div className="text-center space-y-4 group">
                        <div className="w-20 h-20 mx-auto rounded-full bg-gray-50 flex items-center justify-center text-primary text-3xl group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                            <i className="ri-customer-service-2-fill"></i>
                        </div>
                        <h4 className="text-xl font-bold text-primary">Dedicated Support</h4>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto">
                            Access to our priority contact centers 24 hours a day, ensuring your travel changes are handled instantly.
                        </p>
                    </div>
                    <div className="text-center space-y-4 group">
                        <div className="w-20 h-20 mx-auto rounded-full bg-gray-50 flex items-center justify-center text-primary text-3xl group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                            <i className="ri-flight-takeoff-line"></i>
                        </div>
                        <h4 className="text-xl font-bold text-primary">Family Pooling</h4>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto">
                            Link up to 8 family members to pool miles into a single account, achieving rewards and upgrades faster together.
                        </p>
                    </div>
                </div>
            </section>

            {/* Join Modal */}
            {showJoinModal && (
                <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-8 pt-8 sm:pt-12 pb-8 sm:pb-12 overflow-y-auto">
                    <div className="fixed inset-0 bg-primary/80 backdrop-blur-md" onClick={() => setShowJoinModal(false)}></div>
                    <div className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl animate-fade-in flex flex-col items-center mb-24">
                        <div className="p-8 md:p-16 w-full text-center">
                            <button onClick={() => setShowJoinModal(false)} className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-primary hover:bg-accent hover:text-primary transition-colors z-10">
                                <i className="ri-close-line text-xl"></i>
                            </button>
                            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <i className="ri-user-add-line text-3xl"></i>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-primary mb-4">Enroll in the Club</h3>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                Begin your journey of privilege today. Enrollment is complimentary and immediate.
                            </p>

                            <form className="space-y-4 text-left" onSubmit={(e) => { e.preventDefault(); setShowJoinModal(false); }}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-black uppercase text-gray-500 tracking-wider mb-2">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none font-medium transition-all" required />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black uppercase text-gray-500 tracking-wider mb-2">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none font-medium transition-all" required />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase text-gray-500 tracking-wider mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none font-medium transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase text-gray-500 tracking-wider mb-2">Country of Residence</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none font-medium transition-all appearance-none" required>
                                        <option value="">Select a country</option>
                                        <option value="US">United States</option>
                                        <option value="UK">United Kingdom</option>
                                        <option value="AE">United Arab Emirates</option>
                                        <option value="SG">Singapore</option>
                                        <option value="OTHER">Other</option>
                                    </select>
                                </div>
                                <div className="flex items-start gap-3 mt-6">
                                    <input type="checkbox" id="terms" className="mt-1" required />
                                    <label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed">
                                        I agree to the Flivan Executive Club Terms & Conditions and acknowledge the Privacy Policy.
                                    </label>
                                </div>
                                <button type="submit" className="w-full mt-6 px-8 py-4 bg-primary text-white font-bold tracking-widest uppercase text-xs rounded-xl hover:bg-accent hover:text-primary transition-all shadow-lg hover:shadow-xl">
                                    Create My Account
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* View Tiers Modal */}
            {showTiersModal && (
                <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-8 pt-8 sm:pt-12 pb-8 sm:pb-12">
                    <div className="fixed inset-0 bg-primary/80 backdrop-blur-md" onClick={() => setShowTiersModal(false)}></div>
                    <div className="relative bg-white w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl animate-fade-in flex flex-col h-[90vh] lg:h-[85vh]">
                        <div className="p-8 md:p-16 overflow-y-auto w-full">
                            <button onClick={() => setShowTiersModal(false)} className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-primary hover:bg-accent hover:text-primary transition-colors z-10">
                                <i className="ri-close-line text-xl"></i>
                            </button>

                            <div className="text-center mb-12 space-y-4 pr-12">
                                <h3 className="text-3xl md:text-5xl font-black text-primary mb-2">Benefit Comparison</h3>
                                <p className="text-gray-500 font-serif italic text-lg">A comprehensive view of Executive Club privileges.</p>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[800px] text-left border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-primary">
                                            <th className="py-4 px-6 text-xs font-black uppercase text-gray-400 w-1/3">Benefit</th>
                                            <th className="py-4 px-6 text-sm font-bold text-gray-400">Silver</th>
                                            <th className="py-4 px-6 text-sm font-bold text-yellow-600">Gold</th>
                                            <th className="py-4 px-6 text-sm font-bold text-primary">Platinum</th>
                                            <th className="py-4 px-6 text-sm font-bold text-gray-900 border-l border-gray-200 bg-gray-50">Diamond</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 font-bold text-primary">Tier Bonus Miles</td>
                                            <td className="py-4 px-6 text-gray-600">25%</td>
                                            <td className="py-4 px-6 text-gray-600">50%</td>
                                            <td className="py-4 px-6 text-gray-600">100%</td>
                                            <td className="py-4 px-6 text-gray-900 font-bold border-l border-gray-200 bg-gray-50/50">150%</td>
                                        </tr>
                                        <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 font-bold text-primary">Lounge Access</td>
                                            <td className="py-4 px-6 text-gray-600">-</td>
                                            <td className="py-4 px-6 text-gray-600">Business (+1)</td>
                                            <td className="py-4 px-6 text-gray-600">First (+2)</td>
                                            <td className="py-4 px-6 text-gray-900 font-bold border-l border-gray-200 bg-gray-50/50">Any (+3)</td>
                                        </tr>
                                        <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 font-bold text-primary">Extra Baggage</td>
                                            <td className="py-4 px-6 text-gray-600">15 kg</td>
                                            <td className="py-4 px-6 text-gray-600">20 kg</td>
                                            <td className="py-4 px-6 text-gray-600">25 kg</td>
                                            <td className="py-4 px-6 text-gray-900 font-bold border-l border-gray-200 bg-gray-50/50">40 kg</td>
                                        </tr>
                                        <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 font-bold text-primary">Guaranteed Seat</td>
                                            <td className="py-4 px-6 text-gray-600">-</td>
                                            <td className="py-4 px-6 text-gray-600">48 Hours</td>
                                            <td className="py-4 px-6 text-gray-600">24 Hours</td>
                                            <td className="py-4 px-6 text-gray-900 font-bold border-l border-gray-200 bg-gray-50/50">12 Hours</td>
                                        </tr>
                                        <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 font-bold text-primary">Complimentary Upgrades</td>
                                            <td className="py-4 px-6 text-gray-600">-</td>
                                            <td className="py-4 px-6 text-gray-600">-</td>
                                            <td className="py-4 px-6 text-gray-600">Subject to AVAIL</td>
                                            <td className="py-4 px-6 text-gray-900 font-bold border-l border-gray-200 bg-gray-50/50">Guaranteed Upgrade Vouchers</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExecutiveClub;
