import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[10000] bg-dark-darker flex flex-col items-center justify-center"
    >
      <div className="relative">
        <motion.div
          animate={{
            rotate: [0, 360],
            borderRadius: ["20%", "50%", "20%"],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 bg-gradient-to-tr from-primary to-secondary opacity-20 blur-xl"
        />
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Code2 size={40} className="text-white" />
        </motion.div>
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="h-1 bg-gradient-to-r from-primary to-secondary mt-8 rounded-full overflow-hidden"
      >
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="h-full w-1/2 bg-white/20"
        />
      </motion.div>
      <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mt-4">Loading Experience</p>
    </motion.div>
  );
};

export default PageLoader;
