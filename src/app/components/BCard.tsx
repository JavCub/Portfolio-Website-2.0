import { motion } from 'motion/react';
import businessCardPng from '../../assets/Biz Card (Front).png'; 

interface BusinessCardProps {
  onEnter: () => void;
}

export function BusinessCard({ onEnter }: BusinessCardProps) {
  return (
    <motion.div
      // This makes the background smoothly fade away when clicked
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#EDF1F5] cursor-pointer"
      onClick={onEnter}
    >
      <motion.div
        // 3D Entrance animation
        initial={{ opacity: 0, y: 50, rotateX: 20 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
        // Interactive hover/click physics
        whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
        whileTap={{ scale: 0.95 }}
        className="relative group shadow-2xl rounded-xl"
        style={{ perspective: 1000 }} 
      >
        <img
          src={businessCardPng}
          alt="Javier Chin Business Card"
          // Automatically scales on mobile, max width on desktop
          className="w-[90vw] max-w-[600px] h-auto object-contain rounded-xl shadow-2xl"
        />
        
        {/* Subtle pulsing hint text below the card */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute -bottom-16 left-0 right-0 text-center text-[#14234B] text-sm tracking-widest uppercase font-medium animate-pulse"
        >
          Click to enter
        </motion.p>
      </motion.div>
    </motion.div>
  );
}