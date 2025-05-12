import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-blue-800 text-white py-32 pt-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">The Valley of Experts </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Your trusted partner in R&D and robotics consultancy, delivering cutting-edge solutions for tomorrow's challenges.</p>
        <a href="#contact" className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-600 transition-colors">
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;