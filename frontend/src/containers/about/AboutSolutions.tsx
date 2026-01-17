import { motion } from 'framer-motion';
import { FaHeartbeat, FaBell, FaPhoneAlt, FaWalking, FaUsers, FaLock, FaVideo, FaMicrophone, FaWifi } from 'react-icons/fa';

const solutions = [
    {
        title: "Nurse Call",
        desc: "Specialised systems for Aged Care, Retirement Villages, and Hospitals with full dementia monitoring.",
        icon: FaHeartbeat
    },
    {
        title: "Personal Alarms",
        desc: "Medical & Duress Alarms with call centre back-up, allowing 'Ageing In Place' with mobile reporting.",
        icon: FaBell
    },
    {
        title: "DECT / VoIP / Pagers",
        desc: "Wireless communications and mobile messaging integrated with PABX/IP-PBX and external systems.",
        icon: FaPhoneAlt
    },
    {
        title: "Wanderer Prevention",
        desc: "Smart lockdown solutions for dementia residents to prevent absconding and ensure safety.",
        icon: FaWalking
    },
    {
        title: "RFID & RTLS",
        desc: "Real-time staff and resident tracking along with comprehensive asset management solutions.",
        icon: FaUsers
    },
    {
        title: "Access Control",
        desc: "Integrated security to prevent unauthorised access with site-wide logging for peace of mind.",
        icon: FaLock
    },
    {
        title: "IP-CCTV",
        desc: "Surveillance systems with video management software integrated with access control.",
        icon: FaVideo
    },
    {
        title: "Intercom Systems",
        desc: "IP-based audio & video door entry systems for internal and multi-dwelling apartment use.",
        icon: FaMicrophone
    },
    {
        title: "Wi-Fi Networks",
        desc: "Secure wireless connection for staff/guest internet and IoT system connectivity.",
        icon: FaWifi
    }
];

const AboutSolutions = () => {
    return (
        <section className="py-20 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#053131] leading-tight">
                        <span className="font-light font-soka text-[#0C6E6D]">Electronic</span> <span className="font-bold">Product Solutions</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-medium">
                        Comprehensive integrated systems designed for various sectors including Healthcare, Commercial, and Residential premises.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((sol, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-slate-50 p-8 rounded-[40px] border border-gray-100 hover:border-[#0C6E6D]/20 hover:shadow-2xl hover:shadow-[#0C6E6D]/5 transition-all duration-500 group"
                        >
                            <div className="size-16 bg-[#053131] rounded-2xl flex items-center justify-center text-[#7AFFC7] mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                                <sol.icon size={28} />
                            </div>
                            <h3 className="text-xl font-black text-[#053131] mb-3 uppercase tracking-tighter">{sol.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {sol.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSolutions;
