
import cardImg from '@/assets/images/circle-img.png';
import aboutShape from '@/assets/images/about_shape.png';

const AboutTeamProcess = () => {
    return (
        <section className="sm:py-20 py-7 relative overflow-hidden">
            {/* Decorative Background Shapes */}
            <div className="absolute top-0 left-0 size-[700px] pointer-events-none -translate-x-1/4 -translate-y-1/4 ">
                <img src={aboutShape} alt="" className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-0 right-0 size-[700px] pointer-events-none translate-x-1/4 translate-y-1/4 ">
                <img src={aboutShape} alt="" className="w-full h-full object-contain transform rotate-180" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24 space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#053131] leading-tight">
                        <span className="font-light font-soka text-[#0C6E6D]">Our</span> <span className="font-bold">Business Units</span>
                    </h2>
                    <div className="max-w-3xl mx-auto border border-[#0C6E6D]/30 p-4 rounded-3xl mt-6 bg-[#0C6E6D]/5">
                        <p className="text-[#053131] font-semibold text-sm sm:text-base">
                            Specialized teams working together to provide seamless communication and security infrastructure.
                        </p>
                    </div>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Decorative Lines SVG - Absolute positioned behind content */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0" viewBox="0 0 1000 400" preserveAspectRatio="none">
                        <path d="M 200 150 Q 350 300 500 300" stroke="#0C6E6D" strokeWidth="2" strokeDasharray="6 6" fill="none" className="opacity-30" />
                        <path d="M 500 300 Q 650 300 800 150" stroke="#0C6E6D" strokeWidth="2" strokeDasharray="6 6" fill="none" className="opacity-30" />
                    </svg>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
                        {/* Item 1 - Sales Team */}
                        <div className="flex flex-col items-center text-center">
                            <div className="relative mb-6 group">
                                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-[6px] border-[#0C6E6D] shadow-2xl relative z-10">
                                    <img src={cardImg} alt="Sales Team" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 blur-[2px] group-hover:blur-0" />
                                    <div className="absolute inset-0 bg-[#053131]/40 flex items-center justify-center p-6">
                                        <p className="text-white text-[10px] font-bold uppercase tracking-widest leading-relaxed">Consultation • Assessments • Demonstrations</p>
                                    </div>
                                </div>
                                <div className="absolute top-2 left-2 w-10 h-10 bg-[#053131] rounded-full flex items-center justify-center text-white font-extrabold border-2 border-white z-20 shadow-lg">
                                    01
                                </div>
                            </div>
                            <h3 className="text-2xl font-black text-[#053131] mb-2 uppercase tracking-tighter">Sales Team</h3>
                            <p className="text-gray-500 font-medium text-sm max-w-xs">
                                Expert consultation and product advice to help you design the perfect integration.
                            </p>
                        </div>

                        {/* Item 2 - Service Team */}
                        <div className="flex flex-col items-center text-center lg:translate-y-32">
                            <div className="relative mb-6 group">
                                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-[6px] border-[#053131] shadow-2xl relative z-10">
                                    <img src={cardImg} alt="Service Team" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 blur-[2px] group-hover:blur-0" />
                                    <div className="absolute inset-0 bg-[#0C6E6D]/40 flex items-center justify-center p-6">
                                        <p className="text-white text-[10px] font-bold uppercase tracking-widest leading-relaxed">24/7 Support • Repairs • Maintenance</p>
                                    </div>
                                </div>
                                <div className="absolute top-2 left-2 w-10 h-10 bg-[#0C6E6D] rounded-full flex items-center justify-center text-white font-extrabold border-2 border-white z-20 shadow-lg">
                                    02
                                </div>
                            </div>
                            <h3 className="text-2xl font-black text-[#053131] mb-2 uppercase tracking-tighter">Service Team</h3>
                            <p className="text-gray-500 font-medium text-sm max-w-xs">
                                Rapid technical response and proactive maintenance for complete system longevity.
                            </p>
                        </div>

                        {/* Item 3 - Project Team */}
                        <div className="flex flex-col items-center text-center">
                            <div className="relative mb-6 group">
                                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-[6px] border-[#0C6E6D] shadow-2xl relative z-10">
                                    <img src={cardImg} alt="Project Team" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 blur-[2px] group-hover:blur-0" />
                                    <div className="absolute inset-0 bg-[#053131]/40 flex items-center justify-center p-6">
                                        <p className="text-white text-[10px] font-bold uppercase tracking-widest leading-relaxed">Management • OHS • System Training</p>
                                    </div>
                                </div>
                                <div className="absolute top-2 left-2 w-10 h-10 bg-[#053131] rounded-full flex items-center justify-center text-white font-extrabold border-2 border-white z-20 shadow-lg">
                                    03
                                </div>
                            </div>
                            <h3 className="text-2xl font-black text-[#053131] mb-2 uppercase tracking-tighter">Project Team</h3>
                            <p className="text-gray-500 font-medium text-sm max-w-xs">
                                Seamless project delivery from procurement to final client training and certification.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTeamProcess;
