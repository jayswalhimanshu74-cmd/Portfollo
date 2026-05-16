import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const About = () => {
  const { personalInfo } = portfolioData;

  return (
    <section className="py-section-gap px-gutter bg-surface-container-lowest" id="about">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-block px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase">
              ABOUT ME
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-on-surface">
              Architecting Digital <span className="text-primary">Ecosystems</span>
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              {personalInfo.about}
            </p>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personalInfo.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-6 rounded-2xl space-y-2 border-t-2 ${
                  index % 2 === 0 ? 'border-primary/30' : 'border-secondary/30'
                }`}
              >
                <h3 className={`text-3xl font-bold ${index % 2 === 0 ? 'text-primary' : 'text-secondary'}`}>
                  {stat.value}{stat.suffix}
                </h3>
                <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
