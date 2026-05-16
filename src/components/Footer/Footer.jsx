const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest w-full py-12 px-gutter border-t border-white/5 shadow-none transition-opacity duration-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-container-max mx-auto">
        <div className="text-center md:text-left">
          <div className="text-2xl font-bold text-primary mb-2">HJ</div>
          <p className="text-sm text-on-surface-variant">© {new Date().getFullYear()} Himanshu Jayswal. Crafted with precision.</p>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">Terms of Service</a>
        </div>
        
        <div className="flex gap-6">
          <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-80 transition-opacity">alternate_email</span>
          <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-80 transition-opacity">language</span>
          <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-80 transition-opacity">share</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
