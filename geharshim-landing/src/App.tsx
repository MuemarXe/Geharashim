import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import background from './assets/background3.jpeg'; // Make sure path matches

const App: React.FC = () => {
  return (
    <div
      className="bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="bg-black bg-opacity-60">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
