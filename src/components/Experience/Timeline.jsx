import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionWrapper from '../Common/SectionWrapper';

const Timeline = () => {
  return (
    <SectionWrapper id="experience">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Experience Section */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-primary/10 text-primary rounded-2xl">
              <Briefcase size={32} />
            </div>
            <h2 className="text-3xl font-bold">Work <span className="text-gradient">Experience</span></h2>
          </div>

          <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
            {portfolioData.experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="pl-12 relative"
              >
                <div className="absolute left-0 top-1 w-10 h-10 bg-dark-darker border-2 border-primary rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                </div>
                
                <div className="glass-card p-6 border-white/5 hover:border-primary/20 transition-all">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-xs text-slate-400 font-medium">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex gap-3 text-slate-400 text-sm">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-secondary/10 text-secondary rounded-2xl">
              <GraduationCap size={32} />
            </div>
            <h2 className="text-3xl font-bold">Education <span className="text-gradient">Journey</span></h2>
          </div>

          <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
            {portfolioData.education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="pl-12 relative"
              >
                <div className="absolute left-0 top-1 w-10 h-10 bg-dark-darker border-2 border-secondary rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                </div>
                
                <div className="glass-card p-6 border-white/5 hover:border-secondary/20 transition-all">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-secondary font-medium">{edu.institution}</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-xs text-slate-400 font-medium">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Timeline;
