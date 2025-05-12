import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Robotics Development</h3>
            <p className="text-gray-600">Design and development of advanced robotic systems tailored to your industry needs.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">R&D Consulting</h3>
            <p className="text-gray-600">Expert guidance on research and development to accelerate innovation and product development.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Prototyping & Testing</h3>
            <p className="text-gray-600">Rapid prototyping and rigorous testing to ensure your solutions are market-ready.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;