
import type { Product } from '@/data/products';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group bg-[#F0F7F6] rounded-2xl p-4 flex flex-col gap-4 border border-transparent hover:border-[#0C6E6D]/20 transition-all duration-300 shadow-sm"
        >
            {/* Image Container */}
            <div className="relative aspect-square bg-white rounded-xl overflow-hidden flex items-center justify-center p-6">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Content Container */}
            <div className="flex flex-col gap-1 px-1">
                <div className="flex justify-between items-start gap-2">
                    <h3 className="font-bold text-[#053131] text-lg uppercase tracking-tight leading-tight">
                        {product.name}
                    </h3>
                    <span className="font-black text-[#0C6E6D] text-lg">
                        ${product.price.toFixed(2)}
                    </span>
                </div>

                <p className="text-[#053131]/60 text-sm font-semibold mb-2">
                    {product.category}
                </p>

                <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={14}
                            className={`${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                    ))}
                </div>

                <div className="flex items-center justify-between mt-auto pt-2 border-t border-[#0C6E6D]/10">
                    <button className="text-[#0C6E6D] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                        More Info
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white border border-[#0C6E6D]/20 flex items-center justify-center text-[#053131] hover:bg-[#0C6E6D] hover:text-white transition-all">
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
