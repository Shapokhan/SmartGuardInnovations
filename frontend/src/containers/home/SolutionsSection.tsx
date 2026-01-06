import circleImg from '@/assets/images/circle-img.png';
import polyBg from '@/assets/images/polygon-swish.png';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const solutions = [
    { id: "01", title: "Create Account" },
    { id: "02", title: "Create Account" },
    { id: "03", title: "Create Account" },
    { id: "04", title: "Create Account" }
];

const SolutionsSection = () => {
    return (
        <section className="relative overflow-hidden max-w-[1280px] rounded-2xl py-8 sm:py-5 mx-auto">
            {/* Background Image */}
            <div className="absolute  z-10 l">
                <img
                    src={polyBg}
                    alt="Background"
                    className="w-full h-full object-[100%_100%] shadow-x "
                />
            </div>
            {/* Particle/Network background effect from XD */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    {[...Array(10)].map((_, i) => (
                        <circle key={i} cx={Math.random() * 1000} cy={Math.random() * 1000} r="2" fill="currentColor" />
                    ))}
                </svg>
            </div>

            <div className="container relative z-10 mx-auto ">
                {/* Section Header */}
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center max-w-2xl mx-auto mb-5 pt-10"
                >
                    <h2 className="text-3xl sm:text-4xl  font-bold text-[#053131] leading-tight mb-6">
                        <span className="font-bold">Trusted</span> <span className="font-light font-soka">Marketing</span> <span className="font-bold">Consulting</span><br />
                        <span className="font-light font-soka">agency for business.</span>
                    </h2>
                    <p className="text-gray-400">
                        Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.
                    </p>
                </motion.div>

                {/* Timeline Grid */}
                <div className="relative">
                    {/* Horizontal Line background */}
                    <div className="absolute top-[60%]  rounded-full left-[5%] w-[90%] mx-auto h-1 bg-[#053131] -z-0 hidden md:block"></div>

                    <div className="grid grid-cols-1 p-3 md:grid-cols-4 md:gap-10 gap-5 relative z-10">
                        {solutions.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center space-y-8">
                                {/* Circular Image from Assets */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -180, opacity: 0 }}
                                    whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
                                    className="w-48 h-48 rounded-full overflow-hidden border-8 border-white shadow-xl bg-[#0C6E6D]/5"
                                >
                                    <img src={circleImg} alt={item.title} className="w-full h-full object-cover" />
                                </motion.div>

                                {/* Badge/ID */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: idx * 0.15 + 0.3, type: "spring", bounce: 0.5 }}
                                    className="w-12 h-12 bg-[#053131] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                                >
                                    {item.id}
                                </motion.div>

                                {/* Content */}
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.7, delay: idx * 0.15 + 0.5, ease: "easeOut" }}
                                    className="text-center space-y-4"
                                >
                                    <h3 className="text-xl font-bold text-[#053131]">{item.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    className="sm:mt-10 mt-6 text-center"
                >
                    <Button className="bg-[#0C6E6D] hover:bg-[#053131] text-white rounded-full px-10 py-7 font-bold">
                        View all Solutions
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default SolutionsSection;
