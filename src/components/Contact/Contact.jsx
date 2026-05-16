import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulating success
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      formRef.current.reset();
      setTimeout(() => setSuccess(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    { icon: 'mail', label: "Email", value: portfolioData.personalInfo.email, color: 'text-primary' },
    { icon: 'location_on', label: "Location", value: portfolioData.personalInfo.location, color: 'text-secondary' },
  ];

  return (
    <section className="py-section-gap px-gutter relative overflow-hidden" id="contact">
      <div className="hero-blob absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/5 rounded-full"></div>
      
      <div className="max-w-container-max mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold">Let's Build Something <span className="text-primary">Exceptional</span></h2>
            <p className="text-lg text-on-surface-variant">Ready to discuss your next big idea or just want to say hi? My inbox is always open.</p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full glass-card flex items-center justify-center ${item.color}`}>
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">{item.label}</p>
                    <p className="font-medium text-on-surface">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 rounded-[2.5rem]"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full bg-surface-container/50 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full bg-surface-container/50 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Subject</label>
                <input 
                  type="text" 
                  required
                  placeholder="Project Discussion"
                  className="w-full bg-surface-container/50 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Message</label>
                <textarea 
                  required
                  rows="4" 
                  placeholder="How can I help you?"
                  className="w-full bg-surface-container/50 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold uppercase tracking-widest glow-blue hover:opacity-90 transition-all flex justify-center items-center gap-2 disabled:opacity-50"
              >
                {loading ? 'Sending...' : success ? 'Message Sent!' : (
                  <>
                    Send Message <span className="material-symbols-outlined text-[18px]">send</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
