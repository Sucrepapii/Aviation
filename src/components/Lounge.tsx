import React from 'react';
import lounge1 from '../assets/images/lounge-1.jpg';
import lounge2 from '../assets/images/lounge-2.jpg';

const Lounge: React.FC = () => {
    return (
        <section id="seats" className="max-w-[1280px] mx-auto px-6 py-32 space-y-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative h-[500px] mb-12 lg:mb-0">
                    <div className="absolute top-0 left-0 w-[80%] h-[90%] rounded-[5rem] overflow-hidden shadow-premium ring-12 ring-white">
                        <img src={lounge1} alt="Lounge Main" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-[50%] h-[60%] rounded-[4rem] overflow-hidden shadow-premium ring-12 ring-white z-10">
                        <img src={lounge2} alt="Lounge Detail" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="space-y-12">
                    <div className="space-y-4">
                        <p className="text-accent font-black uppercase tracking-[0.2em] text-sm italic">Exclusive Access</p>
                        <h2 className="text-5xl md:text-6xl font-black text-primary leading-tight">The Flivan <br />Lounge Experience</h2>
                        <p className="text-xl text-text-light leading-relaxed">
                            Step into a sanctuary of peace. Our lounges are designed to be an oasis for the discerning traveler, offering world-class comfort before your flight.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        <div className="group space-y-4">
                            <div className="w-10 h-1 bg-accent/30 group-hover:w-20 group-hover:bg-accent transition-all duration-500"></div>
                            <h4 className="text-xl font-black text-primary uppercase tracking-tight">Tranquil Serenity</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Experience quiet luxury in our soundproof havens, featuring ergonomic seating and curated ambient soundscapes.
                            </p>
                        </div>

                        <div className="group space-y-4">
                            <div className="w-10 h-1 bg-accent/30 group-hover:w-20 group-hover:bg-accent transition-all duration-500"></div>
                            <h4 className="text-xl font-black text-primary uppercase tracking-tight">Premier Amenities</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Stay productive or connected with ultra-high-speed fiber, private meeting suites, and dedicated concierge support.
                            </p>
                        </div>

                        <div className="group space-y-4">
                            <div className="w-10 h-1 bg-accent/30 group-hover:w-20 group-hover:bg-accent transition-all duration-500"></div>
                            <h4 className="text-xl font-black text-primary uppercase tracking-tight">Family Sanctuary</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                A dedicated, safe space for our youngest travelers and their parents, ensuring a relaxed start for the whole family.
                            </p>
                        </div>

                        <div className="group space-y-4">
                            <div className="w-10 h-1 bg-accent/30 group-hover:w-20 group-hover:bg-accent transition-all duration-500"></div>
                            <h4 className="text-xl font-black text-primary uppercase tracking-tight">Culinary Excellence</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
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
