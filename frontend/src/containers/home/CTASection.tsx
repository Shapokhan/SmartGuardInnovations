import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASection = () => {
    return (
        <section className="py-8 sm:py-10 bg-[#0C6E6D] text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <circle cx="0" cy="0" r="40" fill="white" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
                <motion.h2
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl sm:text-4xl font-soka font-black max-w-4xl mx-auto uppercase tracking-tighter"
                >
                    Ready To Enhance Your Facility's Safety?
                </motion.h2>
                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto"
                >
                    Don't settle for outdated systems. Our experts are ready to help you implement advanced communication solutions today.
                </motion.p>
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.5 }}
                    className="flex flex-row items-center justify-center gap-4 sm:gap-6 pt-4"
                >
                    <Link to="/contact-us">
                        <button className="bg-[#053131] hover:bg-white hover:text-[#053131] text-white font-bold py-4 px-6 sm:py-5 sm:px-12 rounded-full transition-all duration-300 shadow-xl transform hover:-translate-y-2 text-xs sm:text-base whitespace-nowrap uppercase tracking-widest">
                            Get Started Now
                        </button>
                    </Link>
                    <Link to="/contact-us">
                        <button className="border-2 border-white hover:bg-white hover:text-[#0C6E6D] text-white font-bold py-4 px-6 sm:py-5 sm:px-12 rounded-full transition-all duration-300 transform hover:-translate-y-2 text-xs sm:text-base whitespace-nowrap uppercase tracking-widest">
                            Contact Us
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
