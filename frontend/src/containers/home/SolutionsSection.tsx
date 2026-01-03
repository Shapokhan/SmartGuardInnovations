
import circleImg from '@/assets/images/circle-img.png';
import { Button } from '@/components/ui/button';

const solutions = [
    { id: "01", title: "Create Account" },
    { id: "02", title: "Create Account" },
    { id: "03", title: "Create Account" },
    { id: "04", title: "Create Account" }
];

const SolutionsSection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
             {/* Particle/Network background effect from XD */}
             <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    {[...Array(10)].map((_, i) => (
                        <circle key={i} cx={Math.random() * 1000} cy={Math.random() * 1000} r="2" fill="currentColor" />
                    ))}
                </svg>
            </div>

            <div className="container relative z-10 mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#053131] leading-tight mb-6">
                        <span className="font-extrabold">Trusted</span> <span className="font-light">Marketing</span> <span className="font-extrabold">Consulting</span><br />
                        <span className="font-light">agency for business.</span>
                    </h2>
                    <p className="text-gray-400">
                        Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.
                    </p>
                </div>

                {/* Timeline Grid */}
                <div className="relative">
                    {/* Horizontal Line background */}
                    <div className="absolute top-[45%] left-0 w-full h-0.5 bg-gray-100 -z-0 hidden md:block"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                        {solutions.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center space-y-8">
                                {/* Circular Image from Assets */}
                                <div className="w-48 h-48 rounded-full overflow-hidden border-8 border-white shadow-xl bg-[#0C6E6D]/5">
                                    <img src={circleImg} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                                
                                {/* Badge/ID */}
                                <div className="w-12 h-12 bg-[#053131] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                                    {item.id}
                                </div>

                                {/* Content */}
                                <div className="text-center space-y-4">
                                    <h3 className="text-xl font-bold text-[#053131]">{item.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <Button className="bg-[#0C6E6D] hover:bg-[#053131] text-white rounded-full px-10 py-7 font-bold">
                        View all Solutions
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;
