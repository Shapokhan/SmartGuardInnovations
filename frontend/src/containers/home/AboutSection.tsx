
import secImage from '@/assets/images/sec-1.png';
import trustIcon from '@/assets/images/trust-icon.png';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
    return (
        <section className="py-8 sm:py-10 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    {/* Left side: Single Image */}
                    <div className="lg:w-1/2 relative flex justify-center lg:justify-start">
                        <div className="relative z-10 w-full group">
                            <img
                                src={secImage}
                                alt="Marketing Consulting"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-90"
                            />

                        </div>
                    </div>

                    {/* Right side: Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-[#053131]">
                                <span className="font-bold text-[#053131]">Trusted</span> <span className="font-light font-soka">Marketing</span> <span className="font-bold text-[#053131]">Consulting</span><br />
                            </h2>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.
                            </p>
                        </div>

                        {/* Benefit lines using trust-icon.png */}
                        {[1, 2, 3].map((_, idx) => (
                            <div key={idx} className="flex items-center gap-6 group">
                                <div className="size-[80px] rounded-full bg-[#0C6E6D]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0C6E6D] transition-colors duration-300">
                                    <img
                                        src={trustIcon}
                                        alt="icon"
                                        className="size-full p-3 transition-all duration-300 group-hover:invert group-hover:brightness-0"
                                    />                                </div>
                                <div>
                                    <h4 className="font-bold text-[#053131] uppercase">Trusted Consulting</h4>
                                    <p className="text-sm text-gray-400">Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.</p>
                                </div>
                            </div>
                        ))}

                        <div className="pt-4">
                            <Button className="bg-[#0C6E6D] hover:bg-[#053131] text-white rounded-full px-10 py-7 font-bold">
                                View About Us
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
