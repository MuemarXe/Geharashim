import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-200 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About Us</h2>
        <p className="text-lg text-center max-w-3xl mx-auto text-gray-700">
          Geharshim Engineering is a dynamic consultancy specializing in robotics and R&D. Our team of experienced engineers is dedicated to pushing the boundaries of technology, helping startups and established companies bring innovative solutions to life.
        </p>
      </div>
    </section>
  );
};

export default About;