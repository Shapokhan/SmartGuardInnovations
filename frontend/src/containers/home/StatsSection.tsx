
import React from 'react';

const StatsSection = () => {
    return (
        <section className="py-20 bg-[#053131] text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0C6E6D] rounded-full blur-[100px] -mr-64 -mt-64"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    <div className="space-y-4">
                        <div className="text-5xl lg:text-7xl font-black text-[#0C6E6D]">825+</div>
                        <div className="text-gray-400 font-bold uppercase tracking-widest text-sm">Projects Completed</div>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl lg:text-7xl font-black text-[#0C6E6D]">150+</div>
                        <div className="text-gray-400 font-bold uppercase tracking-widest text-sm">Expert Consultants</div>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl lg:text-7xl font-black text-[#0C6E6D]">99%</div>
                        <div className="text-gray-400 font-bold uppercase tracking-widest text-sm">Satisfied Clients</div>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl lg:text-7xl font-black text-[#0C6E6D]">25+</div>
                        <div className="text-gray-400 font-bold uppercase tracking-widest text-sm">Years Experience</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
