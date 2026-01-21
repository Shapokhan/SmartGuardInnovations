import { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { RiMenu3Line, RiCloseLine, RiArrowRightLine, RiPhoneFill } from 'react-icons/ri';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Detect scroll for header style
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ✅ PROPER mobile scroll lock (NO JUMP)
    useEffect(() => {
        if (isMenuOpen) {
            const scrollY = window.scrollY;

            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
            document.body.style.width = '100%';
        } else {
            const scrollY = document.body.style.top;

            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.width = '';

            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY) * -1);
            }
        }

        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.width = '';
        };
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'Services', href: '/services' },
        { name: 'About Us', href: '/about-us' },
        { name: 'Contact Us', href: '/contact-us' }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full">
            {/* TOP BAR */}
            <div className="bg-[#053131] py-2.5 text-white border-b border-white/5">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="hidden sm:flex items-center gap-2">
                        <FaEnvelope />
                        <span className="text-sm font-medium">info@smartguard.com</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-2">
                            <RiPhoneFill />
                            <span className="text-sm font-medium">+1 (800) 123-4567</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaFacebookF className="cursor-pointer hover:text-white/70 transition-colors" />
                            <FaTwitter className="cursor-pointer hover:text-white/70 transition-colors" />
                            <FaLinkedinIn className="cursor-pointer hover:text-white/70 transition-colors" />
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN NAV */}
            <div
                className={`bg-white transition-all duration-300 ${isScrolled ? 'py-3 shadow-xl' : 'py-5 shadow-sm'
                    }`}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <div className="text-2xl font-black text-[#053131]">SmartGuard</div>

                    <nav className="hidden lg:flex gap-10">
                        {navLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-xs font-black uppercase tracking-widest text-[#053131] hover:text-[#0C6E6D] relative group"
                            >
                                {item.name}
                                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#0C6E6D] group-hover:w-full transition-all" />
                            </a>
                        ))}
                    </nav>

                    <button className="hidden lg:block bg-[#0C6E6D] text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest">
                        Trusted Consulting
                    </button>

                    <button
                        className="lg:hidden"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <RiMenu3Line className="w-8 h-8 text-[#053131]" />
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`fixed inset-0 z-[60] lg:hidden ${isMenuOpen ? 'visible' : 'invisible'
                    }`}
            >
                {/* Overlay */}
                <div
                    className={`absolute inset-0 bg-[#053131]/60 backdrop-blur-md transition-opacity ${isMenuOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Sidebar */}
                <div
                    className={`absolute top-0 right-0 h-full w-[320px] bg-[#053131] text-white transform transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="p-8 flex flex-col h-full">
                        <div className="flex justify-between items-center mb-14">
                            <div className="text-2xl font-black text-white">SmartGuard</div>
                            <button onClick={() => setIsMenuOpen(false)}>
                                <RiCloseLine className="w-7 h-7" />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-6">
                            {navLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-xl font-bold border-b border-white/10 py-3 flex justify-between"
                                >
                                    {item.name}
                                    <RiArrowRightLine />
                                </a>
                            ))}
                        </nav>

                        <div className="mt-auto">
                            <button className="w-full bg-[#0C6E6D] py-4 rounded-full uppercase font-black text-sm">
                                Trusted Consulting
                            </button>

                            <div className="flex justify-center gap-6 mt-8 text-white/70">
                                <FaFacebookF className="text-xl cursor-pointer hover:text-white transition-colors" />
                                <FaTwitter className="text-xl cursor-pointer hover:text-white transition-colors" />
                                <FaLinkedinIn className="text-xl cursor-pointer hover:text-white transition-colors" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
