import { motion } from 'framer-motion';
import { ExternalLink, Info } from 'lucide-react';
import { Github } from '../Common/BrandIcons';
import { portfolioData } from '../../data/portfolioData';
import SectionWrapper from '../Common/SectionWrapper';

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <div className="mb-16">
        <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
        <p className="text-center text-slate-400 max-w-2xl mx-auto -mt-12">
          A selection of my best work, ranging from full-stack web applications to Android apps and AI integrations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {portfolioData.projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative glass-card overflow-hidden border-white/5 hover:border-primary/30 transition-all duration-500 shadow-2xl"
          >
            {/* Image Container */}
            <div className="aspect-video overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-darker via-dark-darker/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* Hover Overlay Buttons */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-10 group-hover:translate-y-0">
                <a href={project.links.github} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors border border-white/10">
                  <Github size={24} />
                </a>
                <a href={project.links.live} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-secondary transition-colors border border-white/10">
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag) => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-primary/10 text-primary-light rounded-full border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex items-center justify-between">
                <button className="flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors group/btn">
                  View Details
                  <Info size={16} className="group-hover/btn:rotate-12 transition-transform" />
                </button>
                
                <div className="flex -space-x-2">
                  {/* Visual flourish for tech stack icons or status */}
                  <div className="w-8 h-8 rounded-full border-2 border-dark bg-primary flex items-center justify-center text-[10px] font-bold">
                    🚀
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-secondary"
        >
          Explore More on GitHub
        </motion.button>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
