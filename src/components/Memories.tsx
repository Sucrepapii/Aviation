import React from 'react';

const Memories: React.FC = () => {
    const cardStyle = "group relative p-12 text-center rounded-4xl bg-white border border-gray-100 hover:shadow-premium transition-all duration-500 hover:-translate-y-2 overflow-hidden";

    return (
        <section id="memories" className="bg-extra-light/50 py-32 mt-12">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20 animate-fade-in">
                    <div className="space-y-4 max-w-[700px]">
                        <p className="text-accent font-black uppercase tracking-[0.2em] text-sm italic">Our Commitment</p>
                        <h2 className="text-5xl md:text-6xl font-black text-primary leading-tight">
                            Create unforgettable memories in every corner of the world
                        </h2>
                    </div>
                    <button className="group px-10 py-4 text-sm font-black text-primary bg-white border-2 border-primary/20 rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-sm flex items-center gap-3">
                        EXPLORE SERVICES
                        <i className="ri-arrow-right-up-line transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className={cardStyle}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        <span className="inline-flex items-center justify-center w-24 h-24 mb-10 text-5xl text-white bg-primary rounded-3xl shadow-lg transition-transform duration-500 group-hover:rotate-6">
                            <i className="ri-calendar-check-line"></i>
                        </span>
                        <h4 className="text-2xl font-black text-primary mb-6">Book and relax</h4>
                        <p className="text-text-light leading-relaxed text-lg">
                            Indulge in a seamless booking experience. From private transfers to bespoke seating, we handle every detail of your journey.
                        </p>
                    </div>

                    <div className={cardStyle}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-accent-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        <span className="inline-flex items-center justify-center w-24 h-24 mb-10 text-5xl text-white bg-accent-red rounded-3xl shadow-lg transition-transform duration-500 group-hover:rotate-6">
                            <i className="ri-shield-user-line"></i>
                        </span>
                        <h4 className="text-2xl font-black text-primary mb-6">Priority Protection</h4>
                        <p className="text-text-light leading-relaxed text-lg">
                            Our Smart Travel Guarantee provides world-class security and flexibility, revolutionizing your peace of mind while soaring.
                        </p>
                    </div>

                    <div className={cardStyle}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        <span className="inline-flex items-center justify-center w-24 h-24 mb-10 text-5xl text-white bg-accent rounded-3xl shadow-lg transition-transform duration-500 group-hover:rotate-6">
                            <i className="ri-vip-diamond-line"></i>
                        </span>
                        <h4 className="text-2xl font-black text-primary mb-6">Elite Privileges</h4>
                        <p className="text-text-light leading-relaxed text-lg">
                            Unlock a world of exclusivity with member-only rates, luxury partner deals, and access to private terminals globally.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Memories;
