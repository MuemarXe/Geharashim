import React from 'react';
import logo from '../assets/react.svg';


const Header: React.FC = () => {
  return (
    <header className="bg-blue-900 text-white py-4 fixed w-full top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <nav className="w-full sm:w-auto">
          <ul className="flex flex-wrap space-x-6 sm:space-x-12">
            <li><a href="#home" className="hover:text-blue-300 transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-blue-300 transition-colors">Services</a></li>
            <li><a href="#about" className="hover:text-blue-300 transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-blue-300 transition-colors">Contact</a></li>
          </ul>
        </nav>
        <div className="flex items-center">
          <img src={logo} alt="Geharshim Engineering Logo" className="h-12 w-auto object-contain" />
        </div>
      </div>
    </header>
  );
};

export default Header;