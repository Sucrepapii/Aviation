import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { createPortal } from 'react-dom';

const Navbar: React.FC = () => {
    const [showManageModal, setShowManageModal] = useState(false);
    const [showStatusModal, setShowStatusModal] = useState(false);

    const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
        `font-semibold tracking-tight transition-all duration-300 cursor-pointer py-2 border-b-2 ${isActive
            ? 'text-primary border-primary'
            : 'text-text-light border-transparent hover:text-primary hover:border-primary/30'
        }`;

    return (
        <>
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between gap-8">
                    <Link to="/" className="text-3xl font-black tracking-tighter text-primary">
                        FLIVAN<span className="text-accent">.</span>
                    </Link>

                    <ul className="hidden lg:flex items-center gap-10 list-none">
                        <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
                        <li><NavLink to="/about" className={navLinkStyle}>About</NavLink></li>
                        <li><NavLink to="/offer" className={navLinkStyle}>Offer</NavLink></li>
                        <li><NavLink to="/seats" className={navLinkStyle}>Seats</NavLink></li>
                        <li><NavLink to="/destinations" className={navLinkStyle}>Destinations</NavLink></li>
                    </ul>

                    <div className="flex items-center gap-6">
                        <div className="hidden sm:flex items-center gap-4 text-sm font-bold text-text-light">
                            <button onClick={() => setShowManageModal(true)} className="hover:text-primary transition-colors flex items-center gap-2">
                                <i className="ri-briefcase-line text-lg"></i>
                                Manage
                            </button>
                            <button onClick={() => setShowStatusModal(true)} className="hover:text-primary transition-colors flex items-center gap-2">
                                <i className="ri-flight-takeoff-line text-lg"></i>
                                Status
                            </button>
                        </div>

                        <Link to="/login" className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary-dark transition-all shadow-md active:scale-95">
                            <i className="ri-user-line text-lg"></i>
                            Sign In
                        </Link>
                    </div>
                </div>

            </nav>

            {/* Manage Booking Modal */}
            {
                showManageModal && createPortal(
                    <div className="fixed inset-0 z-100 flex items-start justify-center p-4 sm:p-8 pt-8 sm:pt-12 pb-8 sm:pb-12 overflow-y-auto">
                        <div className="fixed inset-0 bg-primary/80 backdrop-blur-md" onClick={() => setShowManageModal(false)}></div>
                        <div className="relative bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl animate-fade-in flex flex-col items-center mb-24">
                            <div className="p-8 md:p-12 w-full text-center">
                                <button onClick={() => setShowManageModal(false)} className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-primary hover:bg-accent hover:text-primary transition-colors z-10">
                                    <i className="ri-close-line text-lg"></i>
                                </button>
                                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
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
                                    <button type="button" className="w-full mt-4 bg-primary text-white font-bold py-4 px-8 rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                                        Find Booking
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>,
                    document.body
                )
            }

            {/* Flight Status Modal */}
            {
                showStatusModal && createPortal(
                    <div className="fixed inset-0 z-100 flex items-start justify-center p-4 sm:p-8 pt-8 sm:pt-12 pb-8 sm:pb-12 overflow-y-auto">
                        <div className="fixed inset-0 bg-primary/80 backdrop-blur-md" onClick={() => setShowStatusModal(false)}></div>
                        <div className="relative bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl animate-fade-in flex flex-col items-center mb-24">
                            <div className="p-8 md:p-12 w-full text-center">
                                <button onClick={() => setShowStatusModal(false)} className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-primary hover:bg-accent hover:text-primary transition-colors z-10">
                                    <i className="ri-close-line text-lg"></i>
                                </button>
                                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
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
                                        <p className="text-xs text-center text-text-light uppercase tracking-widest font-bold mb-2">- OR SEARCH BY ROUTE -</p>
                                        <div className="grid grid-cols-2 gap-4">
                                            <input type="text" placeholder="From (e.g. LHR)" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-accent focus:border-transparent transition-all" />
                                            <input type="text" placeholder="To (e.g. JFK)" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-accent focus:border-transparent transition-all" />
                                        </div>
                                    </div>
                                    <button type="button" className="w-full mt-6 bg-primary text-white font-bold py-4 px-8 rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                                        Check Status
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>,
                    document.body
                )
            }
        </>
    );
};

export default Navbar;
