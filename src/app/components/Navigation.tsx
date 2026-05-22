import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import logoPng from '../../assets/Logo.png';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-center md:justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('hero')}
          className="
            cursor-pointer flex items-center 
            
            {/* 📱 MOBILE NUDGE (Unprefixed) */}
            translate-x-[5px] 
            translate-y-[0px] 
            
            {/* 💻 DESKTOP NUDGE (md: prefixed) */}
            md:-translate-x-[80px] 
            md:-translate-y-[5px]
          "
        >
          <img
            src={logoPng}
            alt="Javier Chin Logo"
            className="h-20 w-auto block object-contain scale-[3] origin-center md:origin-left" 
          />
        </motion.div>

        <div className="hidden md:flex gap-8 items-center">
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