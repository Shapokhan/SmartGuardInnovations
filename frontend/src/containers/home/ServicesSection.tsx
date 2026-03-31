
import trustIcon from '@/assets/images/trust-white.png';
import cardImg from '@/assets/images/circle-img.png';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const ServicesSection = () => {
    return (
        <section className="py-8 sm:py-7 bg-white">
            <div className="container mx-auto p-5 rounded-4xl bg-slate-100">
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center max-w-2xl mx-auto mb-10"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#053131] leading-tight mb-6">
                        <span className="font-bold text-[#053131]">Premium</span> <span className="font-light font-soka">Technical</span> <span className="font-bold text-[#053131]">Services</span><br />
                        <span className="font-light font-soka">for your peace of mind.</span>
                    </h2>
                    <p className="text-gray-400">
                        SmartGuard Innovations provides dedicated technical support and expert consultation to ensure your communication systems are always operational.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[
                        {
                            title: "After Hours Emergency",
                            desc: "Our rapid-response team is available for critical system failures after business hours, ensuring your facility's heartbeat never stops."
                        },
                        {
                            title: "Solution Consultation",
                            desc: "Expert guidance on designing and integrating low-voltage electronic systems tailored to your facility's specific communication and security needs."
                        },
                        {
                            title: "Intercom Assessment",
                            desc: "Professional evaluation, repair, and modernization of intercom systems to maintain clear and secure communication channels in any building."
                        }
                    ].map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: idx * 0.2, ease: "easeOut" }}
                            className="bg-white rounded-[40px] p-5 sm:p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
                        >
                            <div className="flex items-center justify-between mb-5">
                                <div className="sm:size-20 size-14 bg-[#053131] rounded-full flex items-center justify-center group-hover:bg-[#0C6E6D] transition-colors">
                                    <img src={trustIcon} className="w-full p-2 transition-all" alt="icon" />
                                </div>
                                <h3 className="sm:text-xl text-lg font-black text-[#053131] group-hover:text-[#0C6E6D] transition-colors italic flex-1 px-4">{service.title}</h3>
                                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-[#0C6E6D] group-hover:text-white transition-all">
                                    <span className="text-xl">→</span>
                                </div>
                            </div>

                            <div className="h-px bg-gray-100 w-full mb-5"></div>

                            <p className="text-gray-400 text-sm leading-relaxed mb-5">
                                {service.desc}
                            </p>

                            <div className="rounded-[30px] overflow-hidden">
                                <img src={cardImg} alt="service" className="w-full h-full object-[100%_100%] group-hover:scale-110 transition-transform duration-700" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="mt-5 text-center"
                >
                    <Link to="/services">
                        <Button className="bg-[#0C6E6D] hover:bg-[#053131] text-white rounded-full px-12 py-8 text-lg font-bold">
                            View all Services
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
