
import { Button } from '@/components/ui/button';

const ServicesCTA = () => {
    return (
        <div className="mt-20 bg-[#053131] rounded-[50px] p-8 sm:p-16 relative overflow-hidden text-center">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                    Ready to <span className="text-[#7AFFC7] font-soka font-light">Transform</span> Your Business?
                </h2>
                <p className="text-gray-300 text-lg">
                    Let's discuss how our services can help you reach new heights.
                </p>
                <Button className="bg-[#7AFFC7] hover:bg-white text-[#053131] rounded-full px-10 py-6 text-sm font-black uppercase tracking-[0.2em] shadow-lg hover:shadow-[#7AFFC7]/20 transition-all transform hover:scale-105">
                    Get In Touch Now
                </Button>
            </div>

            {/* Decorative Background Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#0C6E6D] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#7AFFC7] rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 opacity-20"></div>
        </div>
    );
};

export default ServicesCTA;
