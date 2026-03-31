
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/productdata';
import Header from '@/components/website/shared/Header';
import Footer from '@/components/website/shared/Footer';
import { motion } from 'framer-motion';
import ScrollToTop from '@/components/website/shared/ScrollToTop';
import { ArrowLeft, ArrowRight, CheckCircle2, Package, Ruler, Info } from 'lucide-react';
import { useState, useMemo } from 'react';

const ProductDetailPage = () => {
    const { slug } = useParams<{ slug: string }>();

    const product = useMemo(() => {
        return products.find(p => p.productName.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug);
    }, [slug]);

    const [activeImage, setActiveImage] = useState(0);

    if (!product) {
        return (
            <div className="min-h-screen bg-[#F8FBFA] flex flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-semibold text-[#053131] uppercase">Product Not Found</h1>
                <Link to="/products" className="mt-4 text-[#0C6E6D] font-semibold hover:underline">Back to Products</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8FBFA] font-sans">
            <ScrollToTop />
            <Header />

            <main className="pt-[110px] sm:pt-[130px] lg:pt-[150px] pb-20">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs / Back Button */}
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 text-[#053131]/60 hover:text-[#0C6E6D] font-semibold text-sm uppercase tracking-widest transition-colors mb-8 group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Products
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Image Gallery */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="aspect-square bg-white rounded-[40px] overflow-hidden border border-[#0C6E6D]/10 shadow-xl flex items-center justify-center p-12"
                            >
                                <img
                                    src={product.images[activeImage]?.src}
                                    alt={product.images[activeImage]?.alt}
                                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                                />
                            </motion.div>

                            {product.images.length > 1 && (
                                <div className="grid grid-cols-4 gap-4">
                                    {product.images.map((img, idx) => (
                                        <button
                                            key={img.id}
                                            onClick={() => setActiveImage(idx)}
                                            className={`aspect-square bg-white rounded-2xl border-2 transition-all p-2 flex items-center justify-center overflow-hidden ${activeImage === idx ? 'border-[#0C6E6D] shadow-lg scale-105' : 'border-transparent hover:border-[#0C6E6D]/30 opacity-70 hover:opacity-100'}`}
                                        >
                                            <img src={img.src} alt={img.alt} className="w-full h-full object-contain" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Product Info */}
                        <div className="flex flex-col">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-6"
                            >
                                <div className="space-y-2">

                                    <h1 className="sm:text-3xl text-2xl md:text-5xl font-semibold text-[#053131] uppercase tracking-tight leading-none">
                                        {product.productName}
                                    </h1>
                                    <p className="text-[#0C6E6D] font-semibold text-lg uppercase tracking-wider">
                                        {product.productType}
                                    </p>
                                </div>

                                <div className="h-1 lg:w-32 bg-gradient-to-r from-[#0C6E6D] to-transparent rounded-full"></div>

                                <p className="text-[#053131]/70 font-medium text-lg leading-relaxed max-w-2xl">
                                    {product.description}
                                </p>

                                {/* Features */}
                                <div className="space-y-4 pt-4">
                                    <h3 className="text-[#053131] font-semibold uppercase text-sm tracking-widest flex items-center gap-2">
                                        <CheckCircle2 size={18} className="text-[#0C6E6D]" />
                                        Key Features
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {product.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-[#0C6E6D]/5 shadow-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#0C6E6D] mt-1.5 flex-shrink-0"></div>
                                                <span className="text-sm font-semibold text-[#053131]/80 leading-snug">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Dimensions */}
                                {product.dimensions && (
                                    <div className="space-y-4 pt-4">
                                        <h3 className="text-[#053131] font-semibold uppercase text-sm tracking-widest flex items-center gap-2">
                                            <Ruler size={18} className="text-[#0C6E6D]" />
                                            Dimensions & Mounting
                                        </h3>
                                        <div className="bg-[#053131] text-white p-6 rounded-3xl shadow-xl space-y-4 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 relative z-10">
                                                {Object.entries(product.dimensions).map(([key, value]) => (
                                                    value && (
                                                        <div key={key} className="space-y-1">
                                                            <p className="text-white font-semibold text-[10px] uppercase tracking-widest">{key}</p>
                                                            <p className="text-[#7AFFC7] font-semibold text-sm tracking-tight">{value}</p>
                                                        </div>
                                                    )
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </div>

                    {/* Parts Table */}
                    {product.parts && product.parts.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-24 space-y-8"
                        >
                            <div className="flex flex-col md:flex-row sm:items-end justify-between gap-4 border-b-2 border-[#0C6E6D]/10 pb-6">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-semibold text-[#053131] uppercase tracking-tight flex items-center gap-3">
                                        <Package size={28} className="text-[#0C6E6D]" />
                                        More Information
                                    </h2>
                                    <p className="text-[#053131]/60 font-semibold uppercase tracking-widest text-xs">Available Parts & Part Numbers</p>
                                </div>
                                <div className="bg-[#0C6E6D]/5 sm:flex hidden px-4 py-2 rounded-lg border border-[#0C6E6D]/10  items-center gap-2 text-[#0C6E6D] text-xs font-semibold uppercase tracking-widest">
                                    <Info size={14} />
                                    Total Items: {product.parts.length}
                                </div>
                            </div>

                            <div className="rounded-[32px] border border-[#0C6E6D]/10 bg-white shadow-2xl overflow-hidden">
                                {/* Desktop Header - Hidden on Mobile */}
                                <div className="hidden md:grid grid-cols-[200px_1fr] bg-[#053131] text-white">
                                    <div className="px-8 py-6 text-[10px] font-semibold uppercase tracking-[0.2em] border-r border-white/10">Part Number</div>
                                    <div className="px-8 py-6 text-[10px] font-semibold uppercase tracking-[0.2em]">Description</div>
                                </div>

                                {/* Rows */}
                                <div className="divide-y divide-[#0C6E6D]/5">
                                    {product.parts.map((part, idx) => (
                                        <div
                                            key={idx}
                                            className="grid grid-cols-1 md:grid-cols-[200px_1fr] group hover:bg-[#F0F7F6] transition-colors"
                                        >
                                            {/* Part Number Column */}
                                            <div className="px-6 py-4 md:px-8 md:py-5 border-r border-[#0C6E6D]/5 flex items-center md:bg-transparent bg-[#F8FBFA]">
                                                <div className="flex flex-col gap-1 w-full">
                                                    <span className="md:hidden text-[14px] font-semibold text-[#0C6E6D] uppercase tracking-widest mb-1">Part Number</span>
                                                    <span className="bg-[#053131]/5 text-[#053131] px-4 py-2 rounded-lg border border-[#053131]/10 font-semibold text-sm tracking-tight group-hover:bg-[#053131] group-hover:text-white transition-all inline-block w-fit">
                                                        {part.partNumber}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Description Column */}
                                            <div className="px-6 py-4 md:px-8 md:py-5 flex items-center">
                                                <div className="flex flex-col gap-1 w-full">
                                                    <span className="md:hidden text-[14px] font-semibold text-[#0C6E6D] uppercase tracking-widest mb-1">Description</span>
                                                    <p className="text-[#053131]/80 font-semibold text-sm tracking-tight leading-relaxed group-hover:text-[#053131]">
                                                        {part.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Footer CTA */}
                <div className="max-w-[1440px] mx-auto px-4 sm:mt-10 mt-12 sm:block hidden">
                    <div className="bg-[#053131] rounded-[60px] p-12 text-center space-y-8 relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0C6E6D]/20 to-transparent"></div>
                        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                            <h2 className="text-3xl md:text-4xl font-semibold text-white uppercase tracking-tight">Need technical <span className="text-[#7AFFC7]">assistance?</span></h2>
                            <p className="text-white/70 font-semibold text-lg leading-relaxed">Our experts are ready to help you with specifications and system integration for your facility.</p>
                            <Link
                                to="/contact-us"
                                className="bg-[#7AFFC7] text-[#053131] inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-xl shadow-[#7AFFC7]/10"
                            >
                                Contact Support
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetailPage;
