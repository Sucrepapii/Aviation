import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary-dark text-gray-400 py-16 px-6 border-t border-white/5">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-12">
                <div className="space-y-6">
                    <Link to="/" className="text-3xl font-black tracking-tighter text-white">
                        FLIVAN<span className="text-accent">.</span>
                    </Link>
                    <p className="text-sm leading-relaxed text-gray-500 italic">
                        Where excellence takes Flight. With a heritage of customer obsession and a passion for modern aviation, Flivan Airline offers the world's most sophisticated travel experiences.
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-white hover:bg-accent hover:text-primary transition-all cursor-pointer"><i className="ri-facebook-fill"></i></span>
                        <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-white hover:bg-accent hover:text-primary transition-all cursor-pointer"><i className="ri-twitter-x-fill"></i></span>
                        <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-white hover:bg-accent hover:text-primary transition-all cursor-pointer"><i className="ri-instagram-fill"></i></span>
                        <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-white hover:bg-accent hover:text-primary transition-all cursor-pointer"><i className="ri-linkedin-fill"></i></span>
                    </div>
                </div>

                <div className="space-y-6">
                    <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] italic">Information</h4>
                    <ul className="space-y-4 text-sm font-bold">
                        <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-accent transition-colors">Help Center</Link></li>
                        <li><Link to="/offer" className="hover:text-accent transition-colors">Special Offers</Link></li>
                        <li><Link to="/seats" className="hover:text-accent transition-colors">Seat Selection</Link></li>
                        <li><Link to="/destinations" className="hover:text-accent transition-colors">Our Network</Link></li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] italic"> The Experience</h4>
                    <ul className="space-y-4 text-sm font-bold">
                        <li><Link to="/executive-club" className="hover:text-accent transition-colors">Executive Club</Link></li>
                        <li><Link to="/luxury-lounges" className="hover:text-accent transition-colors">Luxury Lounges</Link></li>
                        <li><Link to="/onboard-dining" className="hover:text-accent transition-colors">Onboard Dining</Link></li>
                        <li><Link to="/private-jet" className="hover:text-accent transition-colors">Private Jet</Link></li>
                        <li><Link to="/partner-airlines" className="hover:text-accent transition-colors">Partner Airlines</Link></li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] italic">Contact</h4>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-accent group-hover:bg-accent group-hover:text-primary transition-all"><i className="ri-customer-service-2-line"></i></span>
                            <div className="text-xs">
                                <p className="text-gray-500 font-bold uppercase">24/7 Concierge</p>
                                <p className="text-white font-black">+1 800 FLIVAN</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-accent group-hover:bg-accent group-hover:text-primary transition-all"><i className="ri-mail-send-line"></i></span>
                            <div className="text-xs">
                                <p className="text-gray-500 font-bold uppercase">Email Support</p>
                                <p className="text-white font-black">elite@flivan.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
                <p className="text-xs font-medium text-gray-600">© {new Date().getFullYear()} Flivan Aviation Group. All Luxury Reserved.</p>
                <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest">
                    <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
                    <span className="hover:text-white transition-colors cursor-pointer">Terms of Carriage</span>
                    <span className="hover:text-white transition-colors cursor-pointer">Accessibility</span>
                    <span className="hover:text-white transition-colors cursor-pointer">Cookies</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
