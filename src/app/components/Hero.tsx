import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import pfpAvif from '../../assets/PFP.avif';
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
        {/* Animated Profile Picture Wrapper */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: 'spring',
            stiffness
