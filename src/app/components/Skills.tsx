import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import cubSilhouette from '../../assets/Cub.png';

export function Skills() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const technicalSkills = [
    { name: 'Python', level: 90 },
    { name: 'R Programming', level: 85 },
    { name: 'Java', level: 70 },
    { name: 'SQL', level: 90 },
  ];

  const designSkills = [
    { name: 'Figma', level: 80 },
    { name: 'UX Design', level: 95 },
    { name: 'Adobe Illustrator', level: 85 },
    { name: 'Adobe InDesign', level: 70 },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen flex items-center py-20 overflow-hidden relative"
      style={{ backgroundColor: '#EDF1F5' }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl md:text-7xl font-light mb-12 md:mb-20 text-center md:text-left"
          style={{ color: '#14234B' }}
        >
          Skills
        </motion.h2>

        <div className="relative grid grid-cols-1 md:grid-cols-3 items-center gap-12 lg:gap-8 w-full">
          
          {/* Left Side - Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="w-full space-y-8 md:space-y-10 flex flex-col justify-center relative z-20"
          >
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="w-full"
              >
                <div className="text-xl font-medium mb-2 text-left" style={{ color: '#14234B' }}>
                  {skill.name}
                </div>
                <div className="relative flex items-center w-full">
                  <div className="w-full h-6 bg-white rounded-full overflow-hidden border-2 border-[#14234B] relative z-10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      className="h-full rounded-full absolute left-0 top-0"
                      style={{ backgroundColor: '#0259DD' }}
                    />
                  </div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="hidden md:block absolute left-full w-8 md:w-16 lg:w-[200px] xl:w-[220px] h-[2px] origin-left"
                    style={{ backgroundColor: '#14234B' }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Center - Placeholder to keep the grid columns separated on desktop */}
          <div className="hidden md:block w-full h-full pointer-events-none"></div>

          {/* Center - Cub Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="relative mx-auto my-8 md:my-0 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-30 flex justify-center items-center pointer-events-none w-full max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
          >
            <img
              src={cubSilhouette}
              alt="Cub Silhouette"
              className="w-full h-auto object-contain scale-400 lg:scale-[4.2] -translate-x-60 -translate-y-10 lg:-translate-x-[510px] lg:-translate-y-[95px]"
            />
          </motion.div>

          {/* Right Side - Design Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="w-full space-y-8 md:space-y-10 flex flex-col justify-center relative z-20"
          >
            {designSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="w-full"
              >
                <div className="text-xl font-medium mb-2 text-right" style={{ color: '#14234B' }}>
                  {skill.name}
                </div>
                <div className="relative flex items-center w-full">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="hidden md:block absolute right-full w-8 md:w-16 lg:w-[150px] xl:w-[220px] h-[2px] origin-right"
                    style={{ backgroundColor: '#14234B' }}
                  />
                  <div className="w-full h-6 bg-white rounded-full overflow-hidden border-2 border-[#14234B] relative z-10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      className="absolute right-0 top-0 h-full rounded-full"
                      style={{ backgroundColor: '#FF6648' }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}