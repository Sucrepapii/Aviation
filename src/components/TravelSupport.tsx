import React from 'react';
import businessClassVideo from '../assets/images/business class.mp4';
import airportLoungeVideo from '../assets/images/airport lounge.mp4';

// Video URLs — same CDN pattern used by the Hero component (works in browser)
const VIDEOS = {
    // Airplane flying through clouds
    luxuryTravel: "https://videos.pexels.com/video-files/4396425/4396425-hd_1920_1080_30fps.mp4",
    // Business class / luxury cabin interior
    executivePlan: businessClassVideo,
    // Airport / terminal luxury lounge
    privateConcierge: airportLoungeVideo
};

const TravelSupport: React.FC = () => {
    const cardStyle = "group p-10 rounded-4xl bg-white border border-gray-100 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden";
    const iconContainerClass = "flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 text-accent group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-primary/20";
    const numberBadgeClass = "absolute -top-4 -right-4 text-7xl font-black text-primary/5 italic pointer-events-none group-hover:text-primary/10 transition-colors duration-500";

    const features = [
        {
            id: '01',
            icon: 'ri-passport-line',
            title: 'Travel Requirements',
            desc: 'Stay informed and prepared with essential requirements, ensuring a smooth and elite entry experience for your global journeys.'
        },
        {
            id: '02',
            icon: 'ri-shield-cross-line',
            title: 'Multi-risk Insurance',
            desc: 'Comprehensive global protection for your peace of mind, covering every detail of your journey with executive-level security.'
        },
        {
            id: '03',
            icon: 'ri-customer-service-2-line',
            title: '24/7 Elite Concierge',
            desc: 'Access curated insights and exclusive requirements for your chosen destinations with our always-on bespoke support.'
        }
    ];

    return (
        <section id="travel" className="relative max-w-[1280px] mx-auto px-6 py-24 sm:py-32 overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -z-10"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="space-y-12">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="w-12 h-[2px] bg-accent"></span>
                            <p className="text-accent font-black uppercase tracking-[0.3em] text-xs italic">Aviation Elite Support</p>
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-black text-primary leading-[1.1] tracking-tight">
                            Plan your travel <br />
                            <span className="text-accent italic">with absolute</span> confidence
                        </h2>
                        <p className="text-lg text-text-light leading-relaxed max-w-[550px] font-medium">
                            Find elite support for your bookings and bespoke travel plans, anticipating your every need with scientific precision.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        {features.map((feature) => (
                            <div key={feature.id} className={cardStyle}>
                                <div className={numberBadgeClass}>{feature.id}</div>
                                <div className="flex items-start gap-8">
                                    <div className={iconContainerClass}>
                                        <i className={`${feature.icon} text-2xl`}></i>
                                    </div>
                                    <div className="space-y-3 flex-1">
                                        <h4 className="text-xl font-black text-primary flex items-center gap-2">
                                            {feature.title}
                                            <i className="ri-arrow-right-up-line text-accent opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
                                        </h4>
                                        <p className="text-text-light leading-relaxed text-sm font-medium">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    {/* Decorative Ring */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-accent/20 rounded-full animate-pulse"></div>

                    <div className="relative grid grid-cols-2 gap-8 lg:scale-110">
                        <div className="group overflow-hidden rounded-[3rem] shadow-2xl ring-12 ring-white hover:ring-accent/20 transition-all duration-700 aspect-[4/5] bg-gray-100 italic">
                            <video
                                autoPlay loop muted playsInline
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                poster="https://images.pexels.com/photos/46148/air-liner-airplane-sky-clouds-46148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            >
                                <source src={VIDEOS.luxuryTravel} type="video/mp4" />
                            </video>
                        </div>
                        <div className="space-y-8 mt-12 text-accent italic">
                            <div className="group overflow-hidden rounded-[3rem] shadow-2xl ring-12 ring-white hover:ring-accent/20 transition-all duration-700 aspect-[4/5] bg-gray-100">
                                <video
                                    autoPlay loop muted playsInline
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    poster="https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                >
                                    <source src={VIDEOS.executivePlan} type="video/mp4" />
                                </video>
                            </div>
                            <div className="group overflow-hidden rounded-[4rem] shadow-2xl ring-12 ring-white hover:ring-accent/20 transition-all duration-700 aspect-square bg-gray-100">
                                <video
                                    autoPlay loop muted playsInline
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    poster="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                >
                                    <source src={VIDEOS.privateConcierge} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>

                    {/* Floating Info Tag */}
                    <div className="absolute top-[85%] -left-8 bg-white p-6 rounded-3xl shadow-premium border border-accent/20 flex items-center gap-4 animate-fade-in delay-300 z-10 w-max">
                        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white text-xl">
                            <i className="ri-medal-fill"></i>
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-accent">Award Winning</p>
                            <p className="text-sm font-black text-primary">Global Support 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TravelSupport;
