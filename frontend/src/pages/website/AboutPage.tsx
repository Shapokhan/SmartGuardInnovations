
import Header from '@/components/website/shared/Header';
import Footer from '@/components/website/shared/Footer';
import contactBanner from '@/assets/images/contact-us.png';
import AboutIntro from '@/containers/about/AboutIntro';
import AboutMethodology from '@/containers/about/AboutMethodology';
import AboutTeamProcess from '@/containers/about/AboutTeamProcess';
import AboutSolutions from '@/containers/about/AboutSolutions';
import AboutTeam from '@/containers/about/AboutTeam';
import AboutPartners from '@/containers/about/AboutPartners';
import ScrollToTop from '@/components/website/shared/ScrollToTop';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-[#0C6E6D] selection:text-white">
            <ScrollToTop />
            <Header />

            <main className="pt-[110px] sm:pt-[130px] lg:pt-[140px]">
                {/* Hero / Banner Section */}
                <div className="relative h-[250px] sm:rounded-[100px] sm:mt-7 mt-0 sm:mx-5 mx-0 md:h-[450px] flex items-center justify-center overflow-hidden">
                    <img
                        src={contactBanner}
                        alt="About Us Banner"
                        className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-[2000ms]"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="relative z-10 text-center space-y-4 px-4">
                        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
                            About <span className="font-light font-soka text-[#7AFFC7]">Us</span>
                        </h1>
                        <div className="flex items-center justify-center gap-3 text-white/90 text-sm md:text-base font-bold bg-white/10 backdrop-blur-md py-2 px-6 rounded-full w-fit mx-auto border border-white/20">
                            <span className="hover:text-[#7AFFC7] transition-colors cursor-pointer">Home</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#7AFFC7]"></span>
                            <span className="text-[#7AFFC7]">About Us</span>
                        </div>
                    </div>
                </div>

                {/* About Content Sections */}
                <AboutIntro />

                <AboutPartners />

                <AboutMethodology />

                <AboutSolutions />

                <AboutTeamProcess />

                <AboutTeam />

                {/* Just adding some extra space before footer */}
                <div className="py-10"></div>

                <Footer />
            </main>
        </div>
    );
};

export default AboutPage;
