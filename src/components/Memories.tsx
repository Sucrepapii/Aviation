import React from 'react';
import { Link } from 'react-router-dom';

const Memories: React.FC = () => {
    return (
        <section id="memories" className="relative bg-extra-light/50 py-32 overflow-hidden">
            {/* Elegant Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

            <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-24 animate-fade-in">
                    <div className="space-y-6 max-w-[700px]">
                        <div className="flex items-center gap-4">
                            <span className="w-12 h-[2px] bg-accent"></span>
                            <p className="text-accent font-black uppercase tracking-[0.3em] text-xs italic">Our Commitment</p>
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[1.1] tracking-tight">
                            Create unforgettable <br /><span className="text-accent italic font-light">memories</span> everywhere
                        </h2>
                    </div>
                    <Link to="/about" className="group px-10 py-5 text-sm font-black text-primary bg-white border border-gray-200 rounded-full hover:border-accent hover:bg-accent hover:text-white transition-all duration-500 shadow-premium flex items-center gap-3 w-fit mb-4">
                        EXPLORE SERVICES
                        <i className="ri-arrow-right-up-line transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"></i>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Card 1 */}
                    <div className="group relative p-10 lg:p-14 text-center rounded-[3rem] bg-white border border-gray-100 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-700 hover:-translate-y-3 overflow-hidden flex flex-col items-center z-10">
                        <div className="absolute inset-0 bg-linear-to-b from-transparent to-extra-light/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>

                        <div className="relative w-24 h-24 rounded-full border border-gray-100 bg-extra-light/50 flex items-center justify-center text-4xl text-primary mb-10 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-700 shadow-sm">
                            <i className="ri-flight-takeoff-line"></i>
                            <div className="absolute inset-0 rounded-full border-2 border-primary scale-110 opacity-0 group-hover:opacity-20 group-hover:scale-100 transition-all duration-700"></div>
                        </div>

                        <h4 className="text-2xl font-black text-primary mb-4 tracking-tight">Seamless Journeys</h4>
                        <p className="text-text-light leading-relaxed text-base font-medium">
                            Indulge in a seamless booking experience. From private transfers to bespoke seating, we handle every detail perfectly.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative p-10 lg:p-14 text-center rounded-[3rem] bg-white border border-gray-100 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-700 hover:-translate-y-3 overflow-hidden flex flex-col items-center z-10">
                        <div className="absolute inset-0 bg-linear-to-b from-transparent to-extra-light/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>

                        <div className="relative w-24 h-24 rounded-full border border-gray-100 bg-extra-light/50 flex items-center justify-center text-4xl text-primary mb-10 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-700 shadow-sm">
                            <i className="ri-shield-star-line"></i>
                            <div className="absolute inset-0 rounded-full border-2 border-accent scale-110 opacity-0 group-hover:opacity-20 group-hover:scale-100 transition-all duration-700"></div>
                        </div>

                        <h4 className="text-2xl font-black text-primary mb-4 tracking-tight">Priority Protection</h4>
                        <p className="text-text-light leading-relaxed text-base font-medium">
                            Our Smart Travel Guarantee provides world-class security and flexibility, revolutionizing your peace of mind while soaring.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative p-10 lg:p-14 text-center rounded-[3rem] bg-white border border-gray-100 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-700 hover:-translate-y-3 overflow-hidden flex flex-col items-center z-10">
                        <div className="absolute inset-0 bg-linear-to-b from-transparent to-extra-light/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>

                        <div className="relative w-24 h-24 rounded-full border border-gray-100 bg-extra-light/50 flex items-center justify-center text-4xl text-primary mb-10 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-700 shadow-sm">
                            <i className="ri-vip-crown-line"></i>
                            <div className="absolute inset-0 rounded-full border-2 border-primary scale-110 opacity-0 group-hover:opacity-20 group-hover:scale-100 transition-all duration-700"></div>
                        </div>

                        <h4 className="text-2xl font-black text-primary mb-4 tracking-tight">Elite Privileges</h4>
                        <p className="text-text-light leading-relaxed text-base font-medium">
                            Unlock a world of exclusivity with member-only rates, luxury partner deals, and access to private terminals globally.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Memories;
