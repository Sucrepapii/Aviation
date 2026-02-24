import client1 from '../assets/images/client-1.jpg';
import client2 from '../assets/images/client-2.jpg';
import client3 from '../assets/images/client-3.jpg';
import client4 from '../assets/images/client-4.jpg';

// Video Imports
import dubaiVideo from '../assets/videos/dubai.mp4';
import parisVideo from '../assets/videos/france.mp4';
import singaporeVideo from '../assets/videos/singapore.mp4';
import klVideo from '../assets/videos/Kuala Lumpur.mp4';
import torontoVideo from '../assets/videos/toronto canada.mp4';
import tokyoVideo from '../assets/videos/tokyo.mp4';

const travellers = [
    {
        video: dubaiVideo,
        clientImg: client1, name: 'Stephanie Oluks', destination: 'Dubai, UAE', quote: 'The First Class suite exceeded every expectation. True luxury redefined.'
    },
    {
        video: parisVideo,
        clientImg: client2, name: 'Tolu Olaiya', destination: 'Paris, France', quote: 'Incredible service from check-in to arrival. Flivan is now my only choice.'
    },
    {
        video: singaporeVideo,
        clientImg: client3, name: 'May Randle', destination: 'Singapore', quote: 'The lounge experience made my layover the highlight of the trip.'
    },
    {
        video: klVideo,
        clientImg: client4, name: 'Kaileb Ogundele', destination: 'Kuala Lumpur', quote: 'Attentive, professional, and sophisticated. Highly recommended for business.'
    },
    {
        video: torontoVideo,
        clientImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop', name: 'Elena Rostova', destination: 'Toronto, Canada', quote: 'A flawless journey across the globe. The cabin ambiance was spectacular.'
    },
    {
        video: tokyoVideo,
        clientImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop', name: 'Marcus Chen', destination: 'Tokyo, Japan', quote: 'Unparalleled privacy and comfort. I arrived fully rested and prepared.'
    }
];

const Travellers: React.FC = () => {
    return (
        <section id="destination" className="relative max-w-[1280px] mx-auto px-6 py-32 overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            <div className="text-center mb-20 space-y-6">
                <div className="flex items-center justify-center gap-4">
                    <span className="w-12 h-[2px] bg-accent"></span>
                    <p className="text-accent font-black uppercase tracking-[0.3em] text-xs italic">Global Stories</p>
                    <span className="w-12 h-[2px] bg-accent"></span>
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary tracking-tight leading-[1.1]">
                    The World's Finest <br /> <span className="text-accent italic font-light">Destinations</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {travellers.map((traveller, index) => (
                    <div key={index} className="flex flex-col h-full bg-white rounded-[3rem] overflow-hidden border border-gray-100/50 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 group hover:-translate-y-2">
                        <div className="relative overflow-hidden aspect-4/5 bg-gray-100">
                            {/* Looping ambient destination videos */}
                            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
                                <source src={traveller.video} type="video/mp4" />
                            </video>

                            {/* Gradient Overlays */}
                            <div className="absolute inset-0 bg-linear-to-b from-primary/10 via-transparent to-primary/90 opacity-80 group-hover:opacity-90 transition-opacity duration-700"></div>

                            {/* Quote Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 text-center">
                                <i className="ri-double-quotes-l text-4xl text-accent/50 mb-2"></i>
                                <p className="text-white text-base font-medium italic leading-relaxed drop-shadow-md">"{traveller.quote}"</p>
                            </div>

                            {/* Destination Tag */}
                            <div className="absolute top-6 left-6 right-6 flex justify-between items-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-xs font-bold tracking-widest uppercase">
                                    {traveller.destination}
                                </div>
                            </div>
                        </div>

                        <div className="relative p-8 pt-10 flex-1 flex flex-col justify-center items-center text-center bg-white z-10">
                            {/* Client Image overlaps the border */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-white rounded-full overflow-hidden shadow-xl shadow-primary/10 group-hover:shadow-accent/20 transition-all duration-500 z-20">
                                <img src={traveller.clientImg} alt={traveller.name} className="w-full h-full object-cover" />
                            </div>

                            <h4 className="text-xl font-black text-primary mb-1 tracking-tight mt-2">{traveller.name}</h4>
                            <p className="text-accent text-xs font-bold uppercase tracking-widest">{traveller.destination}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Travellers;
