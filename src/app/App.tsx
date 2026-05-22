import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { BusinessCard } from './components/BCard'; 

export default function App() {
  const [showCard, setShowCard] = useState(true);

  return (
    <div className="relative bg-[#EDF1F5] min-h-screen">
      
      {/* 1. THE BUSINESS CARD OVERLAY */}
      <AnimatePresence>
        {showCard && (
          <BusinessCard key="business-card" onEnter={() => setShowCard(false)} />
        )}
      </AnimatePresence>

      {/* 2. THE MAIN LANDING PAGE */}
      <div 
        className={`transition-opacity duration-1000 ${
          showCard ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'
        }`}
      >
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>

    </div>
  );
}
