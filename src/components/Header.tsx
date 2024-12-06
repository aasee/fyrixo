import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={import.meta.env.BASE_URL + 'logo.png'} alt="Fyrixo Logo" className="h-16 w-auto" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-700 to-purple-900 bg-clip-text text-transparent">
                Fyrixo
              </span>
              <span className="text-sm text-[#3B95B0]">Smart and Seamless</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-[#3B95B0] hover:text-[#9E0059] transition-colors"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-[#3B95B0] hover:text-[#9E0059] transition-colors"
            >
              Features
            </a>
            <a
              href="#mission"
              className="text-[#3B95B0] hover:text-[#9E0059] transition-colors"
            >
              Mission
            </a>
            <a
              href="#testimonials"
              className="text-[#3B95B0] hover:text-[#9E0059] transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-[#9E0059] to-[#3B95B0] text-white rounded-lg hover:opacity-90 transition-all"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#9E0059]" />
            ) : (
              <Menu className="w-6 h-6 text-[#9E0059]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <nav className="flex flex-col py-2">
              <a
                href="#"
                className="px-4 py-3 text-gray-800 hover:bg-rose-50 hover:text-[#9E0059] transition-all font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#features"
                className="px-4 py-3 text-gray-800 hover:bg-rose-50 hover:text-[#9E0059] transition-all font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#mission"
                className="px-4 py-3 text-gray-800 hover:bg-rose-50 hover:text-[#9E0059] transition-all font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Mission
              </a>
              <a
                href="#testimonials"
                className="px-4 py-3 text-gray-800 hover:bg-rose-50 hover:text-[#9E0059] transition-all font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="mx-4 my-2 px-4 py-3 text-white bg-gradient-to-r from-[#9E0059] to-[#3B95B0] rounded-lg hover:opacity-90 transition-all text-center font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
