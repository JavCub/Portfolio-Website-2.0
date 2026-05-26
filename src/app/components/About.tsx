import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import cubSilhouette from '../../assets/Cub.png';

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-[70vh] flex items-center py-20 overflow-hidden"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-5xl md:text-7xl font-light mb-8"
              style={{ color: '#0259DD' }}
            >
              About Me
            </motion.h2>

            <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#14234B' }}>
              <p>
                Hello! I'm Javier, and I've always seen myself as a{' '}
                <span className="font-semibold" style={{ color: '#0259DD' }}>
                  Cub
                </span>
                : an aspiring leader with a hunger for growth and excellence.
              </p>

              <p>
                My duality palette is a deliberate nod to my hybrid background in{' '}
                <span className="font-semibold" style={{ color: '#0259DD' }}>
                  Data Science
                </span>{' '}
                and{' '}
                <span className="font-semibold" style={{ color: '#FF6648' }}>
                  Interactive Media
                </span>
                . This high-contrast balance grounds my identity in the synergy of
                analytical precision and creative design.
              </p>

              <p>
                By leveraging my background in Data Science, Economics, and Design, I
                specialise in identifying market opportunities and architecting
                data-driven solutions across the tech, fintech, and e-commerce sectors.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center -mt-16 md:mt-0"
          >
            <motion.img
              src={cubSilhouette}
              alt="Cub Silhouette"
              className="h-85 md:h-[32rem] w-auto object-contain scale-270 -translate-x-72 md:scale-250 md:-translate-x-84"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
