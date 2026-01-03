
import { Button } from '@/components/ui/button';
import sideImg from '@/assets/images/contact-us-side-img.png';
import smallImg from '@/assets/images/circle-img.png';
import { FaCheckCircle } from 'react-icons/fa';

const AboutIntro = () => {
    return (
        <section className="py-16 md:py-24 relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 items-center">

                    {/* Left Side: Large Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="rounded-[50px] overflow-hidden shadow-2xl relative z-10">
                            <img src={sideImg} alt="Business Meeting" className="w-full h-auto object-cover" />
                        </div>
                        {/* Decorative background shape */}
                        <div className="absolute top-10 -left-10 w-full h-full bg-[#0C6E6D]/10 rounded-[50px] -z-0 hidden sm:block"></div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#053131] leading-tight mb-6">
                                <span className="font-bold">Trusted</span> <span className="font-light font-soka text-[#0C6E6D]">Marketing Consulting</span><br />
                                <span className="font-light">Marketing</span>
                            </h2>
                            <p className="text-gray-500 leading-relaxed text-lg">
                                Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <Button className="bg-[#053131] hover:bg-[#0C6E6D] text-white rounded-full px-8 py-6 text-sm font-bold shadow-lg transition-all">
                                View all Services
                            </Button>
                            <Button className="bg-[#E6F4F4] hover:bg-[#0C6E6D] text-[#053131] hover:text-white rounded-full px-8 py-6 text-sm font-bold transition-all">
                                View all Services
                            </Button>
                            <Button className="bg-[#E6F4F4] hover:bg-[#0C6E6D] text-[#053131] hover:text-white rounded-full px-8 py-6 text-sm font-bold transition-all">
                                View all Services
                            </Button>
                        </div>

                        {/* Text Points & Small Image Grid */}
                        <div className="grid sm:grid-cols-2 gap-8 items-center mt-8">
                            {/* Small Image */}
                            <div className="rounded-[40px] overflow-hidden shadow-lg h-[200px] w-full relative">
                                <img src={smallImg} alt="Lab Work" className="w-full h-full object-cover" />
                            </div>

                            {/* Points */}
                            <div className="space-y-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="min-w-6 min-h-6 text-[#053131]">
                                            <FaCheckCircle className="w-full h-full" />
                                        </div>
                                        <p className="text-[#053131] font-bold text-sm">Experience healthcare you can.</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;
