
import type { Product } from '@/data/productdata';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProductCardProps {
    product: Product;
}

import { useState, useEffect } from 'react';

const ProductCard = ({ product }: ProductCardProps) => {
    const slug = product.productName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (product.images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [product.images.length]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group bg-white rounded-3xl p-5 flex flex-col gap-5 border border-[#0C6E6D]/5 hover:border-[#0C6E6D]/20 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2"
        >
            <Link to={`/products/${slug}`} className="relative aspect-square bg-[#F8FBFA] rounded-2xl overflow-hidden flex items-center justify-center p-8 group-hover:bg-white transition-colors duration-500">
                {product.images.length > 1 ? (
                    <div className="absolute inset-0 p-8">
                        {product.images.map((img, idx) => (
                            <img
                                key={img.id}
                                src={img.src}
                                alt={img.alt || product.productName}
                                className={`absolute inset-0 w-full h-full object-contain p-8 transition-opacity duration-1000 ease-in-out ${idx === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                    }`}
                            />
                        ))}
                    </div>
                ) : (
                    <img
                        src={product.images[0]?.src || ''}
                        alt={product.images[0]?.alt || product.productName}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                )}
                <div className="absolute inset-0 bg-[#053131]/0 group-hover:bg-[#053131]/5 transition-colors duration-500"></div>

                {product.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                        {product.images.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-[#0C6E6D] w-3' : 'bg-[#0C6E6D]/30'
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </Link>

            <div className="flex flex-col gap-3 flex-grow">
                <Link to={`/products/${slug}`} className="group/title">
                    <h3 className="font-semibold text-[#053131] text-lg uppercase tracking-tight leading-tight line-clamp-2 min-h-[48px] group-hover/title:text-[#0C6E6D] transition-colors">
                        {product.productName}
                    </h3>
                </Link>

                <p className="text-[#053131]/60 text-sm line-clamp-3 font-medium leading-relaxed">
                    {product.description}
                </p>

                <div className="mt-auto pt-5 flex items-center justify-between">
                    <Link
                        to={`/products/${slug}`}
                        className="text-[#0C6E6D] text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 group/more"
                    >
                        Learn More
                        <div className="w-8 h-8 rounded-full bg-[#0C6E6D]/10 flex items-center justify-center group-hover/more:bg-[#053131] group-hover/more:text-white transition-all duration-300">
                            <ArrowRight size={14} />
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
