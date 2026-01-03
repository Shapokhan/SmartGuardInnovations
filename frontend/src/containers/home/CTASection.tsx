const CTASection = () => {
    return (
        <section className="py-8 sm:py-10 bg-[#0C6E6D] text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <circle cx="0" cy="0" r="40" fill="white" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
                <h2 className="text-3xl sm:text-4xl font-soka  font-black max-w-4xl mx-auto">
                    Ready To Take Your Business To The Next Level?
                </h2>
                <p className="text-white/80 text-xl max-w-2xl mx-auto">
                    Stop waiting and start growing. Our consultants are ready to help you implement winning strategies today.
                </p>
                <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
                    <button className="bg-[#053131] hover:bg-white hover:text-[#053131] text-white font-bold py-4 px-6 sm:py-5 sm:px-12 rounded-full transition-all duration-300 shadow-xl transform hover:-translate-y-2 text-[10px] sm:text-base whitespace-nowrap">
                        GET STARTED NOW
                    </button>
                    <button className="border-2 border-white hover:bg-white hover:text-[#0C6E6D] text-white font-bold py-4 px-6 sm:py-5 sm:px-12 rounded-full transition-all duration-300 transform hover:-translate-y-2 text-[10px] sm:text-base whitespace-nowrap">
                        CONTACT US
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
