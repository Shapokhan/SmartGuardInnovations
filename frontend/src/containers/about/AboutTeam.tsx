import { motion } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';

const team = [
    {
        name: "Martyn Zammit",
        role: "Managing Director",
        since: "2011",
        desc: "Martyn leads Comtel with extensive experience in military-grade solutions and Healthcare specialized systems. He took over as Managing Director in 2017."
    },
    {
        name: "Brendon Archibald",
        role: "Service Manager / Lead Technician",
        since: "2001",
        desc: "A veteran in the field, Brendon is known for going 'above-and-beyond' and investigating ways to adapt technology for custom solutions."
    },
    {
        name: "Domenic Rossi",
        role: "Technical Sales Consultant",
        since: "2008",
        desc: "With a high level of fault-finding skills, Domenic utilizes his technical background to provide accurate and practical system integration quotes."
    },
    {
        name: "Darren Shield",
        role: "Project Manager",
        since: "2009",
        desc: "Darren manages procurement, OHS, and sub-contractor liaison, ensuring smooth project delivery and developing strong post-project relationships."
    },
    {
        name: "Jonathon Pope",
        role: "Senior Technician",
        since: "2011",
        desc: "Starting as an apprentice at Comtel, Jono has developed a wide range of skills and a 'can-do' attitude regarded highly by clients."
    },
    {
        name: "Jacquie Wilkins",
        role: "Service Coordinator",
        since: "2013",
        desc: "The focal point for service queries, Jacquie prioritizes schedules and coordinates service appointments for the technical team."
    },
    {
        name: "James Foleti",
        role: "Sales Consultant",
        since: "2008",
        desc: "James has experience across Administration, Operations, and Sales, providing comprehensive technical support and showroom demonstrations."
    }
];

const AboutTeam = () => {
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#0C6E6D]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#053131] leading-tight">
                        <span className="font-light font-soka text-[#0C6E6D]">Our</span> <span className="font-bold">Team</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-medium">
                        Meet the experts behind Comtel Technologies, dedicated to providing quality communication solutions for over 40 years.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="size-16 bg-[#0C6E6D]/10 rounded-2xl flex items-center justify-center text-[#0C6E6D] mb-4 group-hover:bg-[#0C6E6D] group-hover:text-white transition-colors duration-300">
                                <FaUserCircle size={32} />
                            </div>
                            <h4 className="text-lg font-black text-[#053131] tracking-tight">{member.name}</h4>
                            <p className="text-[#0C6E6D] text-xs font-bold uppercase tracking-widest mb-1">{member.role}</p>
                            <p className="text-gray-400 text-[10px] font-semibold mb-4 italic">Commenced: {member.since}</p>
                            <p className="text-gray-500 text-xs leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                                {member.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutTeam;
