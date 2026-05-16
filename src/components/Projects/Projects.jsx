import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const Projects = () => {
  return (
    <section className="py-section-gap px-gutter" id="projects">
      <div className="max-w-container-max mx-auto space-y-12">
        <div className="flex justify-between items-end">
          <h2 className="text-3xl md:text-5xl font-bold text-on-surface">Featured <span className="text-primary">Work</span></h2>
          <a href="#" className="text-primary text-sm font-bold flex items-center gap-2 hover:underline uppercase tracking-widest">
            View All Projects <span className="material-symbols-outlined text-[18px]">open_in_new</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] glass-card border-none"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={project.image} 
                  alt={project.title}
                />
              </div>
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.tech.slice(0, 2).map((tech, i) => (
                      <span key={i} className={`text-[10px] font-bold px-3 py-1 rounded-full border ${
                        i % 2 === 0 ? 'bg-primary/10 text-primary border-primary/20' : 'bg-secondary/10 text-secondary border-secondary/20'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">{project.description}</p>
                <button className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest group/btn transition-all">
                  Explore Project 
                  <span className="material-symbols-outlined group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform">north_east</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
