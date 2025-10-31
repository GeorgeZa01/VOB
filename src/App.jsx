import React from 'react';
// Import the constants
import { COLORS } from './constants/colors'; 

// Import all section components
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import GlorySection from './components/sections/GlorySection';
import NewsSection from './components/sections/NewsSection';
import TeamsSection from './components/sections/TeamsSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';

// Main App Component
const App = () => {
  return (
    // Set the global font and primary text color
    <div className={`font-sans text-[${COLORS.primaryDark}]`}>
      
      <Header />

      <main>
        <Hero />
        <GlorySection />
        <NewsSection />
        <TeamsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;