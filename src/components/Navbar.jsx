import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiSend } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Stdio BD', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-dark-bg/85 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-black/20'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            {/* spaced text logo */}
            <span className="font-sans font-bold text-xl tracking-wider select-none">
              <span className="text-neon-green">Stdio</span> <span className="text-neon-red">BD</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${isActive
                      ? 'text-neon-green'
                      : link.name === 'Stdio BD'
                        ? 'text-white/90 hover:text-neon-green font-semibold'
                        : 'text-white/60 hover:text-white'
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-neon-green glow-green-sm rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* <Link
            to="/contact"
            className="flex items-center gap-2 bg-primary-green hover:bg-neon-green text-dark-bg text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-md transition-all duration-300 shadow-md hover:shadow-green-500/20 border border-primary-green hover:border-neon-green glow-green-sm"
          > */}
          <a
            href="https://www.linkedin.com/in/stdio-bd-3310a0419"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-primary-green hover:bg-neon-green text-dark-bg text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-md transition-all duration-300 shadow-md hover:shadow-green-500/20 border border-primary-green hover:border-neon-green glow-green-sm group"
          >
            <span>Lets go</span>
            <FiSend className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          {/* </Link> */}
        </div>

        {/* Mobile Toggle Menu */}
        <div className="md:hidden flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/stdio-bd-3310a0419"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-primary-green hover:bg-neon-green text-dark-bg text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-md transition-all duration-300 shadow-md hover:shadow-green-500/20 border border-primary-green hover:border-neon-green glow-green-sm group"
          >
            <span>Lets go</span>
            <FiSend className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-neon-green transition-colors duration-300 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-[73px] left-0 w-full h-[calc(100vh-73px)] bg-dark-bg/95 backdrop-blur-lg border-t border-white/5 transition-all duration-300 z-40 md:hidden flex flex-col justify-between py-12 px-8 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
          }`}
      >
        <ul className="flex flex-col gap-6">
          {navLinks.map((link, idx) => {
            const isActive = location.pathname === link.path;
            return (
              <li
                key={link.name}
                className="transform transition-all duration-300"
                style={{
                  transitionDelay: isOpen ? `${idx * 50}ms` : '0ms',
                  transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
                }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-bold tracking-wide transition-colors duration-300 block ${isActive
                    ? 'text-neon-green'
                    : link.name === 'Stdio BD'
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-white/40 uppercase tracking-widest mb-4">Stdio BD Studio</p>
          <div className="flex justify-center gap-6 text-white/50 text-sm">
            <span>Dhaka, Bangladesh</span>
            <span>•</span>
            <span>fitarsiam@gmail.com</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
