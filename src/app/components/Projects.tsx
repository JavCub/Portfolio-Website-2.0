import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ExternalLink } from 'lucide-react';
import logoSilhouette from '../../assets/Logo.svg';

export function Projects() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const projects = [
    {
      title: 'ITI244: Artificial Intelligence, Technology and Impact',
      description:
        'Utilized convolutional neural networks to conduct sentiment analysis on Airbus Tweets',
      tags: ['Python', 'TensorFlow', 'NLP'],
      color: '#0259DD',
      pdfLink: '/pdfs/IT1244 Team17 Report.pdf', 
    },
    {
      title: 'NST2062: Mind and Machine',
      description:
        'Trained TruthStormer and Vision Transformer to predict American Sign Language (ASL)',
      tags: ['Python', 'Computer Vision', 'Deep Learning'],
      color: '#FF6648',
      pdfLink: '', 
    },
    {
      title: 'NM3243: User Experience Design',
      description:
        'Designed a web-based interface with lo-fi prototypes for Scheduling and Video Conferencing System for Students',
      tags: ['Figma', 'UX', 'Prototyping'],
      color: '#0259DD',
      pdfLink: '/pdfs/TW1-03-Final.pdf', 
    },
    {
      title: 'NM3217: Principles of Visual Communication Design',
      description:
        'Created a comprehensive personal brand style guide featuring custom logo design, color palette, and visual system',
      tags: ['Illustrator', 'InDesign', 'Photoshop'],
      color: '#FF6648',
      pdfLink: '/pdfs/FP_W3_e1122301_JavierChin.pdf', 
    },
    {
      title: 'DSE3101: Practical Data Science for Economics',
      description:
        'Spearheaded the frontend design and deployment of a US GDP Nowcasting Dashboard with Streamlit',
      tags: ['UI', 'Python', 'Streamlit'],
      color: '#0259DD',
      pdfLink: '/pdfs/DSE3101 Group Project_ Technical documentation_gg(plot).pdf', 
    },
    {
      title: 'COSC3470 Deep Learning (GU)',
      description:
        'Explored advanced neural network architectures and diffusion models during my coursework at Georgetown University.',
      tags: ['Deep Learning', 'PyTorch', 'Neural Networks'], 
      color: '#FF6648', 
      pdfLink: '/pdfs/DL Group Project.pdf', 
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center py-20 overflow-hidden"
      style={{ backgroundColor: '#EDF1F5' }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <h2
          className="text-5xl md:text-7xl font-light mb-16 text-center"
          style={{ color: '#0259DD' }}
        >
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.pdfLink || '#'}
              target={project.pdfLink ? "_blank" : undefined} 
              rel={project.pdfLink ? "noopener noreferrer" : undefined} 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg cursor-pointer group relative overflow-hidden block"
            >
              {/* Animated background gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${project.color} 0%, transparent 100%)`,
                }}
              />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-medium pr-4" style={{ color: '#14234B' }}>
                    {project.title}
                  </h3>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="flex-shrink-0"
                  >
                    <ExternalLink size={24} style={{ color: project.color }} />
                  </motion.div>
                </div>

                <p className="mb-6 leading-relaxed" style={{ color: '#14234B' }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: project.color,
                        color: '#ffffff',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-20 h-20 opacity-20"
                style={{
                  background: `linear-gradient(135deg, transparent 50%, ${project.color} 50%)`,
                }}
              />
            </motion.a>
          ))}
        </div>

        {/* Optimized Footer Logo */}
        <div className="mt-28 text-center">
          <motion.img
            src={logoSilhouette} 
            alt="Logo Accent"
            className="h-32 w-auto mx-auto will-change-transform"
            initial={{ opacity: 0, scale: 3.5 }}
            animate={isInView ? { 
              opacity: 1,
              y: [0, -5, 0],
              rotate: [0, 4, -4, 0],
            } : {}}
            transition={{
              opacity: { delay: 0.8 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              rotate: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            }}
          />
        </div>
      </div>
    </section>
  );
}
