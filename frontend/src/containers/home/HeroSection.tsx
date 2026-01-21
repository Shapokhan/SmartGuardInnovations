
import bannerBg from '@/assets/images/banner.png';
import { motion } from 'framer-motion';
import { CheckCircle2, Activity, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section className="relative small:mt-0 mt-12  lg:min-h-[100vh] flex items-center overflow-hidden bg-[#053131] pt-24 lg:pt-32">
            {/* Full Background Image */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute z-0"
            >
                <div className="absolute  z-10"></div>
                <img
                    src={bannerBg}
                    alt="Hero Background"
                    className="w-full h-full sm:object-[100%_100%] object-cover "
                />
            </motion.div>

            {/* Background design elements (Rings) */}


            <div className="container relative z-20 h-full mx-auto px-4 sm:px-6 lg:px-8 mt-5 sm:mt-10">
                <div className="max-w-3xl pb-10 sm:pb-20">
                    {/* Badge */}
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex items-center gap-2 w-fit rounded-full bg-[#0C6E6D] px-6 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-white shadow-xl mb-8"
                    >
                        <Activity className="w-3 h-3" />
                        Advanced Healthcare Solutions                    </motion.div>

                    {/* Heading - text-4xl as requested */}
                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl leading-[1.2] text-white"
                    >
                        <span className="font-bold  ">Next Gen Nurse Call</span><br />
                        <span className="font-[100] font-soka">Systems for Modern </span><span className="font-bold"> Hospitals</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="mt-8 max-w-xl text-base sm:text-lg text-gray-300 font-medium leading-relaxed"
                    >
                        Enhance patient care and improve response times with our state-of-the-art wireless communication systems designed for efficiency and reliability.                    </motion.p>

                    <div className="flex flex-col mt-5 sm:flex-row gap-4">
                        <Button
                            size="lg"
                            className="rounded-full font-bold px-8 h-12"
                            onClick={() => navigate('/products')}
                        >
                            View Products
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="rounded-full font-bold px-8 h-12 bg-white hover:bg-slate-50 border-slate-200"
                            onClick={() => navigate('/contact-us')}
                        >
                            <Play className="w-4 h-4 mr-2 fill-current" /> Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
