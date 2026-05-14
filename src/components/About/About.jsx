import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import SectionWrapper from '../Common/SectionWrapper';

const About = () => {
  const { personalInfo } = portfolioData;

  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Building Digital Experiences <br />
            <span className="text-gradient">With Passion</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            {personalInfo.about}
          </p>

          <div className="grid grid-cols-2 gap-6">
            {personalInfo.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 border-white/5 hover:border-primary/20 transition-colors"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2 relative">
          <div className="aspect-square rounded-3xl overflow-hidden glass-card p-3 border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop" 
              alt="Workspace"
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 blur-3xl rounded-full" />
        </div>
      </div>
    </SectionWrapper>
  );
};

const Counter = ({ value, suffix = "" }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {value}{suffix}
    </motion.span>
  );
};

export default About;
