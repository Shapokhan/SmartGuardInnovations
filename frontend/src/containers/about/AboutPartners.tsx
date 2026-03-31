import { motion } from 'framer-motion';

const partners = [
    "Safeco", "Akuvox", "Aruba", "CareTech", "Cura", "Milestone", "NxWitness", "ProtracID", "Spectralink"
];

const AboutPartners = () => {
    return (
        <section className="py-12 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4">
                <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-10">Our Business Partners</p>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 hover:opacity-100 transition-opacity duration-500"
                >
                    {partners.map((partner, idx) => (
                        <div key={idx} className="grayscale hover:grayscale-0 transition-all duration-300">
                            <span className="text-xl md:text-2xl font-black text-gray-300 hover:text-[#0C6E6D] cursor-default uppercase tracking-tighter">{partner}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AboutPartners;
