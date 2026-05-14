import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Common/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Timeline from './components/Experience/Timeline';
import Projects from './components/Projects/Projects';
import Achievements from './components/Achievements/Achievements';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CustomCursor from './components/Common/CustomCursor';
import PageLoader from './components/Common/PageLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {isLoading && <PageLoader key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <div id="scroll-progress" style={{ width: `${scrollProgress}%` }} />
          <CustomCursor />
          <Navbar />
          
          <main>
            <Hero />
            <About />
            <Skills />
            {/* <Timeline /> */}
            <Projects />
            {/* <Achievements /> */}
            <Resume />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
