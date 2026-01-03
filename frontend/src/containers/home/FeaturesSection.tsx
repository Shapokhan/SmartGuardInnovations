
import cardImg from '@/assets/images/card-img.png';

const FeaturesSection = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                 <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-extrabold text-[#053131] leading-tight mb-4">
                        <span className="font-extrabold">Trusted</span> <span className="font-light">Marketing</span> <span className="font-extrabold">Consulting</span><br />
                        <span className="font-light">agency for business.</span>
                    </h2>
                    <p className="text-gray-400">
                        Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((_, idx) => (
                        <div key={idx} className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="p-4">
                                <div className="aspect-video bg-gray-200 rounded-[25px] overflow-hidden">
                                     <img src={cardImg} alt="feature" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                            </div>
                            <div className="p-8 space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-extrabold text-[#053131] leading-snug group-hover:text-[#0C6E6D] transition-colors">
                                        Lorem Ipsum is Simply Dummy Text simply dummy text
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.
                                    </p>
                                </div>
                                <button className="text-[#053131] font-black uppercase text-sm flex items-center gap-2 hover:text-[#0C6E6D] transition-colors">
                                    Read More 
                                    <span className="text-lg group-hover:translate-x-2 transition-transform">→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
