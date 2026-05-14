import { Code2, Heart, ArrowUp } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-darker border-t border-white/5 pt-20 pb-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
                <Code2 size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">Himanshu<span className="text-primary">.dev</span></span>
            </a>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-8">
              Building the future of software with Java, Android, and Full-Stack technologies. Based in Rajkot, India.
            </p>
            <div className="flex gap-4">
              {portfolioData.personalInfo.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 glass-card flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all border-white/5"
                  title={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-slate-400 hover:text-primary transition-colors">About Me</a></li>
              <li><a href="#skills" className="text-slate-400 hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="relative">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Subscribe for latest updates.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-primary text-white text-sm"
              />
              <button className="p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                Go
              </button>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="absolute -bottom-12 right-0 md:-right-8 p-4 bg-white/5 hover:bg-primary text-white rounded-full transition-all group"
            >
              <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Himanshu Jayswal. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Himanshu Jayswal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
