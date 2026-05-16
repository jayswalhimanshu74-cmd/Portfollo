import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Common/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Timeline from './components/Experience/Timeline';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import PageLoader from './components/Common/PageLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  return (
    <div className="relative bg-background text-on-surface selection:bg-primary/30 selection:text-white transition-colors duration-300">
      <AnimatePresence>
        {isLoading && <PageLoader key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          
          <main>
            <Hero />
            <About />
            <Skills />
            <Timeline />
            <Education />
            <Projects />
            <Achievements />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
