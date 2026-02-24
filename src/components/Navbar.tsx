import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
        `font-semibold tracking-tight transition-all duration-300 cursor-pointer py-2 border-b-2 ${isActive
            ? 'text-primary border-primary'
            : 'text-text-light border-transparent hover:text-primary hover:border-primary/30'
        }`;

    return (
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
                        <button className="hover:text-primary transition-colors flex items-center gap-2">
                            <i className="ri-briefcase-line text-lg"></i>
                            Manage
                        </button>
                        <button className="hover:text-primary transition-colors flex items-center gap-2">
                            <i className="ri-flight-takeoff-line text-lg"></i>
                            Status
                        </button>
                    </div>

                    <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary-dark transition-all shadow-md active:scale-95">
                        <i className="ri-user-line text-lg"></i>
                        Sign In
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
