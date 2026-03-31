
import Header from '@/components/website/shared/Header';
import Footer from '@/components/website/shared/Footer';
import contactBanner from '@/assets/images/contact-us.png';
import contactSide from '@/assets/images/contact-us-side-img.png';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import ScrollToTop from '@/components/website/shared/ScrollToTop';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-[#0C6E6D] selection:text-white">
            <ScrollToTop />
            <Header />

            <main className="pt-[110px] sm:pt-[130px] lg:pt-[140px]">
                {/* Hero / Banner Section */}
                <div className="relative h-[250px] sm:rounded-[100px] sm:mt-7 mt-0 sm:mx-5 mx-0 md:h-[450px] flex items-center justify-center overflow-hidden">
                    <img
                        src={contactBanner}
                        alt="Contact Banner"
                        className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-[2000ms]"
                    />
                    <div className="absolute inset-0 "></div>
                    <div className="relative z-10 text-center space-y-4 px-4">
                        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
                            Contact <span className="font-light font-soka text-[#7AFFC7]">Us</span>
                        </h1>
                        <div className="flex items-center justify-center gap-3 text-white/90 text-sm md:text-base font-bold bg-white/10 backdrop-blur-md py-2 px-6 rounded-full w-fit mx-auto border border-white/20">
                            <span className="hover:text-[#7AFFC7] transition-colors cursor-pointer">Home</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#7AFFC7]"></span>
                            <span className="text-[#7AFFC7]">Contact us</span>
                        </div>
                    </div>
                </div>

                {/* Contact Content Section */}
                <section className="py-10 md:py-16  relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0C6E6D]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#053131]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">

                            {/* Left Side: Contact Form */}
                            <div className="lg:w-2/3 w-full bg-white rounded-[30px] sm:rounded-[50px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-6 sm:p-12 md:p-16 border border-white relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-2 h-full bg-[#0C6E6D] group-hover:w-3 transition-all duration-500"></div>

                                <div className="space-y-3 mb-6">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#053131] leading-tight">
                                        <span className="font-bold">Expert</span> <span className="font-light font-soka text-[#0C6E6D]">Product Advice</span><br />
                                        <span className="font-bold">& Technical</span> <span className="font-light font-soka text-[#0C6E6D]">Support</span>
                                    </h2>
                                    <p className="text-gray-500 text-sm sm:text-base max-w-2xl leading-relaxed">
                                        Partner with our technical experts today. Whether you have a specific project requirement or need help with system maintenance, we're here to provide the right solution.
                                    </p>
                                </div>

                                <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-[#053131] uppercase tracking-[0.2em] ml-4">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-slate-50 border-2 border-transparent focus:border-[#0C6E6D]/30 focus:bg-white rounded-xl px-6 py-3.5 transition-all outline-none text-[#053131] font-medium shadow-inner text-sm"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-[#053131] uppercase tracking-[0.2em] ml-4">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-slate-50 border-2 border-transparent focus:border-[#0C6E6D]/30 focus:bg-white rounded-xl px-6 py-3.5 transition-all outline-none text-[#053131] font-medium shadow-inner text-sm"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-[#053131] uppercase tracking-[0.2em] ml-4">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="+1 (000) 000-0000"
                                            className="w-full bg-slate-50 border-2 border-transparent focus:border-[#0C6E6D]/30 focus:bg-white rounded-xl px-6 py-3.5 transition-all outline-none text-[#053131] font-medium shadow-inner text-sm"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-[#053131] uppercase tracking-[0.2em] ml-4">Service Required</label>
                                        <div className="relative group">
                                            <select className="w-full bg-slate-50 border-2 border-transparent focus:border-[#0C6E6D]/30 focus:bg-white rounded-xl px-6 py-3.5 transition-all outline-none text-[#053131] font-medium shadow-inner appearance-none cursor-pointer text-sm">
                                                <option>Marketing Consulting</option>
                                                <option>Business Strategy</option>
                                                <option>Digital Solutions</option>
                                                <option>Branding & Design</option>
                                            </select>
                                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#0C6E6D]">
                                                <span className="text-lg">↓</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-xs font-black text-[#053131] uppercase tracking-[0.2em] ml-4">Your Message</label>
                                        <textarea
                                            rows={5}
                                            placeholder="How can we help you achieve your goals?"
                                            className="w-full bg-slate-50 border-2 border-transparent focus:border-[#0C6E6D]/30 focus:bg-white rounded-xl px-6 py-4 transition-all outline-none text-[#053131] font-medium shadow-inner resize-none text-sm"
                                        ></textarea>
                                    </div>
                                    <div className="md:col-span-2 pt-2">
                                        <Button className="w-full md:w-auto bg-[#053131] hover:bg-[#0C6E6D] text-white rounded-full px-12 py-6 font-black text-[12px] uppercase tracking-[0.2em] shadow-[0_15px_30px_-5px_#05313155] transition-all transform active:scale-95 group">
                                            SEND MESSAGE NOW
                                            <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
                                        </Button>
                                    </div>
                                </form>
                            </div>

                            {/* Right Side: Contact Info */}
                            <div className="lg:w-1/3 w-full flex flex-col justify-between">
                                {/* Info Cards Container */}
                                <div className="space-y-4 mb-8">
                                    <div className="bg-white/70 backdrop-blur-xl rounded-[35px] p-3  flex items-center gap-6 group hover:bg-[#053131] transition-all duration-500 cursor-pointer border border-white shadow-lg hover:shadow-2xl hover:-translate-y-2">
                                        <div className="size-12 sm:size-16 bg-[#0C6E6D] rounded-[22px] flex items-center justify-center text-white shadow-xl transform group-hover:rotate-[15deg] transition-all duration-500">
                                            <FaPhoneAlt className="text-xl sm:text-2xl" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-[#7AFFC7] mb-0.5">Call Us Anywhere</p>
                                            <p className="text-lg sm:text-xl font-bold text-[#053131] group-hover:text-white transition-colors">+123 (456) 7890</p>
                                        </div>
                                    </div>

                                    <div className="bg-white/70 backdrop-blur-xl rounded-[35px] p-3  flex items-center gap-6 group hover:bg-[#053131] transition-all duration-500 cursor-pointer border border-white shadow-lg hover:shadow-2xl hover:-translate-y-2">
                                        <div className="size-12 sm:size-16 bg-[#0C6E6D] rounded-[22px] flex items-center justify-center text-white shadow-xl transform group-hover:rotate-[15deg] transition-all duration-500">
                                            <FaEnvelope className="text-xl sm:text-2xl" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-[#7AFFC7] mb-0.5">Email To Us</p>
                                            <p className="text-lg sm:text-xl font-bold text-[#053131] group-hover:text-white transition-colors">info@domainname.com</p>
                                        </div>
                                    </div>

                                    <div className="bg-white/70 backdrop-blur-xl rounded-[35px] p-3  flex items-center gap-6 group hover:bg-[#053131] transition-all duration-500 cursor-pointer border border-white shadow-lg hover:shadow-2xl hover:-translate-y-2">
                                        <div className="size-12 sm:size-16 bg-[#0C6E6D] rounded-[22px] flex items-center justify-center text-white shadow-xl transform group-hover:rotate-[15deg] transition-all duration-500">
                                            <FaMapMarkerAlt className="text-xl sm:text-2xl" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-[#7AFFC7] mb-0.5">Our Location</p>
                                            <p className="text-lg sm:text-xl font-bold text-[#053131] group-hover:text-white transition-colors leading-tight">123 Consulting Plaza, NY</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Side Image Container with Animation */}
                                <div className="relative rounded-[45px] overflow-hidden group shadow-3xl flex-grow max-h-[500px] animate-float">
                                    <img
                                        src={contactSide}
                                        alt="Consulting Expert"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#053131] via-[#053131]/20 to-transparent opacity-90"></div>
                                    <div className="absolute bottom-12 left-10 right-10 text-white space-y-5">
                                        <div className="w-12 h-1 bg-[#7AFFC7] rounded-full"></div>
                                        <h4 className="text-3xl font-bold leading-tight">Expert Consulting Solutions for Your Business</h4>
                                        <div className="flex gap-4 pt-2">
                                            {[FaFacebookF, FaInstagram, FaYoutube].map((Icon, i) => (
                                                <div key={i} className="size-11 rounded-xl border border-white/20 flex items-center justify-center hover:bg-[#7AFFC7] hover:text-[#053131] hover:border-transparent transition-all duration-300 cursor-pointer backdrop-blur-sm">
                                                    <Icon className="text-lg" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section with Polish */}
                <div className="h-[500px] relative">
                    <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280821873!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1673321564731!5m2!1sen!2s"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </main>

            <Footer />

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}} />
        </div>
    );
};

export default ContactPage;
