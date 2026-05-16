import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const Timeline = () => {
  return (
    <section className="py-section-gap px-gutter bg-surface-container-low" id="experience">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Professional <span className="text-primary">Readiness</span></h2>
          <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto">Bridging the gap between academic excellence and industry standards through intensive self-driven development and project leadership.</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent"></div>
          
          {portfolioData.experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-20 last:mb-0"
            >
              <div className="absolute left-[-8px] md:left-1/2 md:-ml-[8px] top-0 w-4 h-4 rounded-full bg-primary glow-blue"></div>
              <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right md:mr-auto' : 'md:pl-16 md:ml-auto'}`}>
                <div className="glass-card p-8 rounded-3xl group hover:glow-blue transition-all duration-300">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest">{exp.period}</span>
                  <h3 className="text-xl md:text-2xl font-bold mt-2">{exp.role}</h3>
                  <p className="text-secondary font-medium mb-4">{exp.company}</p>
                  <ul className={`text-sm text-on-surface-variant space-y-2 list-none ${index % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        {index % 2 !== 0 && <span className="text-primary">•</span>}
                        <span>{resp}</span>
                        {index % 2 === 0 && <span className="hidden md:inline text-primary">•</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
