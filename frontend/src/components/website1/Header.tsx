import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/website1' },
    { label: 'About Us', path: '/website1/about1' },
    { label: 'Products', path: '/website1/products1' },
    { label: 'Contact Us', path: '/website1/contact1' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/website1" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <div className="w-5 h-5 bg-primary rounded-sm transform rotate-45"></div>
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                'font-bold text-xl leading-none',
                isScrolled ? 'text-slate-800' : 'text-slate-800'
              )}
            >
              SmartGuard
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
              Nurse Call Systems
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-sm font-bold uppercase tracking-wide transition-colors hover:text-primary relative group py-2',
                location.pathname === item.path
                  ? 'text-primary'
                  : isScrolled
                  ? 'text-slate-600'
                  : 'text-slate-700'
              )}
            >
              {item.label}
              <span
                className={cn(
                  'absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100',
                  location.pathname === item.path ? 'scale-x-100' : ''
                )}
              ></span>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+18001234567"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>1-800-123-4567</span>
          </a>
          <Button className="font-bold uppercase tracking-wide rounded-full px-6">
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg p-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-base font-semibold py-2 border-b border-slate-50',
                location.pathname === item.path
                  ? 'text-primary'
                  : 'text-slate-600'
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button className="w-full mt-2 font-bold uppercase">
            Get a Quote
          </Button>
        </div>
      )}
    </header>
  );
}
