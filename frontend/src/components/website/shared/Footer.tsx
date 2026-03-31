import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import footer_bg from '@/assets/images/footer-bg.png';
const Footer = () => {
    return (
        <footer className="bg-[#0C6E6D] relative ">
            <div className="max-w-[1400px] mx-auto px-4 pb-5 pt-10">
                <div className="bg-[#053131] rounded-[60px]  text-white relative overflow-hidden">
                    {/* Background Pattern Placeholder - User will add image later */}
                    <div className="absolute pointer-events-none">
                        <img src={footer_bg} alt="footer-bg " className="w-full h-full bg-[100% 100%]" />
                    </div>

                    <div className="relative z-10 p-6 sm:p-10">
                        {/* Top: 4 Columns */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20">
                            {/* Brand Column */}
                            <div className="col-span-2 lg:col-span-1 space-y-8">
                                <div className="text-4xl sm:text-5xl lg:text-5xl font-black tracking-tighter text-white">SmartGuard</div>
                                <p className="text-white/70 leading-relaxed text-sm max-w-xs">
                                    Leading provider of advanced nurse call systems and hospital communication solutions. Dedicated to improving patient care and operational efficiency.
                                </p>
                            </div>

                            {/* Solutions */}
                            <div className="space-y-8 lg:px-4">
                                <h4 className="text-2xl font-bold text-white">Solutions</h4>
                                <ul className="space-y-4 text-white/60 text-base font-medium">
                                    <li><Link to="/products" className="hover:text-white transition-colors">Nurse Call Systems</Link></li>
                                    <li><Link to="/products" className="hover:text-white transition-colors">Emergency Response</Link></li>
                                    <li><Link to="/products" className="hover:text-white transition-colors">Patient Monitoring</Link></li>
                                    <li><Link to="/products" className="hover:text-white transition-colors">Clinic Management</Link></li>
                                    <li><Link to="/products" className="hover:text-white transition-colors">Wireless Paging</Link></li>
                                </ul>
                            </div>

                            {/* Quick Link */}
                            <div className="space-y-8 lg:px-4">
                                <h4 className="text-2xl font-bold text-white">Quick Links</h4>
                                <ul className="space-y-4 text-white/60 text-base font-medium">
                                    <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                                    <li><Link to="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
                                    <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
                                    <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
                                    <li><Link to="/products" className="hover:text-white transition-colors">Support</Link></li>
                                </ul>
                            </div>

                            {/* Contact Us */}
                            <div className="col-span-2 lg:col-span-1 space-y-8">
                                <h4 className="text-2xl font-bold text-white">Contact Us</h4>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4 group cursor-pointer">
                                        <div className="w-12 h-12 shrink-0 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#053131] transition-all">
                                            <FaEnvelope className="text-xl" />
                                        </div>
                                        <div className="pt-1">
                                            <p className="text-xs font-bold text-white mb-0.5">Email:</p>
                                            <p className="text-sm text-white/70">info@smartguard.com</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 group cursor-pointer">
                                        <div className="w-12 h-12 shrink-0 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#053131] transition-all">
                                            <FaMapMarkerAlt className="text-xl" />
                                        </div>
                                        <div className="pt-1">
                                            <p className="text-xs font-bold text-white mb-0.5">Location:</p>
                                            <p className="text-sm text-white/70">123 Medical Plaza, Health District, New York, NY 10001</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 group cursor-pointer">
                                        <div className="w-12 h-12 shrink-0 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#053131] transition-all">
                                            <FaPhoneAlt className="text-xl" />
                                        </div>
                                        <div className="pt-1">
                                            <p className="text-xs font-bold text-white mb-0.5">Contact:</p>
                                            <p className="text-sm text-white/70">+1 (800) 123-4567</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Middle: Line with Social Icons */}
                        <div className="relative sm:mb-12 mb-5">
                            <div className="h-px bg-white/10 w-full"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4 bg-[#053131] px-6">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#053131] transition-all cursor-pointer">
                                    <FaFacebookF className="text-lg" />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#053131] transition-all cursor-pointer">
                                    <FaTwitter className="text-xl" />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#053131] transition-all cursor-pointer">
                                    <FaLinkedinIn className="text-xl" />
                                </div>
                            </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4 text-sm">
                            <p className="text-white/50 text-sm sm:text-base">© {new Date().getFullYear()} SmartGuard Innovations. All rights reserved.</p>

                            <div className="flex gap-10 items-center text-white/70">
                                <Link to="/products" className="hover:text-white transition-colors">Privacy Policy</Link>
                                <Link to="/products" className="hover:text-white transition-colors">Terms and conditions</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
