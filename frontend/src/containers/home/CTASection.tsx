
import React from 'react';

const CTASection = () => {
    return (
        <section className="py-24 bg-[#0C6E6D] text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <circle cx="0" cy="0" r="40" fill="white" />
                    <circle cx="100" cy="100" r="40" fill="white" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
                <h2 className="text-4xl lg:text-6xl font-black leading-tight max-w-4xl mx-auto">
                    Ready To Take Your Business To The <span className="underline decoration-[#E91E63] decoration-4">Next Level?</span>
                </h2>
                <p className="text-white/80 text-xl max-w-2xl mx-auto">
                    Stop waiting and start growing. Our consultants are ready to help you implement winning strategies today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                    <button className="bg-[#053131] hover:bg-white hover:text-[#053131] text-white font-bold py-5 px-12 rounded-full transition-all duration-300 shadow-xl transform hover:-translate-y-2">
                        GET STARTED NOW
                    </button>
                    <button className="border-2 border-white hover:bg-white hover:text-[#0C6E6D] text-white font-bold py-5 px-12 rounded-full transition-all duration-300 transform hover:-translate-y-2">
                        CONTACT US
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
