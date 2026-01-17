
import trustIcon from '@/assets/images/trust-white.png';

const AboutMethodology = () => {
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E6F4F4] rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#053131] leading-tight">
                        <span className="font-light font-soka text-[#0C6E6D]">Why</span> <span className="font-bold">Comtel Technologies?</span>
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto font-medium">
                        Our knowledge of the industry and dedicated after-sales focus have cemented our place as a preferred partner for critical communication systems.
                    </p>
                </div>

                <div className="relative min-h-[400px] mt-24 max-w-6xl mx-auto">
                    {/* Curved Connector Line - Visible on Desktop */}
                    <div className="hidden lg:block absolute -top-20 left-0 w-full h-full pointer-events-none z-0">
                        <svg className="w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
                            <path
                                d="M 125 150 C 250 150, 250 250, 375 250 C 500 250, 500 150, 625 150 C 750 150, 750 250, 875 250"
                                stroke="#0C6E6D"
                                strokeWidth="2"
                                strokeDasharray="8 8"
                                fill="none"
                                className="opacity-40"
                            />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {[
                            {
                                title: "40+ Years Experience",
                                desc: "Suppliers of critical communications systems since 1968 with deep industry knowledge.",
                                color: 'bg-[#053131]',
                                iconColor: 'text-white',
                                translate: 'lg:translate-y-0'
                            },
                            {
                                title: "Extended Warranty",
                                desc: "Offering standard extended warranties on all premium 'Aiphone' intercom equipment.",
                                color: 'bg-[#0C6E6D]',
                                iconColor: 'text-white',
                                translate: 'lg:translate-y-24'
                            },
                            {
                                title: "Technical Support",
                                desc: "Dedicated Service Team for on-site support, workshop repairs, and system modifications.",
                                color: 'bg-[#053131]',
                                iconColor: 'text-white',
                                translate: 'lg:translate-y-0'
                            },
                            {
                                title: "Preferred Supplier",
                                desc: "A reputation for detail that has made us the trusted choice for many security installers.",
                                color: 'bg-[#0C6E6D]',
                                iconColor: 'text-white',
                                translate: 'lg:translate-y-24'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className={`flex flex-col items-center text-center ${item.translate}`}>
                                {/* Hexagon Shape */}
                                <div className={`w-48 h-48 sm:w-56 sm:h-56 ${item.color} relative flex items-center justify-center mb-6 shadow-xl transition-transform hover:-translate-y-2 duration-300`}
                                    style={{
                                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                                    }}>
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                                        <img
                                            src={trustIcon}
                                            alt="Icon"
                                            className="w-full transition-all duration-300 brightness-0 invert"
                                        />
                                    </div>
                                </div>

                                <h3 className="text-xl font-black text-[#053131] mb-2 px-2 leading-tight">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed px-4">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMethodology;
