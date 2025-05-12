import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
        <div className="max-w-lg mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg mb-6 text-gray-700">Ready to start your next project? Reach out to us!</p>
            <p className="mb-4 text-gray-600"><strong>Email:</strong>ge.harashimgroup@gmail.com</p>
            <p className="mb-6 text-gray-600"><strong>Phone:</strong> +254 97335687</p>
            <form>
              <div className="mb-5">
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">Name</label>
                <input type="text" id="name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                <input type="email" id="email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">Message</label>
                <textarea id="message" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4}></textarea>
              </div>
              <button type="submit" className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;