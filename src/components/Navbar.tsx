import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { createPortal } from 'react-dom';

const Navbar: React.FC = () => {
    const [showManageModal, setShowManageModal] = useState(false);
    const [showStatusModal, setShowStatusModal] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        handleScroll(); // check initial position
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
        `font-semibold tracking-tight transition-all duration-300 cursor-pointer py-2 border-b-2 ${isActive
            ? scrolled
                ? 'text-accent border-accent'
                : 'text-accent border-accent'
            : scrolled
                ? 'text-white/80 border-transparent hover:text-accent hover:border-accent/40'
                : 'text-white/90 border-transparent hover:text-accent hover:border-accent/40'
        }`;

    return (
        <>
            <nav
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-primary/95 backdrop-blur-xl border-b border-accent/10 shadow-prestige'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between gap-8">
                    {/* Logo */}
                    <Link
                        to="/"
                        className={`text-3xl font-black tracking-tighter transition-colors duration-300 ${scrolled ? 'text-white' : 'text-white'
                            }`}
                    >
                        FLIVAN<span className="text-accent">.</span>
                    </Link>

                    {/* Nav Links */}
                    <ul className="hidden lg:flex items-center gap-10 list-none">
                        <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
                        <li><NavLink to="/about" className={navLinkStyle}>About</NavLink></li>
                        <li><NavLink to="/offer" className={navLinkStyle}>Offer</NavLink></li>
                        <li><NavLink to="/seats" className={navLinkStyle}>Seats</NavLink></li>
                        <li><NavLink to="/destinations" className={navLinkStyle}>Destinations</NavLink></li>
                    </ul>

                    {/* Right actions */}
                    <div className="flex items-center gap-6">
                        <div className="hidden sm:flex items-center gap-4 text-sm font-bold">
                            <button
                                onClick={() => setShowManageModal(true)}
                                className={`transition-colors flex items-center gap-2 ${scrolled
                                    ? 'text-white/70 hover:text-accent'
                                    : 'text-white/80 hover:text-accent'
                                    }`}
                            >
                                <i className="ri-briefcase-line text-lg"></i>
                                Manage
                            </button>
                            <button
                                onClick={() => setShowStatusModal(true)}
                                className={`transition-colors flex items-center gap-2 ${scrolled
                                    ? 'text-white/70 hover:text-accent'
                                    : 'text-white/80 hover:text-accent'
                                    }`}
                            >
                                <i className="ri-flight-takeoff-line text-lg"></i>
                                Status
                            </button>
                        </div>

                        {/* Sign In — gold when scrolled, white-outlined when transparent */}
                        <Link
                            to="/login"
                            className={`flex items-center gap-2 px-6 py-2.5 text-sm font-bold rounded-full transition-all duration-300 shadow-md active:scale-95 ${scrolled
                                ? 'btn-gold text-primary-dark'
                                : 'bg-white/15 text-white border border-white/30 hover:bg-accent hover:text-primary-dark hover:border-accent backdrop-blur-md'
                                }`}
                        >
                            <i className="ri-user-line text-lg"></i>
                            Sign In
                        </Link>
                    </div>
                </div>

                {/* Gold accent bottom line when scrolled */}
                {scrolled && (
                    <div className="gold-divider w-full" />
                )}
            </nav>

            {/* ───── Manage Booking Modal ───── */}
            {showManageModal && createPortal(
                <div className="fixed inset-0 z-100 flex items-start justify-center p-4 sm:p-8 pt-8 sm:pt-12 pb-8 sm:pb-12 overflow-y-auto">
                    <div className="fixed inset-0 bg-primary-dark/85 backdrop-blur-md" onClick={() => setShowManageModal(false)}></div>
                    <div className="relative bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-prestige animate-fade-in flex flex-col items-center mb-24">
                        <div className="p-8 md:p-12 w-full text-center">
                            <button
                                onClick={() => setShowManageModal(false)}
                                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-primary hover:bg-accent hover:text-primary-dark transition-colors z-10"
                            >
                                <i className="ri-close-line text-lg"></i>
                            </button>
                            <div className="w-16 h-16 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                                <i className="ri-briefcase-4-line text-3xl"></i>
                            </div>
                            <h3 className="text-3xl font-black text-primary mb-2">Manage Booking</h3>
                            <p className="text-text-light mb-8">Enter your booking reference to view or modify your itinerary.</p>

                            <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-sm font-bold text-primary mb-1 uppercase tracking-wider">Booking Reference</label>
                                    <input type="text" placeholder="e.g. A8X9YZ" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-accent focus:border-transparent transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-primary mb-1 uppercase tracking-wider">Last Name</label>
                                    <input type="text" placeholder="Passenger Last Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-accent focus:border-transparent transition-all" />
                                </div>
                                <button type="button" className="w-full mt-4 btn-gold text-primary-dark font-bold py-4 px-8 rounded-full">
                                    Find Booking
                                </button>
                            </form>
                        </div>
                    </div>
                </div>,
                document.body
            )}

            {/* ───── Flight Status Modal ───── */}
            {showStatusModal && createPortal(
                <div className="fixed inset-0 z-100 flex items-start justify-center p-4 sm:p-8 pt-8 sm:pt-12 pb-8 sm:pb-12 overflow-y-auto">
                    <div className="fixed inset-0 bg-primary-dark/85 backdrop-blur-md" onClick={() => setShowStatusModal(false)}></div>
                    <div className="relative bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-prestige animate-fade-in flex flex-col items-center mb-24">
                        <div className="p-8 md:p-12 w-full text-center">
                            <button
                                onClick={() => setShowStatusModal(false)}
                                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-primary hover:bg-accent hover:text-primary-dark transition-colors z-10"
                            >
                                <i className="ri-close-line text-lg"></i>
                            </button>
                            <div className="w-16 h-16 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                                <i className="ri-flight-land-line text-3xl"></i>
                            </div>
                            <h3 className="text-3xl font-black text-primary mb-2">Flight Status</h3>
                            <p className="text-text-light mb-8">Check the latest updates for your upcoming flight.</p>

                            <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-sm font-bold text-primary mb-1 uppercase tracking-wider">Flight Number</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">FL</span>
                                        <input type="text" placeholder="123" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-accent focus:border-transparent transition-all" />
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <p className="text-xs text-center text-text-light uppercase tracking-widest font-bold mb-2">— or search by route —</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="From (e.g. LHR)" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-accent focus:border-transparent transition-all" />
                                        <input type="text" placeholder="To (e.g. JFK)" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-accent focus:border-transparent transition-all" />
                                    </div>
                                </div>
                                <button type="button" className="w-full mt-6 btn-gold text-primary-dark font-bold py-4 px-8 rounded-full">
                                    Check Status
                                </button>
                            </form>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default Navbar;
