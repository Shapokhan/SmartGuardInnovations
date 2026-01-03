
import cardImg from '@/assets/images/circle-img.png';

const ProcessSection = () => {
    return (
        <div className="sm:py-10 py-7">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#053131] leading-tight">
                    <span className="font-bold">Trusted</span> <span className="font-light font-soka text-[#0C6E6D]">Marketing Consulting</span><br />
                    <span className="font-light">agency for business.</span>
                </h2>
                <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
                    Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.
                </p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-20 mt-24">
                {/* Connecting Line */}
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] border-t-2 border-dashed border-[#053131]/20 -translate-y-1/2 z-0"></div>

                {/* Step 01 */}
                <div className="relative bg-white p-6 pb-0 pt-12 rounded-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 text-center z-10 h-[320px] flex flex-col items-center">
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#053131] rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-slate-50">
                        01
                    </div>
                    <h3 className="text-xl font-bold text-[#053131] mb-2">Create Account</h3>
                    <p className="text-gray-400 text-sm mb-6">Lorem ipsum lorem</p>
                    <div className="mt-auto w-48 h-48 rounded-full overflow-hidden border-4 border-[#0C6E6D]/10 translate-y-8">
                        <img src={cardImg} alt="Step 1" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Step 02 */}
                <div className="relative bg-[#0C6E6D] p-6 pt-0 pb-12 rounded-[30px] shadow-[0_10px_30px_rgba(12,110,109,0.3)] text-center z-10 h-[320px] flex flex-col items-center lg:translate-y-12">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/10 -translate-y-8 mb-auto">
                        <img src={cardImg} alt="Step 2" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Create Account</h3>
                    <p className="text-white/70 text-sm mb-2">Lorem ipsum lorem</p>
                    <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#d1fae5] rounded-full flex items-center justify-center text-[#053131] font-bold text-xl border-4 border-[#0C6E6D]">
                        02
                    </div>
                </div>

                {/* Step 03 */}
                <div className="relative bg-white p-6 pb-0 pt-12 rounded-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 text-center z-10 h-[320px] flex flex-col items-center">
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#053131] rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-slate-50">
                        03
                    </div>
                    <h3 className="text-xl font-bold text-[#053131] mb-2">Create Account</h3>
                    <p className="text-gray-400 text-sm mb-6">Lorem ipsum lorem</p>
                    <div className="mt-auto w-48 h-48 rounded-full overflow-hidden border-4 border-[#0C6E6D]/10 translate-y-8">
                        <img src={cardImg} alt="Step 3" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Step 04 */}
                <div className="relative bg-white p-6 pt-0 pb-12 rounded-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 text-center z-10 h-[320px] flex flex-col items-center lg:translate-y-12">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#0C6E6D]/10 -translate-y-8 mb-auto">
                        <img src={cardImg} alt="Step 4" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold text-[#053131] mb-2">Create Account</h3>
                    <p className="text-gray-400 text-sm mb-2">Lorem ipsum lorem</p>
                    <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#053131] rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-slate-50">
                        04
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessSection;
