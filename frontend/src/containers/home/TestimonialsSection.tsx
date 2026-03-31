import circleImg from '@/assets/images/down-circle.png';
import { FaStar } from 'react-icons/fa6';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Dr. Sarah Johnson",
        role: "Medical Director",
        content: "SmartGuard's nurse call system has transformed how our department operates. The reliability and ease of use have significantly reduced response times for our staff.",
        rating: 5
    },
    {
        name: "James Wilson",
        role: "Facility Manager",
        content: "We've been using their intercom and security solutions for over two years now. The integration is seamless and the after-hours support is exceptional.",
        rating: 5
    },
    {
        name: "Emma Thompson",
        role: "Aged Care Administrator",
        content: "The specialized solutions for aged care facilities are exactly what we needed. Reliable, patient-friendly, and cost-effective. Highly recommended!",
        rating: 5
    }
];

const TestimonialsSection = () => {
    return (
        <section className="py-8 sm:py-10 bg-white overflow-hidden">
            <div className="container mx-auto px-4 ">
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center max-w-2xl mx-auto mb-10"
                >
                    <h2 className="text-3xl sm:text-4xl  font-bold text-[#053131] leading-tight mb-6 text-center">
                        <span className="font-bold">What Our</span> <span className="font-light font-soka text-[#0C6E6D]">Clients Say</span><br />
                        <span className="font-light">Trusted by Professionals</span>
                    </h2>
                    <p className="text-gray-400">
                        Reliable communication solutions that help healthcare professionals provide exceptional care to their patients every day.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: idx * 0.2, ease: "easeOut" }}
                            className="bg-gray-50 rounded-[40px] p-10 space-y-8 relative shadow-sm hover:shadow-xl transition-all group"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 text-yellow-500">
                                {[...Array(t.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-lg" />
                                ))}
                            </div>

                            <p className="text-gray-500 text-sm leading-relaxed italic">
                                "{t.content}"
                            </p>

                            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#0C6E6D]/20 group-hover:border-[#0C6E6D] transition-colors">
                                    <img src={circleImg} alt={t.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-black text-[#053131] leading-none">{t.name}</h4>
                                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{t.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Slider controls with React Icons */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.4 }}
                    className="flex justify-center gap-4 mt-12"
                >
                    <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-[#053131] hover:bg-[#0C6E6D] hover:text-white hover:border-[#0C6E6D] transition-all group">
                        <RiArrowLeftLine className="text-2xl group-hover:scale-110 transition-transform" />
                    </button>
                    <button className="w-14 h-14 rounded-full bg-[#0C6E6D] flex items-center justify-center text-white shadow-lg hover:bg-[#053131] transition-all group">
                        <RiArrowRightLine className="text-2xl group-hover:scale-110 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
