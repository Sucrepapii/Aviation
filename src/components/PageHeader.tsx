import React from 'react';

interface PageHeaderProps {
    title: string;
    subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
    // Split title by first word to highlight the rest
    const words = title.split(' ');
    const firstWord = words[0];
    const restOfWords = words.slice(1).join(' ');

    return (
        <div className="relative pt-40 pb-20 px-6 bg-primary overflow-hidden flex flex-col items-center justify-center text-center min-h-[50vh]">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-[800px] mx-auto space-y-6 animate-fade-in text-white mt-12">
                <div className="flex items-center justify-center gap-4">
                    <span className="w-12 h-[2px] bg-accent"></span>
                    <p className="text-accent font-black uppercase tracking-[0.3em] text-xs">Discover Flivan</p>
                    <span className="w-12 h-[2px] bg-accent"></span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                    {firstWord} {restOfWords && <span className="text-accent italic font-light">{restOfWords}</span>}
                </h1>

                <p className="text-gray-300 text-lg md:text-xl font-medium tracking-wide max-w-2xl mx-auto pt-4 leading-relaxed opacity-90">
                    {subtitle}
                </p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
    );
};

export default PageHeader;
