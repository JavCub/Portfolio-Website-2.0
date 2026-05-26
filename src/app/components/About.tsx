import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import cubSilhouette from '../../assets/Cub.svg'; 

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
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-5xl md:text-7xl font-light mb-8"
              style={{ color: '#0259DD' }}
            >
              About Me
            </h2>

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

          {/* Right Image Column */}
          <div className="relative flex justify-center items-center -mt-16 md:mt-0">
            <motion.img
              src={cubSilhouette}
              alt="Cub Silhouette"
              className="h-[16rem] md:h-[32rem] w-auto object-contain will-change-transform drop-shadow-xl"
              initial={{ 
                opacity: 0, 
                scale: 0.9,
              }}
              animate={isInView ? { 
                opacity: 1,
                scale: 1,
                y: [0, -15, 0], 
                rotate: [0, 2, -2, 0]
              } : {}}
              transition={{
                opacity: { duration: 0.8, delay: 0.2 },
                scale: { duration: 0.8, delay: 0.2 },
                y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
