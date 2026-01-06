import { useState, useEffect } from 'react';
import { FaFacebookF, FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { RiMenu3Line, RiCloseLine, RiArrowRightLine, RiWhatsappFill } from 'react-icons/ri';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Disable body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to restore scroll on unmount
        return () => {
            document.body.style.overflow = 'unset';
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
        <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${isScrolled ? 'translate-y-[-2px]' : ''}`}>
            {/* Top Bar */}
            <div className="bg-[#053131] py-2.5 text-white/95 border-b border-white/5">
                <div className="container mx-auto flex items-center justify-between px-4">
                    {/* Left: Email - Hidden on extra small mobile */}
                    <div className="hidden sm:flex items-center gap-2.5 group cursor-pointer">
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#0C6E6D] transition-all duration-300">
                            <FaEnvelope className="h-3.5 w-3.5 text-white" />
                        </div>
                        <span className="text-[15px] font-semibold tracking-wide">Email: info@domainname.com</span>
                    </div>

                    {/* Left: Phone - Visible on mobile when email is hidden */}
                    <div className="flex sm:hidden items-center gap-2.5 group cursor-pointer">
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#0C6E6D] transition-all duration-300">
                            <RiWhatsappFill className="size-5 text-white" />
                        </div>
                        <span className="text-[14px] font-bold tracking-wide">Contact Us</span>
                    </div>

                    {/* Right: Social & Phone - Hide social on small mobile */}
                    <div className="flex items-center gap-4 sm:gap-8">
                        {/* Social Icons - Hidden on mobile */}
                        <div className="hidden md:flex items-center gap-4">
                            <div className="w-8 h-8 flex items-center justify-center hover:bg-[#0C6E6D] rounded-lg transition-all cursor-pointer bg-white/5">
                                <FaFacebookF className="h-3.5 w-3.5 text-white" />
                            </div>
                            <div className="w-8 h-8 flex items-center justify-center hover:bg-[#0C6E6D] rounded-lg transition-all cursor-pointer bg-white/5">
                                <FaInstagram className="h-4 w-4 text-white" />
                            </div>
                            <div className="w-8 h-8 flex items-center justify-center hover:bg-[#0C6E6D] rounded-lg transition-all cursor-pointer bg-white/5">
                                <FaYoutube className="h-4 w-4 text-white" />
                            </div>
                        </div>

                        {/* Divider - Hidden on mobile */}
                        <div className="hidden md:block h-5 w-px bg-white/20"></div>

                        {/* Phone - Always visible but smaller on mobile */}
                        <div className="hidden sm:flex items-center gap-2.5 group cursor-pointer">
                            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#0C6E6D] transition-all duration-300">
                                <RiWhatsappFill className="size-5 text-white" />
                            </div>
                            <span className="text-[14px] font-bold tracking-wide">Contact: +123 (456) 789</span>
                        </div>

                        {/* Social Icons for Mobile - Smaller version */}
                        <div className="flex md:hidden items-center gap-3">
                            <FaFacebookF className="h-4 w-4 text-white/80" />
                            <FaInstagram className="h-4 w-4 text-white/80" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className={`bg-white transition-all duration-300 ${isScrolled ? 'py-3 shadow-xl backdrop-blur-md bg-white/95' : 'py-5 shadow-sm'}`}>
                <div className="container mx-auto flex items-center justify-between px-4">
                    {/* Logo */}
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-black flex flex-col leading-none">
                        LOGO
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden items-center gap-10 lg:flex">
                        {navLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-[13px] font-black text-[#053131] hover:text-[#0C6E6D] font-bold transition-all uppercase tracking-widest relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0C6E6D] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <button className="hidden rounded-full bg-[#0C6E6D] font-bold px-8 py-3.5 text-[12px] uppercase tracking-[0.1em] text-white hover:bg-[#053131] transition-all duration-300 lg:block shadow-lg active:scale-95">
                        TRUSTED CONSULTING
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden text-[#053131] p-2 hover:bg-gray-100 rounded-xl transition-all"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <RiMenu3Line className="w-8 h-8" />
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Menu (Right Side) */}
            <div className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}>
                <div
                    className={`absolute inset-0 bg-[#053131]/60 backdrop-blur-md transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsMenuOpen(false)}
                ></div>

                <div className={`absolute top-0 right-0 h-full w-[320px] bg-[#053131] shadow-2xl transition-transform duration-500 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-8 flex flex-col h-full text-white">
                        <div className="flex items-center justify-between mb-16">
                            <div className="text-4xl font-black tracking-tighter text-white">LOGO</div>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all"
                            >
                                <RiCloseLine className="w-6 h-6 text-white" />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-6">
                            {navLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-xl font-bold hover:text-[#7AFFC7] transition-all py-3 border-b border-white/5 flex justify-between items-center group"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                    <RiArrowRightLine className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </a>
                            ))}
                        </nav>

                        <div className="mt-auto pt-10 font-bold">
                            <button className="w-full bg-[#0C6E6D] text-white py-5 rounded-full font-black uppercase text-sm tracking-[0.2em] shadow-2xl mb-10">
                                Trusted Consulting
                            </button>

                            <div className="flex justify-center gap-8">
                                <FaFacebookF className="w-5 h-5 text-white/60 hover:text-white transition-colors cursor-pointer" />
                                <FaYoutube className="w-6 h-6 text-white/60 hover:text-white transition-colors cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
