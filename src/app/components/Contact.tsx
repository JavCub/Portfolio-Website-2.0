import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Mail, Globe, Linkedin, Github, Instagram } from 'lucide-react';
import logoPng from '../../assets/Logo.png'; 

const TiktokIcon = ({ size = 24, style }: { size?: number; style?: React.CSSProperties }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    style={style}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'javier.chin2002@gmail.com',
      link: 'mailto:javier.chin2002@gmail.com',
      color: '#0259DD',
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'Basically this website',
      link: 'https://javier-cub-chin.vercel.app/',
      color: '#FF6648',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/javierchin2002/',
      color: '#0259DD',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my work',
      link: 'https://github.com/JavCub',
      color: '#FF6648',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@jav.cub',
      link: 'https://instagram.com/jav.cub', 
      color: '#0259DD',
    },
    {
      icon: TiktokIcon,
      label: 'TikTok',
      value: '@jav.cub',
      link: 'https://www.tiktok.com/@jav.cub?_r=1', 
      color: '#FF6648',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
      style={{ backgroundColor: '#14234B' }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: '#0259DD' }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: '#FF6648' }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl md:text-7xl font-light mb-8 text-center"
          style={{ color: '#EDF1F5' }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-xl text-center mb-16 max-w-2xl mx-auto"
          style={{ color: '#EDF1F5', opacity: 0.8 }}
        >
          I'm always open to discussing new opportunities, collaborations, or just
          having a chat about anything and everything in the world.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex items-center gap-4 group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: method.color }}
              >
                <method.icon size={24} style={{ color: '#ffffff' }} />
              </motion.div>

              <div className="flex-grow">
                <h3 className="font-medium mb-1" style={{ color: '#EDF1F5' }}>
                  {method.label}
                </h3>
                <p className="text-sm" style={{ color: method.color }}>
                  {method.value}
                </p>
              </div>

              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                style={{ color: method.color }}
              >
                →
              </motion.div>
            </motion.a>
          ))}
        </div>

        {/* Animated logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <motion.img
            src={logoPng}
            alt="Javier Chin Logo"
            className="h-32 w-auto mx-auto scale-[3.5]"
            whileHover={{ scale: 1.1 }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              y: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.6 } : {}}
            transition={{ delay: 1 }}
            className="mt-8 text-sm"
            style={{ color: '#EDF1F5' }}
          >
            © 2026 Javier Chin. Designed with data & creativity...and Figma Make and Gemini.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
