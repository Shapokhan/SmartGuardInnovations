
import sideImg from '@/assets/images/about-us-section.png';
import smallImg from '@/assets/images/sciencelab.png';
import { FaCheckCircle } from 'react-icons/fa';

const AboutIntro = () => {
    return (
        <section className="py-7 md:py-10 relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 items-center">

                    {/* Left Side: Large Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="rounded-[55px] overflow-hidden shadow-2xl relative z-10">
                            <img src={sideImg} alt="Business Meeting" className="w-full h-auto object-cover" />
                        </div>
                        {/* Decorative background shape */}
                        <div className="absolute top-10 -left-10 w-full h-full bg-[#0C6E6D]/10 rounded-[50px] -z-0 hidden sm:block"></div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#053131] leading-tight mb-6">
                                <span className="text-[#0C6E6D]">Comtel Technologies</span><br />
                                <span className="font-light italic text-2xl md:text-3xl">A Legacy of Excellence since 1968</span>
                            </h2>
                            <p className="text-gray-500 leading-relaxed text-lg">
                                Comtel Technologies (Aust) Pty Ltd (originally Comtel Pty Ltd) was incorporated in Victoria in 1968 to distribute, install and maintain Nurse Call, Inter-communications and Public Address equipment. Over the decades, we have become established in the Health Care Industry as a premier supplier of Australian-made Nurse Call and Communication systems.
                            </p>
                            <p className="text-gray-500 leading-relaxed mt-4">
                                We specialise in a range of low-voltage equipment & systems specifically for the Aged & Health Care Industries, although our quality solutions are also widely used in Educational, Correctional, Commercial, and Residential sectors.
                            </p>
                        </div>

                        {/* Text Points & Small Image Grid */}
                        <div className="grid sm:grid-cols-2 gap-8 items-center mt-8">
                            {/* Small Image */}
                            <div className="rounded-[40px] overflow-hidden shadow-lg h-[220px] w-full relative group">
                                <img src={smallImg} alt="Lab Work" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>

                            {/* Points */}
                            <div className="space-y-4">
                                {[
                                    "40+ years of quality solutions",
                                    "High level of product reliability",
                                    "Seamless system integration",
                                    "Specialised health care knowledge"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="min-w-6 min-h-6 text-[#0C6E6D]">
                                            <FaCheckCircle className="w-full h-full" />
                                        </div>
                                        <p className="text-[#053131] font-bold text-sm tracking-tight">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 space-y-4">
                            <p className="text-gray-500 leading-relaxed">
                                Our aim at Comtel is to provide our customers with fully integrated electronic solutions, ensuring a high level of product reliability with the assurance that systems will work together as one complete solution.
                            </p>
                            <p className="text-gray-500 leading-relaxed italic border-l-4 border-[#0C6E6D] pl-4">
                                Providing peace of mind through enhanced security and smarter communication since 1968.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;
