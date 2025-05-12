import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Geharshim Engineering. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;