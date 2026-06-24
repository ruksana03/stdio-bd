import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiTwitter, FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#05060a] border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Accent gradients */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-green/1 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-green/2 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          
          {/* Logo & Description */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <span className="font-sans font-bold text-xl tracking-wider select-none">
                <span className="text-neon-green">Stdio</span> <span className="text-neon-red">BD</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 font-sans">
              Next-generation digital studio serving state-of-the-art UI/UX, responsive layouts, web application developments, and premium brand designs. We turn visions into high-end web products.
            </p>
            
            {/* Contact Details */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-white/60 hover:text-neon-green text-sm transition-colors duration-300">
                <FiMapPin className="text-neon-green w-4 h-4" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 hover:text-neon-green text-sm transition-colors duration-300">
                <FiPhone className="text-neon-green w-4 h-4" />
                <span>+880 1752350135</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 hover:text-neon-green text-sm transition-colors duration-300">
                <FiMail className="text-neon-green w-4 h-4" />
                <span>fitarsiam@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Explore</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link to="/" className="text-white/50 hover:text-neon-green transition-colors duration-300">Stdio BD (Home)</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/50 hover:text-neon-green transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/50 hover:text-neon-green transition-colors duration-300">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/50 hover:text-neon-green transition-colors duration-300">Projects</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-white/50 hover:text-neon-green transition-colors duration-300">Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Core Services Menu */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/50">
              <li>UI/UX Design</li>
              <li>Responsive Web Design</li>
              <li>Landing Page Development</li>
              <li>Web Application Development</li>
              <li>Full Website Development</li>
              <li>Website Maintenance & Updates</li>
            </ul>
          </div>

          {/* Newsletter Input */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-white/50 text-sm mb-4 leading-relaxed font-sans">
              Subscribe to receive structural web updates and tech updates from our developers.
            </p>
            <div className="w-full flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-neon-green transition-all"
              />
              <button className="bg-primary-green hover:bg-neon-green text-dark-bg text-xs font-bold px-4 py-2 rounded-lg transition-colors border border-primary-green hover:border-neon-green glow-green-sm">
                Join
              </button>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 bg-white/5 hover:bg-neon-green/10 text-white/60 hover:text-neon-green rounded-lg border border-white/10 hover:border-neon-green/30 transition-all">
                <FiTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-neon-green/10 text-white/60 hover:text-neon-green rounded-lg border border-white/10 hover:border-neon-green/30 transition-all">
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-neon-green/10 text-white/60 hover:text-neon-green rounded-lg border border-white/10 hover:border-neon-green/30 transition-all">
                <FiInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-neon-green/10 text-white/60 hover:text-neon-green rounded-lg border border-white/10 hover:border-neon-green/30 transition-all">
                <FiGithub className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        <hr className="border-white/5 my-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-sans">
          <p>© 2026 Stdio BD. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neon-green transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-neon-green transition-colors">Terms of Service</a>
            <span>•</span>
            <span className="text-white/50">Developed by Al Fitar Ahmed</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
