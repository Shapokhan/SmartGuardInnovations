import { Mail, Phone, MapPin, Facebook, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#053131] pt-20 pb-10 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="text-5xl font-black tracking-tighter text-white">LOGO</div>
                        <p className="text-white/70 leading-relaxed text-sm max-w-xs">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                    {/* Healthcare */}
                    <div className="space-y-6 lg:ml-12">
                        <h4 className="text-xl font-bold text-white">Healthcare</h4>
                        <ul className="space-y-3 text-white/70 text-sm font-medium">
                            <li><a href="#" className="hover:text-[#0C6E6D] transition-colors">Lorem Ipsum</a></li>
                            <li><a href="#" className="hover:text-[#0C6E6D] transition-colors">Lorem Ipsum</a></li>
                            <li><a href="#" className="hover:text-[#0C6E6D] transition-colors">Lorem Ipsum</a></li>
                            <li><a href="#" className="hover:text-[#0C6E6D] transition-colors">Lorem Ipsum</a></li>
                        </ul>
                    </div>

                    {/* Quick Link */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-bold text-white">Quick Link</h4>
                        <ul className="space-y-3 text-white/70 text-sm font-medium">
                            <li><a href="#" className="hover:text-[#0C6E6D] transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-[#0C6E6D] transition-colors">Product</a></li>
                            <li><a href="#" className="hover:text-[#0C6E6D] transition-colors">Service</a></li>
                            <li><a href="#" className="hover:text-[#0C6E6D] transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-bold text-white">Contact Us</h4>
                        <ul className="space-y-4 text-white/70 text-sm font-medium">
                            <li className="flex items-center gap-3 group cursor-pointer">
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#0C6E6D] transition-colors">
                                    <Mail className="w-4 h-4 text-white" />
                                </div>
                                <span className="group-hover:text-white transition-colors">Email: info@domainname.com</span>
                            </li>
                            <li className="flex items-start gap-3 group cursor-pointer">
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#0C6E6D] transition-colors">
                                    <MapPin className="w-4 h-4 text-white" />
                                </div>
                                <span className="group-hover:text-white transition-colors">Location: 123 Business Street, NY</span>
                            </li>
                            <li className="flex items-center gap-3 group cursor-pointer">
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#0C6E6D] transition-colors">
                                    <Phone className="w-4 h-4 text-white" />
                                </div>
                                <span className="group-hover:text-white transition-colors">Contact: +123 (456) 789</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/50">
                    <div className="flex gap-4 order-2 md:order-1">
                         <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0C6E6D] hover:text-white text-white/50 transition-all cursor-pointer">
                            <Facebook className="w-4 h-4" />
                         </div>
                         <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#7AFFC7] hover:text-[#053131] text-white/50 transition-all cursor-pointer">
                            <Instagram className="w-4 h-4" />
                         </div>
                         <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-500 hover:text-white text-white/50 transition-all cursor-pointer">
                            <Youtube className="w-4 h-4" />
                         </div>
                    </div>
                    
                    <p className="order-1 md:order-2">Lorem Ipsum is simply dummy text of the printing</p>
                    
                    <div className="flex gap-6 order-3">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms and conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
