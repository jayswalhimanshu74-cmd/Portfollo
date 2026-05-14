import { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { portfolioData } from '../../data/portfolioData';
import { Download, ChevronRight, Code2, Smartphone } from 'lucide-react';

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const { personalInfo } = portfolioData;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#6366f1" },
            links: {
              color: "#6366f1",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 blur-[120px] rounded-full animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full animate-pulse-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-light text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for Opportunities
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">{personalInfo.name}</span>
          </h1>

          <div className="h-12 mb-8">
            <span className="text-2xl md:text-3xl font-medium text-slate-300">
              <Typewriter
                words={personalInfo.roles}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </div>

          <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
            {personalInfo.intro}
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="btn-primary flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
            <a href="#projects" className="btn-secondary flex items-center gap-2">
              View Projects
              <ChevronRight size={20} />
            </a>
          </div>

          <div className="flex gap-6 mt-12">
            {personalInfo.socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-slate-400 hover:text-white transition-colors"
                title={social.name}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          <div className="relative w-[400px] h-[400px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full animate-morph blur-sm opacity-50" />
            <div className="absolute inset-2 bg-dark-darker rounded-full animate-morph overflow-hidden border-4 border-white/10">
              {/* Profile image placeholder - use an Unsplash image */}
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                alt="Profile"
                className="w-full h-full object-cover scale-110"
              />
            </div>
            
            {/* Floating Icons */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 p-4 glass-card shadow-xl"
            >
              <Code2 className="text-primary" size={32} />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-12 -left-8 p-4 glass-card shadow-xl"
            >
              <Smartphone className="text-secondary" size={32} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-slate-500">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
