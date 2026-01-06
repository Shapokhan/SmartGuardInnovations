
import ProductCard from './ProductCard';
import { products } from '@/data/products';
import { Search } from 'lucide-react';
import { useMemo } from 'react';

interface ProductGridProps {
    searchQuery: string;
    onSearchChange: (query: string) => void;
}

const ProductGrid = ({ searchQuery, onSearchChange }: ProductGridProps) => {

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesSearch;
        });
    }, [searchQuery]);

    return (
        <div className="w-full">
            {/* Top Bar with Search */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6 bg-white p-6 rounded-3xl shadow-sm border border-[#0C6E6D]/5">
                <div className="flex flex-col gap-1">
                    <p className="text-[#053131]/60 font-black uppercase tracking-[0.2em] text-[10px]">
                        Smart Guard Gallery
                    </p>
                    <h2 className="text-[#053131] font-black text-xl uppercase tracking-tight">
                        Results ({filteredProducts.length})
                    </h2>
                </div>

                {/* Search Replacement for Default Sorting */}
                <div className="relative w-full md:w-96">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="w-full bg-[#F8FBFA] border border-[#0C6E6D]/20 rounded-full py-4 px-6 pr-12 focus:outline-none focus:border-[#0C6E6D] text-[#053131] placeholder:text-[#053131]/30 font-bold shadow-inner"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#053131] rounded-full flex items-center justify-center text-white shadow-lg">
                        <Search size={18} />
                    </div>
                </div>
            </div>

            {/* Grid - 4 items per row on large screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* No Results Fallback */}
            {filteredProducts.length === 0 && (
                <div className="text-center py-32 bg-white rounded-[40px] border-2 border-dashed border-[#0C6E6D]/10 relative">
                    <div className="max-w-sm mx-auto space-y-6 px-6">
                        <div className="w-24 h-24 bg-[#F0F7F6] rounded-3xl flex items-center justify-center mx-auto rotate-12 transition-transform duration-500">
                            <Search className="size-12 text-[#0C6E6D]" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-black text-[#053131] uppercase tracking-tighter">No Products Match</h3>
                            <p className="text-[#053131]/60 font-bold text-sm tracking-tight leading-relaxed">
                                We couldn't find any products matching your search term. Try a different keyword.
                            </p>
                        </div>
                        <button
                            onClick={() => onSearchChange('')}
                            className="bg-[#053131] text-white px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-[#0C6E6D] transition-all shadow-xl"
                        >
                            Clear Search
                        </button>
                    </div>
                </div>
            )}

            {/* Pagination Placeholder */}
            {filteredProducts.length > 0 && (
                <div className="mt-16 flex justify-center items-center gap-4">
                    {[1].map((page) => (
                        <button
                            key={page}
                            className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black transition-all ${page === 1 ? 'bg-[#053131] text-[#7AFFC7] shadow-xl translate-y-[-4px]' : 'bg-white text-[#053131]'}`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductGrid;
