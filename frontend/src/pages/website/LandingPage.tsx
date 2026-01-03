

import Header from '@/components/website/shared/Header';
import Footer from '@/components/website/shared/Footer';
import HeroSection from '../../containers/home/HeroSection';
import AboutSection from '../../containers/home/AboutSection';
import SolutionsSection from '../../containers/home/SolutionsSection';
import FeaturesSection from '../../containers/home/FeaturesSection';
import ServicesSection from '../../containers/home/ServicesSection';
import TestimonialsSection from '../../containers/home/TestimonialsSection';
import CTASection from '../../containers/home/CTASection';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#0C6E6D] selection:text-white">
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <SolutionsSection />
                <FeaturesSection />
                <ServicesSection />
                <TestimonialsSection />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
