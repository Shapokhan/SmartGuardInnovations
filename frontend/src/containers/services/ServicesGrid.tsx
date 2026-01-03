
import trustIcon from '@/assets/images/trust-white.png';
import cardImg from '@/assets/images/circle-img.png';
import { Button } from '@/components/ui/button';

const ServicesGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((_, idx) => (
                <div key={idx} className="bg-white rounded-[40px] p-6 sm:p-8 border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(12,110,109,0.15)] transition-all duration-500 group hover:-translate-y-2 flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                        <div className="size-16 sm:size-20 bg-[#053131] rounded-[24px] flex items-center justify-center group-hover:bg-[#0C6E6D] transition-all duration-500 group-hover:rotate-[10deg] shadow-lg">
                            <img src={trustIcon} className="w-1/2 opacity-90" alt="icon" />
                        </div>
                        <div className="size-10 rounded-full border border-gray-100 flex items-center justify-center text-[#053131] group-hover:bg-[#0C6E6D] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                            <span className="text-xl transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">→</span>
                        </div>
                    </div>

                    <div className="space-y-3 mb-6 flex-grow">
                        <h3 className="text-xl sm:text-2xl font-black text-[#053131] group-hover:text-[#0C6E6D] transition-colors">Strategic Planning</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Develop a clear roadmap for your business future with our comprehensive strategic planning services.
                        </p>
                    </div>

                    <div className="relative h-48 rounded-[30px] overflow-hidden mt-auto">
                        <img src={cardImg} alt="service" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#053131]/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                            <Button className="bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-[#053131] rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider border border-white/30 transition-all">
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServicesGrid;
