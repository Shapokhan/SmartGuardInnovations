
import trustIcon from '@/assets/images/trust-white.png';

const AboutMethodology = () => {
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E6F4F4] rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#053131] leading-tight">
                        <span className="font-bold">Trusted</span> <span className="font-light font-soka text-[#0C6E6D]">Marketing Consulting</span><br />
                        <span className="font-light">agency for business.</span>
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
                        Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.
                    </p>
                </div>

                <div className="relative flex flex-col md:flex-row gap-8 justify-center items-center mt-12 flex-wrap lg:flex-nowrap">
                    {/* Connecting dashed line - Visible on Desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-[2px] border-t-2 border-dashed border-[#0C6E6D]/30 -translate-y-12"></div>

                    {[
                        { color: 'bg-[#053131]', iconColor: 'text-white' },
                        { color: 'bg-[#08605F]', iconColor: 'text-[#053131]' },
                        { color: 'bg-[#08605F]', iconColor: 'text-[#053131]' },
                        { color: 'bg-[#08605F]', iconColor: 'text-[#053131]' }
                    ].map((style, idx) => (
                        <div key={idx} className="relative z-10 flex flex-col items-center text-center max-w-[280px]">
                            {/* Hexagon Shape */}
                            <div className={`w-40 h-40 sm:w-48 sm:h-48 ${style.color} relative flex items-center justify-center mb-6 shadow-xl transition-transform hover:-translate-y-2 duration-300`}
                                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                                    <img src={trustIcon} alt="Icon" className={`w-full opacity-90 ${idx === 0 ? 'invert-0' : 'invert brightness-0'}`} />
                                    {/* Note: Inverting logic specific to the generic trustIcon used elsewhere being white */}
                                </div>
                            </div>

                            <h3 className="text-xl font-black text-[#053131] mb-2">Ipsum is Simply</h3>
                            <p className="text-gray-400 text-sm leading-relaxed px-4">
                                Experience healthcare you can trust. Our dedicated team provides com compassionate high
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutMethodology;
