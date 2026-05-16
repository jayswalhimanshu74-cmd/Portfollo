import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { portfolioData } from '../../data/portfolioData';

const Hero = () => {
  const { personalInfo } = portfolioData;

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden px-gutter" id="home">
      {/* Background Blurs */}
      <div className="hero-blob absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full"></div>
      <div className="hero-blob absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary/10 rounded-full"></div>
      
      <div className="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-[64px] font-extrabold leading-[1.1] text-on-surface tracking-tight">
              {personalInfo.name.split(' ')[0]} <span className="text-primary">{personalInfo.name.split(' ')[1]}</span>
            </h1>
            <div className="h-8 overflow-hidden">
              <p className="text-xl md:text-2xl font-semibold text-secondary">
                <Typewriter
                  words={personalInfo.roles}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </p>
            </div>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              {personalInfo.intro}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-semibold glow-blue flex items-center gap-2 hover:opacity-90 transition-all">
              View Projects <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="glass-card text-primary border border-primary/20 px-8 py-4 rounded-xl font-semibold hover:bg-primary/10 transition-all">
              Contact Me
            </button>
          </div>

          <div className="flex gap-6 text-on-surface-variant">
            {personalInfo.socials.slice(0, 3).map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors text-2xl"
                title={social.name}
              >
                {social.name === 'GitHub' ? 'terminal' : social.name === 'LinkedIn' ? 'public' : 'code'}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full glass-card flex items-center justify-center p-8 border-2 border-primary/30 glow-blue">
            <div className="w-full h-full rounded-full overflow-hidden bg-surface-container">
              <img 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe9B6FFxyFc2cTTDSBktL7BJxlj-tdS6LNVxqNzI3bX4o33G-Rb1ZWlTRsNqp13ONoqWOhp-cKNrbghVFxddgKNe7_g2eg1KLBn1cLzYMDmg-06QLSq43jQ-3Hhl0YwWCWNHJgEOqwVd5d9hc514M_jIOm_pMDL35GOIG009nwOXSmEfeP3j3pK_1UO4kmW3jkwbw7mawoImOf3OPyH5Zl0URzzJP6se6c8skMOfEhrA6ZUH0T0_YyNHJZVB7UXZojtUBEc57GBGI" 
                alt={personalInfo.name}
              />
            </div>
            
            {/* Floating Icons */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 glass-card p-3 rounded-xl glow-blue"
            >
              <span className="material-symbols-outlined text-primary">javascript</span>
            </motion.div>
            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/4 -right-8 glass-card p-3 rounded-xl glow-purple"
            >
              <span className="material-symbols-outlined text-secondary">android</span>
            </motion.div>
            <motion.div 
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-1/4 -left-8 glass-card p-3 rounded-xl glow-blue"
            >
              <span className="material-symbols-outlined text-primary">database</span>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card p-3 rounded-xl glow-purple"
            >
              <span className="material-symbols-outlined text-secondary">cloud</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
