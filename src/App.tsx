/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Rocket, 
  Target, 
  Zap, 
  Users, 
  BarChart3, 
  Globe, 
  Palette, 
  Megaphone, 
  Search, 
  Mail, 
  Phone, 
  Instagram, 
  Linkedin, 
  Twitter,
  Menu,
  X,
  ChevronRight,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0f071a]/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <Rocket className="text-brand-accent w-6 h-6" />
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter text-white">BRANDNOVA</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-white/70 hover:text-brand-accent transition-colors">
              {link.name}
            </a>
          ))}
          <button className="bg-brand-accent text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-accent/90 transition-all shadow-lg shadow-purple-500/20">
            Free Strategy Call
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#160d26] border-b border-white/5 p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium py-2 text-white/80"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand-accent text-white px-6 py-4 rounded-xl text-center font-semibold mt-2">
              Get a Free Strategy Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-purple-900/10 rounded-bl-[200px]" />
      <div className="absolute -top-24 -left-24 -z-10 w-96 h-96 bg-purple-600/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-purple-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Grow Faster. Get Noticed. Convert Better.
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 text-white">
            Ignite Your Brand’s <span className="text-brand-accent">Digital Growth</span> 🚀
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-8 max-w-xl leading-relaxed">
            We help businesses transform into powerful brands with result-driven digital marketing, stunning websites, and high-impact branding strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a 
              href="#contact"
              className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-purple-500/20 group"
            >
              Get a Free Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-2 text-sm text-white/50 font-medium px-4">
              <span className="text-brand-accent font-bold">Limited Slots Available</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              "Trusted by Businesses",
              "ROI-Focused Strategies",
              "Scalable Solutions"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-medium text-white/70">
                <CheckCircle2 className="text-brand-accent w-5 h-5 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/5">
            <img 
              src="https://picsum.photos/seed/marketing/800/1000" 
              alt="Digital Marketing Agency" 
              className="w-full h-auto object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Stats Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 z-20 glass-card p-6 rounded-2xl max-w-[200px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <BarChart3 className="text-purple-400 w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-white/40 uppercase">Growth</span>
            </div>
            <div className="text-2xl font-bold text-white">+142%</div>
            <div className="text-[10px] text-white/40">Average ROI for clients in 2025</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              We build brands that customers <span className="italic">remember</span>.
            </h3>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              BrandNova is a full-service digital marketing agency focused on helping brands stand out, scale faster, and dominate their digital presence. We don’t just market businesses — we engineer growth.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Strategy First", desc: "No execution without a clear roadmap.", icon: Target },
                { title: "Data-Driven", desc: "Decisions backed by real-world metrics.", icon: BarChart3 },
                { title: "Creative Balance", desc: "Where art meets performance.", icon: Palette },
                { title: "Personalized", desc: "Growth plans tailored to your goals.", icon: Users },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl shadow-sm flex items-center justify-center border border-white/10">
                    <item.icon className="text-brand-accent w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-white">{item.title}</h4>
                    <p className="text-sm text-white/40">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border border-white/10">
              <img 
                src="https://picsum.photos/seed/team/800/800" 
                alt="Our Team" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/10 rounded-full -z-10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      category: "Digital Marketing",
      icon: Megaphone,
      items: ["Social Media Marketing", "Lead Generation Campaigns", "Paid Ads (Google & Meta)", "Content Strategy"]
    },
    {
      category: "Branding Solutions",
      icon: Palette,
      items: ["Brand Identity Creation", "Logo & Visual Design", "Brand Messaging & Positioning"]
    },
    {
      category: "Web Development",
      icon: Globe,
      items: ["High-Converting Landing Pages", "Business & E-Commerce Websites", "Mobile-Optimized & SEO-Ready"]
    },
    {
      category: "Local SEO",
      icon: Search,
      items: ["Google Business Profile", "Local SEO Strategy", "Review & Reputation Management"]
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Our Core Services</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Comprehensive Solutions for Digital Dominance</h3>
          <p className="text-white/60">From first impression to final conversion, we cover every touchpoint of your customer's journey.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/10 transition-all group"
            >
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                <service.icon className="w-7 h-7 text-brand-accent group-hover:text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-white">{service.category}</h4>
              <ul className="space-y-3">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-white/40">
                    <ChevronRight className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Discover", desc: "Understanding your brand, audience, and goals.", icon: Search },
    { title: "Strategize", desc: "Creating a customized digital roadmap.", icon: Target },
    { title: "Execute", desc: "Launching campaigns, designs, and systems.", icon: Rocket },
    { title: "Optimize", desc: "Continuous improvement for better ROI.", icon: Zap },
  ];

  return (
    <section id="process" className="section-padding bg-[#160d26] text-white overflow-hidden relative border-y border-white/5">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Our Process</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">How We Build Your Success</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-[1px] bg-white/5 -z-10" />
              )}
              <div className="mb-6 w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl font-display font-bold group-hover:bg-brand-accent group-hover:text-white transition-all">
                0{i + 1}
              </div>
              <h4 className="text-xl font-bold mb-2">{step.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="section-padding bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Client Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white">What Our Partners Say</h3>
            
            <div className="bg-white/5 p-10 rounded-3xl shadow-xl shadow-purple-900/5 relative border border-white/10">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />)}
              </div>
              <p className="text-xl italic text-white/80 mb-8 leading-relaxed">
                “BrandNova completely transformed our online presence. Leads increased within the first month, and the branding feels premium and professional. Their team is dedicated and truly understands growth.”
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden">
                  <img src="https://picsum.photos/seed/client/100/100" alt="Client" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="font-bold text-white">Happy Client</div>
                  <div className="text-sm text-white/40">Founder, E-Commerce Brand</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Visibility", val: "+250%" },
              { label: "Leads", val: "+180%" },
              { label: "Conversion", val: "+45%" },
              { label: "Authority", val: "Top 1%" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-brand-accent mb-1">{stat.val}</div>
                <div className="text-sm font-bold text-white/20 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message with the requested 91 prefix
    const whatsappNumber = "916000427029";
    const text = `Hello, I have an enquiry from the website:%0A%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Email:* ${formData.email}%0A` +
                 `*Phone:* ${formData.phone}%0A` +
                 `*Message:* ${formData.message || 'No message provided'}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    
    // Show success message
    setIsSubmitted(true);
    
    // Open WhatsApp in a new tab with the captured data
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    // Auto-hide success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-white/5 relative">
      <AnimatePresence>
        {isSubmitted && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-emerald-500 text-white px-8 py-4 rounded-2xl shadow-2xl font-bold flex items-center gap-3 border border-emerald-400/20"
          >
            <CheckCircle2 className="w-6 h-6" />
            Thank you for your inquiry. We will get back to you at earliest.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Let's Start Your <span className="text-brand-accent">Growth Journey</span>
            </h3>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Have a project in mind? Fill out the form and we'll get back to you within 24 hours. Your brand's transformation starts with a single message.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail className="text-brand-accent w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-white/40 uppercase font-bold tracking-wider">Email Us</div>
                  <div className="text-white font-medium">info@brandnova.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone className="text-brand-accent w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-white/40 uppercase font-bold tracking-wider">Call Us</div>
                  <div className="text-white font-medium">+91 6000427029</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-10 rounded-[32px]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-white/60 uppercase tracking-wider mb-2">Full Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-white/60 uppercase tracking-wider mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white/60 uppercase tracking-wider mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-white/60 uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-accent text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-accent/90 transition-all shadow-xl shadow-purple-500/20 flex items-center justify-center gap-2"
              >
                Submit Inquiry
                <Rocket className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="bg-brand-accent rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-purple-500/20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Ready to Grow Your Brand?</h2>
            <p className="text-white/80 text-lg md:text-xl mb-10">
              Let’s build something powerful together. Book your free consultation today and discover your brand's true potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="bg-white text-brand-accent px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl flex items-center justify-center"
              >
                Book Free Consultation
              </a>
              <a href="mailto:info@brandnova.com" className="flex items-center justify-center gap-2 font-bold text-white hover:underline">
                <Mail className="w-5 h-5" />
                info@brandnova.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0f071a] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Rocket className="text-brand-accent w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold tracking-tighter text-white">BRANDNOVA</span>
            </div>
            <p className="text-white/40 max-w-sm mb-6">
              Where Brands Are Built to Shine. High-performance digital marketing, branding, and web solutions for modern businesses.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-brand-accent hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#about" className="hover:text-brand-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition-colors">Our Services</a></li>
              <li><a href="#process" className="hover:text-brand-accent transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-accent" />
                info@brandnova.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-accent" />
                +91 6000427029
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-accent" />
                www.brandnova.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20 font-medium uppercase tracking-widest">
          <div>© 2026 BrandNova. All Rights Reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-brand-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <EnquiryForm />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
