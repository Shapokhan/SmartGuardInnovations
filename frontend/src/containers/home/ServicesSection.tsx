
import trustIcon from '@/assets/images/trust-icon.png';
import cardImg from '@/assets/images/card-img.png';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4">
                 <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#053131] leading-tight mb-6">
                        <span className="font-extrabold text-[#053131]">Trusted</span> <span className="font-light">Marketing</span> <span className="font-extrabold text-[#053131]">Consulting</span><br />
                        <span className="font-light">agency for business.</span>
                    </h2>
                    <p className="text-gray-400">
                        Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[1, 2, 3].map((_, idx) => (
                        <div key={idx} className="bg-white rounded-[40px] p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                            <div className="flex items-center justify-between mb-8">
                                <div className="w-20 h-20 bg-[#053131] rounded-2xl flex items-center justify-center group-hover:bg-[#0C6E6D] transition-colors">
                                     <img src={trustIcon} className="w-10 h-10 invert transition-all" alt="icon" />
                                </div>
                                <h3 className="text-2xl font-black text-[#053131] group-hover:text-[#0C6E6D] transition-colors italic">Lorem Ipsum</h3>
                                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-[#0C6E6D] group-hover:text-white transition-all">
                                    <span className="text-xl">→</span>
                                </div>
                            </div>
                            
                            <div className="h-px bg-gray-100 w-full mb-8"></div>

                            <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.
                            </p>

                            <div className="rounded-[30px] overflow-hidden aspect-[4/3]">
                                <img src={cardImg} alt="service" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button className="bg-[#0C6E6D] hover:bg-[#053131] text-white rounded-full px-12 py-8 text-lg font-bold">
                        View all Services
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
