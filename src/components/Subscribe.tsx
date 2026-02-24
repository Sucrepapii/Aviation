import React from 'react';

const Subscribe: React.FC = () => {
    return (
        <section id="subscribe" className="bg-primary py-32 px-6">
            <div className="max-w-[700px] mx-auto text-center space-y-10">
                <div className="space-y-4">
                    <p className="text-accent font-black uppercase tracking-[0.2em] text-sm italic">Join the Elite</p>
                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                        Subscribe to our newsletter for exclusive offers and news
                    </h2>
                </div>

                <form className="relative flex items-center p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-2xl transition-all focus-within:bg-white/20">
                    <input
                        type="email"
                        placeholder="Your professional email address"
                        className="flex-1 px-8 py-3 outline-none text-white placeholder:text-white/50 bg-transparent text-lg font-medium"
                        required
                    />
                    <button className="px-10 py-4 bg-accent text-primary text-sm font-black rounded-full hover:bg-white transition-all shadow-lg active:scale-95 whitespace-nowrap">
                        JOIN NOW
                    </button>
                </form>

                <p className="text-white/40 text-xs font-medium uppercase tracking-widest">
                    By joining, you agree to our privacy policy and terms of service.
                </p>
            </div>
        </section>
    );
};

export default Subscribe;
