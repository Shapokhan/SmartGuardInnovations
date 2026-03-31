
import Header from '@/components/website/shared/Header';
import Footer from '@/components/website/shared/Footer';
import contactBanner from '@/assets/images/contact-us.png';
import ServicesGrid from '@/containers/services/ServicesGrid';
import ProcessSection from '@/containers/services/ProcessSection';
import ServicesCTA from '@/containers/services/ServicesCTA';
import ScrollToTop from '@/components/website/shared/ScrollToTop';

const ServicesPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-[#0C6E6D] selection:text-white">
            <ScrollToTop />
            <Header />

            <main className="pt-[110px] sm:pt-[130px] lg:pt-[140px]">
                {/* Hero / Banner Section */}
                <div className="relative h-[250px] sm:rounded-[100px] sm:mt-7 mt-0 sm:mx-5 mx-0 md:h-[450px] flex items-center justify-center overflow-hidden">
                    <img
                        src={contactBanner} // Using same banner for now or generic
                        alt="Services Banner"
                        className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-[2000ms]"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="relative z-10 text-center space-y-4 px-4">
                        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
                            Our <span className="font-light font-soka text-[#7AFFC7]">Services</span>
                        </h1>
                        <div className="flex items-center justify-center gap-3 text-white/90 text-sm md:text-base font-bold bg-white/10 backdrop-blur-md py-2 px-6 rounded-full w-fit mx-auto border border-white/20">
                            <span className="hover:text-[#7AFFC7] transition-colors cursor-pointer">Home</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#7AFFC7]"></span>
                            <span className="text-[#7AFFC7]">Services</span>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <section className="py-7 md:py-10 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0C6E6D]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#053131]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        {/* Intro Text */}
                        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#053131] leading-tight">
                                <span className="font-bold text-[#0C6E6D]">Specialized</span> <span className="font-light font-soka">Technical</span> <span className="font-bold">Services</span><br />
                                <span className="text-2xl sm:text-3xl font-light text-gray-500 italic">Expertise you can rely on, 24/7.</span>
                            </h2>
                            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                                SmartGuard Innovations offers a comprehensive suite of technical services designed to keep your facility's communication and security systems running at peak performance.
                            </p>
                        </div>

                        {/* Services Grid */}
                        <ServicesGrid />

                        {/* Process Section */}
                        <ProcessSection />

                        {/* Call to Action Box */}
                        <ServicesCTA />

                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default ServicesPage;
