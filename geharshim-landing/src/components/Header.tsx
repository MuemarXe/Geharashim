
import logo from '../assets/react.svg';
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-blue-900 py-4 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Geharshim Engineering Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:block">
          <ul className="flex space-x-8 font-semibold">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#services" className="hover:text-blue-500">Services</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-blue-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-4">
          <ul className="space-y-4 font-semibold">
            <li><a href="#home" className="block text-blue-900 hover:text-blue-500">Home</a></li>
            <li><a href="#services" className="block text-blue-900 hover:text-blue-500">Services</a></li>
            <li><a href="#about" className="block text-blue-900 hover:text-blue-500">About</a></li>
            <li><a href="#contact" className="block text-blue-900 hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
