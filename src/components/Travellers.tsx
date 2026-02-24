import React from 'react';
import traveller1 from '../assets/images/traveller-1.jpg';
import traveller2 from '../assets/images/traveller-2.jpg';
import traveller3 from '../assets/images/traveller-3.jpg';
import traveller4 from '../assets/images/traveller-4.jpg';
import client1 from '../assets/images/client-1.jpg';
import client2 from '../assets/images/client-2.jpg';
import client3 from '../assets/images/client-3.jpg';
import client4 from '../assets/images/client-4.jpg';

const travellers = [
    { img: traveller1, clientImg: client1, name: 'Stephanie Oluks', destination: 'Toronto, Canada', quote: 'The First Class suite exceeded every expectation. True luxury redefined.' },
    { img: traveller2, clientImg: client2, name: 'Tolu Olaiya', destination: 'Paris, France', quote: 'Incredible service from check-in to arrival. Flivan is now my only choice.' },
    { img: traveller3, clientImg: client3, name: 'May Randle', destination: 'Singapore', quote: 'The lounge experience made my layover the highlight of the trip.' },
    { img: traveller4, clientImg: client4, name: 'Kaileb Ogundele', destination: 'Kuala Lumpur', quote: 'Attentive, professional, and sophisticated. Highly recommended for business.' },
];

const Travellers: React.FC = () => {
    return (
        <section id="destination" className="max-w-[1280px] mx-auto px-6 py-32">
            <div className="text-center mb-20 space-y-4">
                <p className="text-accent font-black uppercase tracking-[0.2em] text-sm italic">Global Stories</p>
                <h2 className="text-5xl md:text-6xl font-black text-primary tracking-tight">The World's Finest Travelers</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {travellers.map((traveller, index) => (
                    <div key={index} className="flex flex-col h-full bg-white rounded-[4rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-premium transition-all duration-500 group">
                        <div className="relative overflow-hidden aspect-4/5">
                            <img src={traveller.img} alt={traveller.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent opacity-60"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-white text-sm font-medium italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">"{traveller.quote}"</p>
                            </div>
                        </div>

                        <div className="relative p-8 pt-12 text-center flex-1 flex flex-col items-center">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-white rounded-full overflow-hidden shadow-lg shadow-black/10">
                                <img src={traveller.clientImg} alt={traveller.name} className="w-full h-full object-cover" />
                            </div>
                            <h4 className="text-xl font-black text-primary mb-1">{traveller.name}</h4>
                            <p className="text-accent text-sm font-bold uppercase tracking-widest">{traveller.destination}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Travellers;
