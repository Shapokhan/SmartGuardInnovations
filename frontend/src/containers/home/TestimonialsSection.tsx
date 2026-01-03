
import circleImg from '@/assets/images/down-circle.png';

const testimonials = [
    {
        name: "Create Account",
        role: "Lorem Ipsum",
        content: "Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care. Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.",
        rating: 5
    },
    {
        name: "Create Account",
        role: "Lorem Ipsum",
        content: "Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care. Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.",
        rating: 5
    },
    {
        name: "Create Account",
        role: "Lorem Ipsum",
        content: "Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care. Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.",
        rating: 5
    }
];

const TestimonialsSection = () => {
    return (
        <section className="py-10 bg-white overflow-hidden">
            <div className="container mx-auto px-4 ">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#053131] leading-tight mb-6 text-center">
                        <span className="font-extrabold">Trusted</span> <span className="font-light">Marketing</span> <span className="font-extrabold">Consulting</span><br />
                        <span className="font-light">agency for business.</span>
                    </h2>
                    <p className="text-gray-400">
                        Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-[40px] p-10 space-y-8 relative shadow-sm hover:shadow-xl transition-all group">
                            {/* Stars */}
                            <div className="flex gap-1 text-yellow-400">
                                {[...Array(t.rating)].map((_, i) => (
                                    <span key={i} className="text-xl">★</span>
                                ))}
                            </div>

                            <p className="text-gray-500 text-sm leading-relaxed italic">
                                "{t.content}"
                            </p>

                            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#0C6E6D]/20 group-hover:border-[#0C6E6D] transition-colors">
                                    <img src={circleImg} alt={t.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-black text-[#053131] leading-none">{t.name}</h4>
                                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Slider controls placeholder */}
                <div className="flex justify-center gap-4 mt-12">
                    <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-[#053131] hover:bg-[#0C6E6D] hover:text-white hover:border-[#0C6E6D] transition-all">
                        <span className="text-xl">←</span>
                    </button>
                    <button className="w-14 h-14 rounded-full bg-[#0C6E6D] flex items-center justify-center text-white shadow-lg hover:bg-[#053131] transition-all">
                        <span className="text-xl">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
