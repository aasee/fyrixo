import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-700 to-purple-900 bg-clip-text text-transparent">
                Fyrixo
              </span>
              <span className="text-sm text-[#3B95B0] font-medium -mt-1">
                Smart and Seamless
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-rose-700 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 rounded-md bg-gradient-to-r from-rose-700 to-purple-900 text-white hover:opacity-90 transition-opacity"
            >
              Contact Us
            </button>
          </div>
          
          <div className="md:hidden">
            <button className="p-2">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;