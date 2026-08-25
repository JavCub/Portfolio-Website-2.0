import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ArrowRight, ArrowUp } from 'lucide-react';

export function Experience() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const experiences = [
    {
      title: 'OCBC',
      subtitle: 'Digital Business Intern',
      period: 'Aug 2026 - Present',
      description:
        'Contribute to end-to-end digital business lifecycle, from ideation and development to launch and adoption.',
      skills: ['Product Management', 'Jira'],
      isCurrent: true,
    },
    {
      title: 'DBS Bank',
      subtitle: 'Risk Management Intern',
      period: 'May 2026 - Aug 2026',
      description:
        'Monitor credit risk model performance across diverse markets, implementing robust validation pipelines to guarantee model integrity.',
      skills: ['Risk Analysis', 'SQL', 'Python'],
      isCurrent: false,
    },
    {
      title: 'Monee',
      subtitle: 'Regional Business Development Intern',
      period: 'Jan 2026 - Mar 2026',
      description:
        'Responsible for end-to-end business product management, optimising product portfolio and drive regional expansion',
      skills: ['SQL', 'Apps Script', 'GTM'],
      isCurrent: false,
    },
    {
      title: 'Sparkonomy',
      subtitle: 'Product Management Fellow',
      period: 'Jun 2025 - Sep 2025',
      description:
        'Produced a PRD for AI Business Opportunity Agent feature, conducted competitive analysis and GTM strategy outline',
      skills: ['Figma', 'Miro'],
      isCurrent: false,
    },
    {
      title: 'NTUC',
      subtitle: 'Operations & AI Intern',
      period: 'May 2025 - Aug 2025',
      description:
        'Automated Membership Services Division survey analysis process with transformer models and Streamlit Python',
      skills: ['Python', 'Power BI', 'Excel'],
      isCurrent: false,
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen py-20"
      style={{ backgroundColor: '#14234B' }}
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl md:text-7xl font-light mb-20 text-center"
          style={{ color: '#EDF1F5' }}
        >
          Experience
        </motion.h2>

        <div className="relative w-full">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.15 }}
                  className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full"
                >
                  {/* Main Experience Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="relative rounded-xl p-6 shadow-xl border-4 min-h-[180px] w-full md:flex-[2]"
                    style={{
                      backgroundColor: '#FF6648',
                      borderColor: exp.isCurrent ? '#EDF1F5' : '#FF6648',
                    }}
                  >
                    {/* Current Position Border Badge */}
                    {exp.isCurrent && (
                      <span
                        className="absolute -top-4 left-6 px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full border-2"
                        style={{
                          backgroundColor: '#14234B', 
                          color: '#EDF1F5',
                          borderColor: '#EDF1F5',
                        }}
                      >
                        Current Position
                      </span>
                    )}

                    <h3 className="text-xl font-semibold mb-1" style={{ color: '#14234B' }}>
                      {exp.title}
                    </h3>
                    <h4 className="text-base font-medium mb-2" style={{ color: '#14234B' }}>
                      {exp.subtitle}
                    </h4>
                    <p className="text-sm mb-3 italic" style={{ color: '#14234B', opacity: 0.8 }}>
                      {exp.period}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: '#14234B' }}>
                      {exp.description}
                    </p>
                  </motion.div>

                  {/* Desktop Only Connecting Arrow */}
                  <motion.div
                    className="hidden md:flex items-center justify-center w-12 flex-shrink-0"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                    transition={{ delay: 0.25 + index * 0.15 }}
                  >
                    <ArrowRight size={40} className="text-white opacity-80" />
                  </motion.div>

                  {/* Skills Section */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.15 }}
                    className="flex flex-nowrap justify-center gap-6 md:gap-10 w-full md:flex-1"
                  >
                    {exp.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.4 + index * 0.15 + skillIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center group flex-shrink-0"
                      >
                        <div 
                          className="absolute inset-0 rounded-xl shadow-lg transform rotate-45 transition-transform duration-300"
                          style={{ backgroundColor: '#0259DD' }}
                        />
                        
                        {/* Text Content */}
                        <div className="relative z-10 text-[10px] md:text-xs font-medium text-white flex items-center justify-center text-center p-1 md:p-2 leading-tight">
                          <span className="block">{skill}</span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {index < experiences.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
                    transition={{ delay: 0.35 + index * 0.15 }}
                    className="flex items-center justify-center my-4 md:my-6 origin-bottom"
                  >
                    <ArrowUp size={32} style={{ color: '#EDF1F5', opacity: 0.8 }} strokeWidth={3} />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
