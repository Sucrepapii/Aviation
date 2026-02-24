import React from 'react';
import airportLoungeVideo from '../assets/images/airport lounge.mp4';
import businessClassVideo from '../assets/images/business class.mp4';

const Lounge: React.FC = () => {
    return (
        <section id="seats" className="relative max-w-[1280px] mx-auto px-6 py-32 space-y-24 overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative h-[600px] mb-12 lg:mb-0 group">
                    <div className="absolute top-0 left-0 w-[80%] h-[85%] rounded-[4rem] overflow-hidden shadow-2xl shadow-primary/10 ring-8 ring-white transition-all duration-700 group-hover:shadow-accent/20">
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105">
                            <source src={airportLoungeVideo} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700"></div>
                    </div>
                    <div className="absolute bottom-4 right-0 w-[55%] h-[55%] rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/20 ring-8 ring-white z-10 transition-all duration-700 group-hover:-translate-y-4 group-hover:-translate-x-4">
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
                            <source src={businessClassVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="space-y-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="w-12 h-[2px] bg-accent"></span>
                            <p className="text-accent font-black uppercase tracking-[0.3em] text-xs italic">Exclusive Access</p>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-primary leading-[1.1] tracking-tight">
                            The Flivan <br />
                            <span className="text-accent italic font-light">Lounge</span> Experience
                        </h2>
                        <p className="text-lg text-text-light leading-relaxed font-medium max-w-lg">
                            Step into a sanctuary of peace. Our lounges are designed to be an oasis for the discerning traveler, offering world-class comfort before your flight.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                        <div className="group space-y-4 p-6 -m-6 rounded-3xl hover:bg-extra-light/50 transition-colors duration-500">
                            <div className="w-12 h-[2px] bg-accent/30 group-hover:w-full group-hover:bg-accent transition-all duration-700 ease-out"></div>
                            <h4 className="text-xl font-black text-primary tracking-tight">Tranquil Serenity</h4>
                            <p className="text-text-light text-sm leading-relaxed font-medium">
                                Experience quiet luxury in our soundproof havens, featuring ergonomic seating and curated ambient soundscapes.
                            </p>
                        </div>

                        <div className="group space-y-4 p-6 -m-6 rounded-3xl hover:bg-extra-light/50 transition-colors duration-500">
                            <div className="w-12 h-[2px] bg-accent/30 group-hover:w-full group-hover:bg-accent transition-all duration-700 ease-out"></div>
                            <h4 className="text-xl font-black text-primary tracking-tight">Premier Amenities</h4>
                            <p className="text-text-light text-sm leading-relaxed font-medium">
                                Stay productive or connected with ultra-high-speed fiber, private meeting suites, and dedicated concierge support.
                            </p>
                        </div>

                        <div className="group space-y-4 p-6 -m-6 rounded-3xl hover:bg-extra-light/50 transition-colors duration-500">
                            <div className="w-12 h-[2px] bg-accent/30 group-hover:w-full group-hover:bg-accent transition-all duration-700 ease-out"></div>
                            <h4 className="text-xl font-black text-primary tracking-tight">Family Sanctuary</h4>
                            <p className="text-text-light text-sm leading-relaxed font-medium">
                                A dedicated, safe space for our youngest travelers and their parents, ensuring a relaxed start for the whole family.
                            </p>
                        </div>

                        <div className="group space-y-4 p-6 -m-6 rounded-3xl hover:bg-extra-light/50 transition-colors duration-500">
                            <div className="w-12 h-[2px] bg-accent/30 group-hover:w-full group-hover:bg-accent transition-all duration-700 ease-out"></div>
                            <h4 className="text-xl font-black text-primary tracking-tight">Culinary Excellence</h4>
                            <p className="text-text-light text-sm leading-relaxed font-medium">
                                Enjoy a Michelin-inspired menu featuring globally sourced ingredients and a cellar of rare, curated vintages.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Lounge;
