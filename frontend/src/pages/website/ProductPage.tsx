
import { useState } from 'react';
import Header from '@/components/website/shared/Header';
import Footer from '@/components/website/shared/Footer';
import bannerImg from '@/assets/images/banner.png';
import ProductGrid from '@/containers/products/ProductGrid';
import { motion } from 'framer-motion';
import ScrollToTop from '@/components/website/shared/ScrollToTop';

const ProductPage = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    return (
        <div className="min-h-screen bg-[#F8FBFA] font-sans selection:bg-[#0C6E6D] selection:text-white">
            <ScrollToTop />
            <Header />

            <main className="pt-[110px] sm:pt-[130px] lg:pt-[140px]">
                {/* Hero / Banner Section */}
                <div className="relative h-[200px] sm:rounded-b-[80px] sm:mx-5 mx-0 md:h-[200px] flex items-center justify-center overflow-hidden shadow-2xl">
                    <img
                        src={bannerImg}
                        alt="Products Banner"
                        className="absolute inset-0 w-full h-full object-cover transform scale-105"
                    />
                    <div className="absolute inset-0 bg-[#053131]/60 backdrop-blur-sm"></div>
                    <div className="relative z-10 text-center space-y-4 px-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-2xl sm:text-5xl font-semibold text-white mt-10 uppercase tracking-tighter drop-shadow-2xl"
                        >
                            Our <span className="font-light font-soka text-[#7AFFC7]">Products</span>
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="sm:flex hidden items-center justify-center gap-3 text-white/90 text-sm md:text-base font-semibold bg-white/10 backdrop-blur-md py-2 px-6 rounded-full w-fit mx-auto border border-white/20"
                        >
                            <span
                                className="hover:text-[#7AFFC7] transition-colors cursor-pointer"
                                onClick={() => setSearchQuery('')}
                            >
                                Home
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#7AFFC7]"></span>
                            <span className="text-[#7AFFC7]">Products</span>
                        </motion.div>
                    </div>
                </div>

                {/* Main Content - Full Width Grid */}
                <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 sm:py-10 py-7">
                    <ProductGrid
                        searchQuery={searchQuery}
                        onSearchChange={setSearchQuery}
                    />
                </div>

                {/* CTA Section */}
                <div className="sm:py-20 py-5 bg-[#053131] sm:mt-10 mt-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0C6E6D]/20 -skew-x-12 transform translate-x-1/2"></div>
                    <div className="max-w-[1440px] mx-auto px-4 relative z-10">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-white">
                                <h2 className="sm:text-3xl text-2xl font-semibold uppercase tracking-tight mb-2">Need a Custom <span className="text-[#7AFFC7]">Solution?</span></h2>
                                <p className="text-white/70 font-medium">Contact our experts for a personalized security consultation.</p>
                            </div>
                            <button className="bg-[#7AFFC7] text-[#053131] px-8 py-4 rounded-full font-semibold uppercase tracking-wider hover:bg-white hover:scale-105 transition-all shadow-xl">
                                Get In Touch Now
                            </button>
                        </div>
                    </div>
                </div>

                <Footer />
            </main>
        </div>
    );
};

export default ProductPage;
