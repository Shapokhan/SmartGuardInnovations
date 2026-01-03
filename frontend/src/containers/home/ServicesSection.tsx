
import trustIcon from '@/assets/images/trust-white.png';
import cardImg from '@/assets/images/circle-img.png';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
    return (
        <section className="py-8 sm:py-7 bg-white">
            <div className="container mx-auto p-5 rounded-4xl bg-slate-100">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h2 className="text-3xl sm:text-4xl  font-bold text-[#053131] leading-tight mb-6">
                        <span className="font-bold text-[#053131]">Trusted</span> <span className="font-light font-soka">Marketing</span> <span className="font-bold text-[#053131]">Consulting</span><br />
                        <span className="font-light font-soka">agency for business.</span>
                    </h2>
                    <p className="text-gray-400">
                        Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[1, 2, 3].map((_, idx) => (
                        <div key={idx} className="bg-white rounded-[40px] p-5 sm:p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                            <div className="flex items-center justify-between mb-5">
                                <div className="sm:size-20 size-14  bg-[#053131] rounded-full flex items-center justify-center group-hover:bg-[#0C6E6D] transition-colors">
                                    <img src={trustIcon} className="w-full p-2  transition-all" alt="icon" />
                                </div>
                                <h3 className="sm:text-2xl text-xl font-black text-[#053131] group-hover:text-[#0C6E6D] transition-colors italic">Lorem Ipsum</h3>
                                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-[#0C6E6D] group-hover:text-white transition-all">
                                    <span className="text-xl">→</span>
                                </div>
                            </div>

                            <div className="h-px bg-gray-100 w-full mb-5"></div>

                            <p className="text-gray-400 text-sm leading-relaxed mb-5">
                                Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.
                            </p>

                            <div className="rounded-[30px] overflow-hidden ">
                                <img src={cardImg} alt="service" className="w-full h-full object-[100%_100%] group-hover:scale-110 transition-transform duration-700" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-5 text-center">
                    <Link to="/services">
                        <Button className="bg-[#0C6E6D] hover:bg-[#053131] text-white rounded-full px-12 py-8 text-lg font-bold">
                            View all Services
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
