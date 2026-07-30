import React from 'react';
import Navbar from './components/Navbar';
import FooterDock from './components/FooterDock';
import Hero from './sections/Hero';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
      </main>
      <FooterDock />
    </div>
  );
}

export default App;