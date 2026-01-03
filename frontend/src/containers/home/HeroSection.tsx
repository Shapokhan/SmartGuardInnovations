
import bannerBg from '@/assets/images/banner.png';

const HeroSection = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#053131] pt-32 lg:pt-32">
            {/* Full Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[#053131] via-[#053131]/80 to-transparent z-10"></div>
                <img 
                    src={bannerBg} 
                    alt="Hero Background" 
                    className="w-full h-full object-cover object-right lg:object-[center_right] opacity-60"
                />
            </div>

            {/* Background design elements (Rings) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-[10%] -translate-y-1/2 -translate-x-1/2 flex items-center justify-center opacity-30">
                    {[300, 500, 700, 900, 1100].map(size => (
                        <div key={size} className="absolute rounded-full border border-white/5" style={{ width: size, height: size }}></div>
                    ))}
                </div>
            </div>

            <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <div className="max-w-3xl py-12 lg:py-10">
                    {/* Badge */}
                    <div className="inline-block rounded-full bg-[#0C6E6D] px-6 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-white shadow-xl mb-8">
                        EXPERIENCE HEALTHCARE
                    </div>
                    
                    {/* Heading - text-4xl as requested */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.2] text-white">
                        <span className="font-extrabold ">Trusted</span> <span className="font-light">Marketing</span><br />
                        <span className="font-extrabold">Consulting</span> <span className="font-light">Agency</span><br />
                        <span className="font-light">for Business.</span> 
                    </h1>
                    
                    {/* Description */}
                    <p className="mt-8 max-w-xl text-base sm:text-lg text-gray-300 font-medium leading-relaxed">
                        Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.
                    </p>

                    {/* Button */}
                
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
