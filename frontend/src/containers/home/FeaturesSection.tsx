
import { motion } from 'framer-motion';
import { products } from '@/data/productdata';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturesSection = () => {
    // Take the first 4 products
    const featuredProducts = products.slice(0, 4);

    return (
        <section className="py-20 bg-[#F8FBFA]">
            <div className="max-w-[1440px] mx-auto px-4">
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <p className="text-[#0C6E6D] font-semibold uppercase tracking-[0.2em] text-[10px] mb-4">
                        Premium Solutions
                    </p>
                    <h2 className="sm:text-4xl text-3xl font-semibold text-[#053131] leading-tight mb-4 uppercase tracking-tight">
                        Our Featured <span className="text-[#0C6E6D]">Products</span>
                    </h2>
                    <p className="text-[#053131]/60 font-medium">
                        Discover our most popular security and emergency solutions, designed for maximum reliability and ease of use.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredProducts.map((product, idx) => {
                        const slug = product.productName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                        return (
                            <motion.div
                                key={idx}
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
                                className="group bg-white rounded-[32px] overflow-hidden border border-[#0C6E6D]/5 hover:border-[#0C6E6D]/20 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full"
                            >
                                {/* Image Area */}
                                <Link to={`/products/${slug}`} className="p-4 block">
                                    <div className="aspect-square bg-[#F8FBFA] rounded-[24px] overflow-hidden flex items-center justify-center p-8 group-hover:bg-white transition-colors duration-500">
                                        <img
                                            src={product.images[0]?.src}
                                            alt={product.productName}
                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                                        />
                                    </div>
                                </Link>

                                {/* Content Area */}
                                <div className="p-8 pt-2 flex flex-col flex-grow">
                                    <Link to={`/products/${slug}`} className="group/title mb-3">
                                        <h3 className="text-lg font-semibold text-[#053131] uppercase tracking-tight leading-tight line-clamp-2 min-h-[48px] group-hover/title:text-[#0C6E6D] transition-colors">
                                            {product.productName}
                                        </h3>
                                    </Link>

                                    <p className="text-[#053131]/60 text-sm line-clamp-3 font-medium leading-relaxed mb-6">
                                        {product.description}
                                    </p>

                                    <div className="mt-auto">
                                        <Link
                                            to={`/products/${slug}`}
                                            className="text-[#0C6E6D] sm:text-[13px] text-[10px] font-semibold uppercase tracking-[0.2em] flex items-center gap-2 group/more"
                                        >
                                            More Info
                                            <div className="w-8 h-8 rounded-full bg-[#0C6E6D]/10 flex items-center justify-center group-hover/more:bg-[#053131] group-hover/more:text-white transition-all duration-300">
                                                <ArrowRight size={14} />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        to="/products"
                        className="bg-[#053131] text-white px-10 py-5 rounded-full font-semibold uppercase tracking-widest hover:bg-[#0C6E6D] transition-all shadow-xl inline-flex items-center gap-3"
                    >
                        View All Products
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
