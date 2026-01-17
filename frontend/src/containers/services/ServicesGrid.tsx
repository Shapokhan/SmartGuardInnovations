
import trustIcon from '@/assets/images/trust-white.png';
import cardImg from '@/assets/images/circle-img.png';
import { Button } from '@/components/ui/button';

const services = [
    {
        title: "After Hours Emergency",
        desc: "Rapid response technical support for critical communication failures available outside of standard business hours, 365 days a year."
    },
    {
        title: "Solution Consultation",
        desc: "Expert analysis and design recommendations for integrated low-voltage electronic systems tailored to your facility's unique environment."
    },
    {
        title: "Intercom Assessment",
        desc: "Comprehensive evaluation of existing intercom infrastructure with expert repair and modernization options for enhanced building security."
    },
    {
        title: "Installation Assistance",
        desc: "Professional support and technical oversight for the physical deployment of communication and security hardware by our certified technicians."
    },
    {
        title: "Nurse Call Test & Report",
        desc: "Standardized testing and detailed documentation to ensure your nurse call systems meet all regulatory and safety requirements and peak reliability."
    },
    {
        title: "System Demonstrations",
        desc: "In-depth walk-throughs and hands-on demonstrations of our advanced communication technologies for your stakeholders and operation teams."
    },
    {
        title: "Maintenance Contracts",
        desc: "Proactive maintenance and prioritized support agreements to ensure long-term system reliability, longevity, and peak performance."
    }
];

const ServicesGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
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
                        <h3 className="text-xl sm:text-2xl font-black text-[#053131] group-hover:text-[#0C6E6D] transition-colors uppercase leading-[1.1]">{service.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {service.desc}
                        </p>
                    </div>

                    <div className="relative h-48 rounded-[30px] overflow-hidden mt-auto">
                        <img src={cardImg} alt="service" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#053131]/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                            <Button className="bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-[#053131] rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider border border-white/30 transition-all">
                                Read More
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServicesGrid;
