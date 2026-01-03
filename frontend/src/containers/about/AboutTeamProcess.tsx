
import cardImg from '@/assets/images/circle-img.png';

const AboutTeamProcess = () => {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-24 space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#053131] leading-tight">
                        <span className="font-bold">Trusted</span> <span className="font-light font-soka text-[#0C6E6D]">Marketing Consulting</span><br />
                        <span className="font-light">agency for business.</span>
                    </h2>
                    <div className="max-w-3xl mx-auto border border-[#0C6E6D]/30 p-4 rounded-xl mt-6">
                        <p className="text-gray-500 text-sm sm:text-base">
                            Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.
                        </p>
                    </div>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Decorative Lines SVG - Absolute positioned behind content */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0" viewBox="0 0 1000 400" preserveAspectRatio="none">
                        {/* Path from Left to Center-Bottom */}
                        <path d="M 200 150 Q 350 300 500 300" stroke="#94A3B8" strokeWidth="2" strokeDasharray="6 6" fill="none" />
                        {/* Path from Center-Bottom to Right */}
                        <path d="M 500 300 Q 650 300 800 150" stroke="#94A3B8" strokeWidth="2" strokeDasharray="6 6" fill="none" />
                        {/* Arrow heads */}
                        <polygon points="495,300 500,305 500,295" fill="#94A3B8" transform="rotate(-45 500 300)" />
                        <polygon points="795,150 800,155 800,145" fill="#94A3B8" transform="rotate(-45 800 150)" />
                    </svg>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
                        {/* Item 1 - Left Top */}
                        <div className="flex flex-col items-center text-center">
                            <div className="relative mb-6 group">
                                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-[6px] border-[#0C6E6D] shadow-2xl relative z-10">
                                    <img src={cardImg} alt="Step 1" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="absolute top-2 left-2 w-10 h-10 bg-[#053131] rounded-full flex items-center justify-center text-white font-bold border-2 border-white z-20">
                                    01
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-[#053131] mb-2">Ipsum is Simply</h3>
                            <p className="text-gray-400 text-sm max-w-xs">
                                Experience healthcare you can trust. Our dedicated team provides compassionate.
                            </p>
                        </div>

                        {/* Item 2 - Center Bottom */}
                        <div className="flex flex-col items-center text-center lg:translate-y-32">
                            <div className="relative mb-6 group">
                                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-[6px] border-[#0C6E6D] shadow-2xl relative z-10">
                                    <img src={cardImg} alt="Step 2" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="absolute top-2 left-2 w-10 h-10 bg-[#053131] rounded-full flex items-center justify-center text-white font-bold border-2 border-white z-20">
                                    02
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-[#053131] mb-2">Ipsum is Simply</h3>
                            <p className="text-gray-400 text-sm max-w-xs">
                                Experience healthcare you can trust. Our dedicated team provides compassionate.
                            </p>
                        </div>

                        {/* Item 3 - Right Top */}
                        <div className="flex flex-col items-center text-center">
                            <div className="relative mb-6 group">
                                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-[6px] border-[#0C6E6D] shadow-2xl relative z-10">
                                    <img src={cardImg} alt="Step 3" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="absolute top-2 left-2 w-10 h-10 bg-[#053131] rounded-full flex items-center justify-center text-white font-bold border-2 border-white z-20">
                                    03
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-[#053131] mb-2">Ipsum is Simply</h3>
                            <p className="text-gray-400 text-sm max-w-xs">
                                Experience healthcare you can trust. Our dedicated team provides compassionate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTeamProcess;
