import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b ${
        isScrolled 
          ? 'bg-surface/70 backdrop-blur-xl border-outline/10 py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="flex justify-between items-center px-gutter max-w-container-max mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-primary"
        >
          HJ
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleDarkMode}
            className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform p-2 rounded-full hover:bg-primary/10"
          >
            {isDarkMode ? 'light_mode' : 'dark_mode'}
          </button>
          <button className="hidden sm:block bg-primary text-on-primary px-6 py-2 rounded-full text-sm font-semibold glow-blue hover:opacity-90 transition-all">
            Resume
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden material-symbols-outlined text-on-surface"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? 'close' : 'menu'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-surface-container/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-on-surface-variant hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-primary text-on-primary py-3 rounded-xl font-semibold mt-2">
              Resume
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
