import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import SectionWrapper from '../Common/SectionWrapper';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(portfolioData.skills[0].category);

  return (
    <SectionWrapper id="skills">
      <h2 className="section-title">Technical <span className="text-gradient">Proficiency</span></h2>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {portfolioData.skills.map((cat) => (
          <button
            key={cat.category}
            onClick={() => setActiveCategory(cat.category)}
            className={`px-6 py-2 rounded-full border transition-all duration-300 ${
              activeCategory === cat.category 
                ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]' 
                : 'border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {portfolioData.skills
            .find(c => c.category === activeCategory)
            ?.items.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-card p-6 glass-card-hover group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-xl group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      <skill.icon size={24} />
                    </div>
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                  </div>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                  />
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
