import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionWrapper from '../Common/SectionWrapper';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Note: User needs to replace these with their own EmailJS credentials
    // emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', formRef.current, 'PUBLIC_KEY')
    
    // Simulating success for demonstration
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      formRef.current.reset();
      setTimeout(() => setSuccess(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: portfolioData.personalInfo.email, href: `mailto:${portfolioData.personalInfo.email}` },
    { icon: MapPin, label: "Location", value: portfolioData.personalInfo.location, href: "#" },
    { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX", href: "tel:+910000000000" },
  ];

  return (
    <SectionWrapper id="contact">
      <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
      
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Details */}
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's connect!</h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>

          <div className="space-y-4">
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 glass-card border-white/5 hover:border-primary/20 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <item.icon size={24} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">{item.label}</div>
                  <div className="text-white font-medium">{item.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="pt-8">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mb-4 text-center lg:text-left">Follow Me</h4>
            <div className="flex justify-center lg:justify-start gap-4">
              {portfolioData.personalInfo.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 glass-card flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all border-white/5"
                  title={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-card p-8 md:p-12 border-white/5 shadow-2xl relative overflow-hidden"
          >
            {/* Background flourish */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-3xl rounded-full" />
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400 ml-1">Your Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400 ml-1">Your Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                  success 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]'
                }`}
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : success ? (
                  "Message Sent Successfully!"
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
