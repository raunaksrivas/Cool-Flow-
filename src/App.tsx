import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Menu, 
  X, 
  Snowflake, 
  Flame, 
  Clock, 
  Shield, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  MapPin, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ChevronRight,
  Zap,
  Thermometer,
  User,
  MessageSquare
} from 'lucide-react';
import { SERVICES, TESTIMONIALS, MAINTENANCE_PLANS, FAQS } from './constants.tsx';

// --- Components ---

const Navbar = ({ activePage, setActivePage }: { activePage: string, setActivePage: (page: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Plans', id: 'plans' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/90 backdrop-blur-md py-4 shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => setActivePage('home')}>
            <div className="relative flex items-center justify-center w-10 h-10 mr-2">
              <Snowflake className="absolute w-8 h-8 text-hvac-blue-600 animate-pulse" />
              <Flame className="absolute w-5 h-5 text-hvac-red-600 translate-x-2 -translate-y-2" />
            </div>
            <span className="text-2xl font-display font-bold text-hvac-blue-900">
              Cool<span className="text-hvac-orange-500">Flow</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActivePage(link.id)}
                className={`text-sm font-bold transition-colors hover:text-hvac-yellow-400 ${
                  activePage === link.id 
                    ? 'text-hvac-yellow-400' 
                    : 'text-hvac-blue-900'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => setActivePage('contact')}
              className="bg-hvac-blue-900 hover:bg-hvac-blue-800 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-lg"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-hvac-blue-900"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setActivePage(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-4 text-base font-medium border-b border-slate-50 ${
                    activePage === link.id ? 'text-hvac-orange-500' : 'text-slate-700'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4">
                <button 
                  onClick={() => {
                    setActivePage('contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-hvac-blue-900 text-white py-4 rounded-xl font-bold flex items-center justify-center"
                >
                  <Phone className="mr-2 w-5 h-5" /> Call (800) COOL-FLOW
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  return (
    <footer className="bg-hvac-blue-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <Snowflake className="w-8 h-8 text-hvac-blue-600 mr-2" />
              <span className="text-2xl font-display font-bold">
                Cool<span className="text-hvac-orange-500">Flow</span>
              </span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Providing premium HVAC services to our community for over 15 years. Comfort you can count on, 24/7.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-hvac-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-hvac-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-hvac-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-hvac-orange-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'About', 'Plans', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => setActivePage(item.toLowerCase())}
                    className="text-slate-300 hover:text-hvac-orange-500 transition-colors flex items-center"
                  >
                    <ChevronRight size={16} className="mr-2" /> {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <button 
                    onClick={() => setActivePage('services')}
                    className="text-slate-300 hover:text-hvac-orange-500 transition-colors flex items-center"
                  >
                    <ChevronRight size={16} className="mr-2" /> {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-hvac-orange-500 mr-3 mt-1 shrink-0" />
                <span className="text-slate-300">123 Comfort Lane, Suite 100<br />Dallas, TX 75201</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-hvac-orange-500 mr-3 shrink-0" />
                <span className="text-slate-300">(800) COOL-FLOW</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-hvac-orange-500 mr-3 shrink-0" />
                <span className="text-slate-300">service@coolflowhvac.com</span>
              </li>
              <li className="flex items-center pt-2">
                <div className="bg-hvac-red-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                  24/7 EMERGENCY SERVICE
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>© 2026 CoolFlow HVAC Services. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Page Content ---

const MapPlaceholder = () => (
  <div className="relative w-full h-[400px] bg-slate-100 rounded-[3rem] overflow-hidden border border-slate-200 shadow-inner group">
    {/* Grid Pattern */}
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4a69bd 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
    
    {/* Styled Map Elements */}
    <div className="absolute top-1/4 left-1/3 w-32 h-20 bg-hvac-blue-600/20 rounded-full blur-2xl animate-pulse"></div>
    <div className="absolute bottom-1/3 right-1/4 w-40 h-24 bg-hvac-orange-500/10 rounded-full blur-3xl"></div>
    
    {/* Service Area Circle */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-hvac-blue-600/40 rounded-full animate-[spin_20s_linear_infinite]"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-hvac-blue-600/5 border border-hvac-blue-600/20 rounded-full flex items-center justify-center">
      <div className="text-center">
        <p className="text-hvac-blue-900 font-bold text-sm uppercase tracking-widest">Service Zone</p>
        <p className="text-hvac-blue-600 text-xs font-medium">50 Mile Radius</p>
      </div>
    </div>

    {/* Map Pins */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="relative"
      >
        <MapPin className="text-hvac-red-600 w-10 h-10 drop-shadow-lg" fill="currentColor" fillOpacity={0.2} />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/20 rounded-full blur-sm"></div>
      </motion.div>
    </div>

    {/* Location Labels */}
    <div className="absolute top-1/4 right-1/3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 text-[10px] font-bold text-hvac-blue-900">PLANO</div>
    <div className="absolute bottom-1/4 left-1/4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 text-[10px] font-bold text-hvac-blue-900">ARLINGTON</div>
    <div className="absolute top-1/2 right-1/4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 text-[10px] font-bold text-hvac-blue-900">GARLAND</div>

    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-hvac-blue-900 text-white px-6 py-2 rounded-full text-xs font-bold shadow-xl">
      Serving Dallas-Fort Worth Metroplex
    </div>
  </div>
);

const ServiceAreas = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-hvac-orange-600 font-bold tracking-widest uppercase text-sm mb-4">Coverage</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold text-hvac-blue-900 mb-8">Where We Work</h3>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            CoolFlow provides premium HVAC services across the entire Dallas-Fort Worth Metroplex. Whether you're in the heart of the city or the surrounding suburbs, our technicians are just a call away.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8">
            {['Dallas', 'Fort Worth', 'Arlington', 'Plano', 'Irving', 'Garland', 'Grand Prairie', 'McKinney', 'Frisco', 'Mesquite', 'Carrollton', 'Denton'].map((city, idx) => (
              <div key={idx} className="flex items-center text-slate-700 font-medium">
                <div className="w-1.5 h-1.5 bg-hvac-orange-500 rounded-full mr-3"></div>
                {city}
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-hvac-ice rounded-2xl border border-hvac-blue-600/10 flex items-center">
            <div className="bg-hvac-blue-600 p-3 rounded-xl mr-4 text-white">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-hvac-blue-900 font-bold">Don't see your city?</p>
              <p className="text-slate-600 text-sm">We often travel further for major installations. Call us to check!</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <MapPlaceholder />
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-hvac-orange-500/10 rounded-full -z-10"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-hvac-blue-600/10 rounded-full -z-10"></div>
        </div>
      </div>
    </div>
  </section>
);

const HomePage = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000" 
            alt="HVAC Technician" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hvac-blue-900/95 via-hvac-blue-900/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center bg-hvac-orange-500/20 border border-hvac-orange-500/30 text-hvac-orange-500 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Clock className="w-4 h-4 mr-2" /> 24/7 Emergency Service Available
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-tight mb-6">
              Comfort You Can <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-hvac-orange-500 to-hvac-red-600">Count On — 24/7</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed">
              Don't let a broken AC or heater ruin your day. CoolFlow provides premium, reliable HVAC solutions for your home and business.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => setActivePage('contact')}
                className="bg-hvac-orange-500 hover:bg-hvac-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all shadow-xl hover:shadow-hvac-orange-500/20"
              >
                Book Service Now <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={() => setActivePage('services')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all"
              >
                View Our Services
              </button>
            </div>

            <div className="mt-12 flex items-center space-x-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-hvac-blue-900 bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-hvac-orange-500">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-white text-sm font-medium">Trusted by 5,000+ local families</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-hvac-ice border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Shield className="text-hvac-blue-600" />, title: "Fully Licensed & Insured" },
              { icon: <CheckCircle2 className="text-hvac-blue-600" />, title: "NATE Certified Techs" },
              { icon: <Clock className="text-hvac-blue-600" />, title: "24/7 Emergency Support" },
              { icon: <Zap className="text-hvac-blue-600" />, title: "No Surprise Pricing" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  {item.icon}
                </div>
                <span className="font-bold text-slate-700 text-sm md:text-base">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-hvac-orange-600 font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold text-hvac-blue-900 mb-6">Complete Home Comfort Solutions</h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              From minor repairs to full system installations, our team handles every HVAC need with professional care and technical precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <motion.div 
                key={service.id}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-hvac-blue-900 transition-colors">
                  <div className="group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-hvac-blue-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button 
                  onClick={() => setActivePage('services')}
                  className="text-hvac-blue-600 font-bold flex items-center hover:text-hvac-orange-500 transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={() => setActivePage('services')}
              className="bg-hvac-blue-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-hvac-blue-800 transition-all shadow-lg"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-hvac-blue-900/5 -skew-x-12 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-hvac-orange-600 font-bold tracking-widest uppercase text-sm mb-4">Why CoolFlow?</h2>
              <h3 className="text-4xl md:text-5xl font-display font-extrabold text-hvac-blue-900 mb-8">The Local Standard for HVAC Excellence</h3>
              
              <div className="space-y-8">
                {[
                  { title: "Family Owned & Operated", desc: "We treat your home like our own. Trust and integrity are at the heart of everything we do." },
                  { title: "Transparent Pricing", desc: "No hidden fees or surprise billing. You'll know the exact cost before we start any work." },
                  { title: "Certified Technicians", desc: "Our team undergoes rigorous training and NATE certification to ensure expert service." },
                  { title: "24/7 Availability", desc: "HVAC issues don't follow a schedule. We're here for you day or night, rain or shine." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="bg-hvac-orange-500 p-1 rounded-full mt-1 mr-4 shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-hvac-blue-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000" 
                  alt="HVAC Installation" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 z-20 bg-white p-8 rounded-3xl shadow-2xl max-w-xs hidden md:block border border-slate-100">
                <div className="flex items-center mb-4">
                  <div className="bg-hvac-blue-900 p-3 rounded-2xl mr-4">
                    <Thermometer className="text-white w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold text-hvac-blue-900">15+</p>
                    <p className="text-slate-500 font-bold text-sm uppercase">Years Experience</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm italic">"The most reliable service I've ever had. They fixed my furnace in the middle of a blizzard!"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <ServiceAreas />

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-hvac-orange-600 font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h2>
            <h3 className="text-4xl font-display font-extrabold text-hvac-blue-900">What Our Customers Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="flex text-hvac-orange-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 mb-6 italic leading-relaxed">"{t.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-hvac-blue-900 flex items-center justify-center text-white font-bold mr-4">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-hvac-blue-900">{t.name}</h5>
                    <p className="text-slate-500 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-cool rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <Snowflake className="absolute top-10 left-10 w-32 h-32" />
              <Flame className="absolute bottom-10 right-10 w-32 h-32" />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-8">Ready to Restore Your Comfort?</h3>
              <p className="text-xl text-hvac-ice/80 mb-10">
                Join thousands of happy homeowners who trust CoolFlow for their HVAC needs. Get a free estimate or book your service online today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button 
                  onClick={() => setActivePage('contact')}
                  className="bg-hvac-orange-500 hover:bg-hvac-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl"
                >
                  Book Service Now
                </button>
                <button 
                  onClick={() => window.location.href = 'tel:8002665356'}
                  className="bg-white text-hvac-blue-900 hover:bg-slate-100 px-10 py-5 rounded-2xl font-bold text-xl transition-all flex items-center justify-center"
                >
                  <Phone className="mr-2 w-6 h-6" /> (800) COOL-FLOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-display font-extrabold text-hvac-blue-900 mb-6">Our HVAC Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We provide a full range of heating and cooling services designed to keep your home comfortable and your energy bills low.
          </p>
        </div>

        <div className="space-y-24">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className={`flex flex-col lg:flex-items-center gap-12 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
              <div className="flex-1">
                <div className="w-20 h-20 bg-hvac-ice rounded-3xl flex items-center justify-center mb-8 shadow-inner">
                  {service.icon}
                </div>
                <h2 className="text-4xl font-display font-extrabold text-hvac-blue-900 mb-6">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.longDescription}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.benefits?.map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-hvac-orange-500" />
                      <span className="font-bold text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => setActivePage('contact')}
                  className="bg-hvac-blue-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-hvac-blue-800 transition-all shadow-lg"
                >
                  Request {service.title}
                </button>
              </div>
              <div className="flex-1">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video lg:aspect-square">
                  <img 
                    src={`https://picsum.photos/seed/hvac-${service.id}/800/800`} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-5xl md:text-6xl font-display font-extrabold text-hvac-blue-900 mb-8">Our Story</h1>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              CoolFlow HVAC Services began with a simple mission: to provide the families of our community with honest, reliable, and high-quality heating and cooling solutions.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              As a family-owned business with over 15 years of experience, we've grown from a single van to a full team of NATE-certified technicians. Despite our growth, our core values remain the same: transparency, reliability, and a commitment to excellence.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-extrabold text-hvac-orange-500">15+</p>
                <p className="text-slate-500 font-bold uppercase text-sm">Years in Business</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-hvac-orange-500">5k+</p>
                <p className="text-slate-500 font-bold uppercase text-sm">Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/hvac-team/1000/800" 
              alt="CoolFlow HVAC Team" 
              className="rounded-[3rem] shadow-2xl w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-hvac-blue-900 text-white p-8 rounded-3xl shadow-xl">
              <p className="text-lg font-bold">"We treat every home like it's our own."</p>
              <p className="text-slate-400 mt-2">— The CoolFlow Family</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-extrabold text-hvac-blue-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Transparency", desc: "We provide detailed, upfront estimates so you never have to worry about hidden costs or surprise billing." },
              { title: "Reliability", desc: "When we say we'll be there, we'll be there. Our 24/7 service ensures you're never left in the cold." },
              { title: "Excellence", desc: "Our technicians are NATE-certified and continuously trained on the latest HVAC technologies." }
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <CheckCircle2 className="text-hvac-orange-500 w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-hvac-blue-900 mb-4">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PlansPage = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-display font-extrabold text-hvac-blue-900 mb-6">Maintenance Plans</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join the CoolFlow Comfort Club. Regular maintenance saves money, prevents breakdowns, and extends the life of your HVAC system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {MAINTENANCE_PLANS.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative p-8 rounded-[2.5rem] border ${plan.recommended ? 'border-hvac-orange-500 shadow-2xl bg-white scale-105 z-10' : 'border-slate-100 bg-slate-50 shadow-lg'}`}
            >
              {plan.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-hvac-orange-500 text-white px-6 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-hvac-blue-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-extrabold text-hvac-blue-900">{plan.price}</span>
                <span className="text-slate-500 ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-hvac-orange-500 mr-3 mt-0.5 shrink-0" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.recommended ? 'bg-hvac-orange-500 text-white hover:bg-hvac-orange-600 shadow-lg' : 'bg-hvac-blue-900 text-white hover:bg-hvac-blue-800'}`}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-hvac-blue-900 rounded-[3rem] p-12 md:p-20 text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-extrabold mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400">Everything you need to know about our services and plans.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {FAQS.map((faq, idx) => (
              <div key={idx}>
                <h4 className="text-xl font-bold mb-4 flex items-start">
                  <span className="text-hvac-orange-500 mr-3">Q:</span> {faq.question}
                </h4>
                <p className="text-slate-300 leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'AC Repair',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl md:text-6xl font-display font-extrabold text-hvac-blue-900 mb-8">Get in Touch</h1>
            <p className="text-xl text-slate-600 mb-12">
              Ready to schedule a service or have a question? Fill out the form below or give us a call. Our team is standing by 24/7.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="bg-hvac-blue-900 p-4 rounded-2xl mr-6">
                  <Phone className="text-white w-8 h-8" />
                </div>
                <div>
                  <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mb-1">Call Us 24/7</p>
                  <p className="text-2xl font-extrabold text-hvac-blue-900">(800) COOL-FLOW</p>
                </div>
              </div>

              <div className="flex items-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="bg-hvac-orange-500 p-4 rounded-2xl mr-6">
                  <Mail className="text-white w-8 h-8" />
                </div>
                <div>
                  <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mb-1">Email Us</p>
                  <p className="text-2xl font-extrabold text-hvac-blue-900">service@coolflow.com</p>
                </div>
              </div>

              <div className="flex items-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="bg-hvac-blue-600 p-4 rounded-2xl mr-6">
                  <MapPin className="text-white w-8 h-8" />
                </div>
                <div>
                  <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mb-1">Our Location</p>
                  <p className="text-2xl font-extrabold text-hvac-blue-900">Dallas, TX 75201</p>
                </div>
              </div>
            </div>

            <div className="bg-hvac-red-600 text-white p-8 rounded-3xl shadow-xl flex items-center">
              <Clock className="w-12 h-12 mr-6 animate-pulse" />
              <div>
                <h4 className="text-xl font-bold mb-1">Emergency Service?</h4>
                <p className="text-white/80">Call our 24/7 emergency line for immediate dispatch. We're always available.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100">
            <h3 className="text-3xl font-display font-extrabold text-hvac-blue-900 mb-8">Book Your Service</h3>
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl text-center"
              >
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-2xl font-bold text-emerald-900 mb-4">Request Received!</h4>
                <p className="text-emerald-700">Thank you for choosing CoolFlow. One of our specialists will contact you within 15 minutes to confirm your booking.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-hvac-blue-600 focus:border-transparent outline-none transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input 
                        required
                        type="tel" 
                        placeholder="(555) 000-0000"
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-hvac-blue-600 focus:border-transparent outline-none transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Service Type</label>
                  <select 
                    className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-hvac-blue-600 focus:border-transparent outline-none transition-all appearance-none"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                    <option value="Other">Other / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">How can we help?</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your HVAC issue..."
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-hvac-blue-600 focus:border-transparent outline-none transition-all"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-hvac-orange-500 hover:bg-hvac-orange-600 text-white py-5 rounded-xl font-bold text-xl transition-all shadow-xl hover:shadow-hvac-orange-500/20"
                >
                  Send Booking Request
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map Section on Contact Page */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-extrabold text-hvac-blue-900 mb-4">Our Service Area</h3>
            <p className="text-slate-600">We serve the entire Dallas-Fort Worth Metroplex and surrounding areas.</p>
          </div>
          <MapPlaceholder />
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
            {activePage === 'services' && <ServicesPage setActivePage={setActivePage} />}
            {activePage === 'about' && <AboutPage />}
            {activePage === 'plans' && <PlansPage />}
            {activePage === 'contact' && <ContactPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setActivePage={setActivePage} />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col space-y-4">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.location.href = 'tel:8002665356'}
          className="bg-hvac-blue-900 text-white p-4 rounded-full shadow-2xl flex items-center group"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold px-0 group-hover:px-4">Call Now</span>
          <Phone size={24} />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setActivePage('contact')}
          className="bg-hvac-orange-500 text-white p-4 rounded-full shadow-2xl flex items-center group"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold px-0 group-hover:px-4">Book Service</span>
          <ArrowRight size={24} />
        </motion.button>
      </div>
    </div>
  );
}
