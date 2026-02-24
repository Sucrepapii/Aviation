import React from 'react';

const Hero: React.FC = () => {
    return (
        <header className="relative h-[80vh] min-h-[400px] md:min-h-[600px] w-full overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105 pointer-events-none"
                >
                    <source src="https://videos.pexels.com/video-files/4396425/4396425-hd_1920_1080_30fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-linear-to-b from-primary/60 via-primary/20 to-white/10 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-[1280px] mx-auto px-6 h-full flex flex-col justify-center pb-32">
                <div className="animate-fade-in space-y-4">
                    <p className="text-accent font-bold uppercase tracking-[0.2em] text-sm">Welcome to Excellence</p>
                    <h1 className="text-5xl md:text-8xl font-black leading-[0.9] text-white max-w-[800px] wrap-break-word">
                        Discover a <br />New Era of Flight
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl font-medium max-w-[500px]">
                        Experience unparalleled luxury and seamless travel with the world's most sophisticated airline.
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Hero;
