import { Menu } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";
import logo from "../assets/logo.png";
const Navbar = ({ scrolled }) => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-grey-500 backdrop-blur-lg border-b border-slate-800"
          : "bg-grey-500 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
         <div className="flex items-center space-x-0 group cursor-pointer">
            <div>
             <img
  src={logo}
  alt="parabola logo"
  className="w-18 h-18 sm:w-18 sm:h-18 object-contain"
/>
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-white">Para</span>
              <span className="text-blue-400">Bola</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
             <a
              href="#"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Home
            </a>
             <a
              href="#About-us"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              About Us
            </a>
            <a
              href="#features"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
             Services
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Testimonials
            </a>
            <a
              href="#Get-started"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Careers
            </a>
          </div>
          <button
            className="md:hidden items-center p-2 text-gray-300 hover-text-white"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>
      {mobileMenuIsOpen && (
        <div
          className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t 
        border-slate-800 animate-in slide-in-form-top duration-300 "
        >
          <div className="px-4 py-4 sm:py-6 space-y-4">
            <a
              href="#features"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Services
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Testimonials
            </a>
            <a
              href="#About-us"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              About Us
            </a>
              <a
              href="#Get-started"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Careers
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
