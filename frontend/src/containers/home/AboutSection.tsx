import secImage from '@/assets/images/sec-1.png';
import trustIcon from '@/assets/images/trust-icon.png';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <section className="py-8 sm:py-10 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    {/* Left side: Single Image */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="lg:w-1/2 relative flex justify-center lg:justify-start"
                    >
                        <div className="relative z-10 w-full group">
                            <img
                                src={secImage}
                                alt="Marketing Consulting"
                                className="w-full h-full object-cover transition-transform duration-700 scale-90 group-hover:scale-80"
                            />

                        </div>
                    </motion.div>

                    {/* Right side: Content */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="lg:w-1/2 space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-[#053131]">
                                <span className="font-bold text-[#053131]">Advanced</span> <span className="font-light font-soka">Nurse Call</span> <span className="font-bold text-[#053131]">& Systems</span><br />
                            </h2>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                SmartGuard Innovations specializes in advanced nurse call systems and hospital communication solutions. We provide high-level product reliability for the health care industry.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { title: "Integrated Solutions", desc: "Our knowledge ensures seamless integration of various communication systems for your facility.", delay: 0.4 },
                                { title: "Cost Efficiency", desc: "By combining multiple low-voltage systems, we provide significant cost-savings to our customers.", delay: 0.55 },
                                { title: "Quality Assurance", desc: "Over 40 years of experience in providing secure intercom and communication systems.", delay: 0.7 }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ duration: 0.8, delay: item.delay, ease: "easeOut" }}
                                    className="flex items-center gap-6 group"
                                >
                                    <div className="size-[80px] rounded-full bg-[#0C6E6D]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0C6E6D] transition-colors duration-300">
                                        <img
                                            src={trustIcon}
                                            alt="icon"
                                            className="size-full p-3 transition-all duration-300 group-hover:invert group-hover:brightness-0"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#053131] uppercase">{item.title}</h4>
                                        <p className="text-sm text-gray-400">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                            className="pt-4"
                        >
                            <Link to="/about-us">
                                <Button className="bg-[#0C6E6D] hover:bg-[#053131] text-white rounded-full px-10 py-7 font-bold">
                                    View About Us
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
