import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import pfpPng from '../../assets/PFP.png';

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: '#EDF1F5' }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: '#0259DD' }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: '#FF6648' }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Animated Profile Picture */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          className="mb-8 mt-32 inline-block"
        >
          <motion.img
            src={pfpPng}
            alt="Javier Chin Profile Picture"
            className="h-64 w-64 rounded-full object-cover shadow-2xl" 
            whileHover={{ scale: 1.05 }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              y: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-6xl md:text-8xl font-light mb-6"
          style={{ color: '#14234B' }}
        >
          Javier Chin
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          style={{ color: '#0259DD' }}
        >
          Data Science × Creative Design
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          style={{ color: '#14234B' }}
        >
          Data Science and Economics @ NUS | Aspiring Product Manager | Love-hate Relationship with Marathons | Ultimate Frisbee and Floorball Enthusiasts. 
        </motion.p>

        {/* CHANGED: Wrapped both buttons in a flex container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          // flex-col stacks them on mobile, sm:flex-row puts them side-by-side on desktop
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full text-white text-lg font-medium transition-all hover:shadow-xl w-full sm:w-auto"
            style={{ backgroundColor: '#0259DD' }}
          >
            Get in Touch
          </motion.button>

          <motion.a
            href="/Javier_Chin_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-xl border-2 w-full sm:w-auto block"
            style={{ borderColor: '#0259DD', color: '#0259DD' }}
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={32} style={{ color: '#0259DD' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}