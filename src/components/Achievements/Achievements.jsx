import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import SectionWrapper from '../Common/SectionWrapper';

const Achievements = () => {
  return (
    <SectionWrapper id="achievements">
      <h2 className="section-title">Milestones & <span className="text-gradient">Achievements</span></h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioData.achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 text-center glass-card-hover group border-white/5"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg">
              <item.icon size={32} />
            </div>
            <h3 className="text-lg font-bold text-white leading-snug group-hover:text-primary transition-colors">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
