import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import logoPng from '../../assets/Logo.png';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // 1. Handle the background blur threshold
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // 2. The Optimized Intersection Observer for active sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Triggers when a section hits the vertical middle of the screen
        rootMargin: '-50% 0px -50% 0px' 
      }
    );

    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {/* Centered on mobile, spread out on desktop */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-center md:justify-between items-center">
        
        {/* LOGO WRAPPER */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('hero')}
          className="
            cursor-pointer flex items-center 
            
            {/* 📱 MOBILE NUDGE */}
            translate-x-[0px] 
            translate-y-[0px] 
            
            {/* 💻 DESKTOP NUDGE */}
            md:translate-x-[20px] 
            md:-translate-y-[5px]
          "
        >
          <img
            src={logoPng}
            alt="Javier Chin Logo"
            className="h-20 w-auto block object-contain scale-[3] origin-center md:origin-left" 
          />
        </motion.div>

        {/* NAV LINKS WRAPPER */}
        <div className="
          hidden md:flex gap-8 items-center 
          
          {/* 💻 DESKTOP NUDGE */}
          md:-translate-x-[40px] 
          md:translate-y-[10px]
        ">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative px-3 py-2 transition-colors flex items-center"
              style={{
                color: activeSection === item.id ? '#0259DD' : '#14234B',
              }}
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: '#FF6648' }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
