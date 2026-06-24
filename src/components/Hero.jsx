import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTerminal, FiCode, FiLayers, FiSmartphone } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [terminalStep, setTerminalStep] = useState(0);

  // Mouse move listener for premium glow trail
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Mock terminal typing simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalStep((prev) => (prev < 5 ? prev + 1 : 0));
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const terminalLines = [
    { text: '$ npm install stdio-bd-company', color: 'text-white/60' },
    { text: '✓ Added 9 premium digital services in 0.42s', color: 'text-neon-green' },
    { text: '$ node run studio.js', color: 'text-white/60' },
    { text: '➔ Starting UI/UX design suite & responsive layouts...', color: 'text-white/80' },
    { text: '➔ Initializing Vite + Tailwind CSS v4 environment...', color: 'text-white/80' },
    { text: '● Stdio BD server listening on port 3000 (HTTPS)', color: 'text-neon-green font-bold glow-green-sm' },
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden circuit-bg"
    >
      {/* Interactive cursor light tracker */}
      <div
        className="absolute inset-0 pointer-events-none hidden md:block transition-all duration-200"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(52, 211, 153, 0.03), rgba(244, 63, 94, 0.01), transparent 70%)`,
        }}
      />

      {/* Floating glowing orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-neon-green/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-neon-green/2 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Side Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">


          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight tracking-tight text-white mb-6">
            We Design & Build <br />
            <span className="text-gradient-green-red">High-Performance</span> <br />
            Web Applications.
          </h1>

          <p className="text-lg text-white/60 font-sans max-w-xl mb-8 leading-relaxed">
            Welcome to <span className="font-bold"><span className="text-neon-green">Stdio</span> <span className="text-neon-red">BD</span></span>. We deliver premium UI/UX design, fully responsive frontend websites, landing pages, and complex custom web solutions with flawless performance.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/services"
              className="flex items-center gap-2 bg-white hover:bg-white/95 text-dark-bg font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md group border border-white"
            >
              <span>Explore Services</span>
              <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 border border-white/20"
            >
              <span>Let's Discuss</span>
            </Link>
          </div>

          {/* Tech highlights */}
          <div className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-white/5 w-full">
            <div className="flex items-center gap-2">
              <FiCode className="text-neon-green w-5 h-5" />
              <span className="text-sm text-white/55 font-medium">Web Development</span>
            </div>
            <div className="flex items-center gap-2">
              <FiSmartphone className="text-neon-green w-5 h-5" />
              <span className="text-sm text-white/55 font-medium">Mobile Apps</span>
            </div>
            <div className="flex items-center gap-2">
              <FiLayers className="text-neon-green w-5 h-5" />
              <span className="text-sm text-white/55 font-medium">UI/UX Design</span>
            </div>
          </div>

        </div>

        {/* Right Side Mock Terminal */}
        <div className="lg:col-span-5 w-full">
          <div className="glassmorphism rounded-xl border border-white/10 shadow-2xl overflow-hidden glow-green relative">

            {/* Header window control bar */}
            <div className="bg-[#0b0c10] px-4 py-3 flex justify-between items-center border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-neon-red opacity-80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
                <span className="w-3 h-3 rounded-full bg-neon-green opacity-80" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white/40 font-mono">
                <FiTerminal className="w-3 h-3" />
                <span>stdioBD.sh</span>
              </div>
              <div className="w-8" />
            </div>

            {/* Terminal screen content */}
            <div className="p-6 font-mono text-sm text-left h-72 flex flex-col justify-start gap-3 bg-[#07080c] overflow-y-auto custom-scrollbar">
              {terminalLines.slice(0, terminalStep + 1).map((line, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2 ${line.color} transition-all duration-500`}
                >
                  <span className="select-none text-white/20">{'>'}</span>
                  <span>{line.text}</span>
                </div>
              ))}

              {/* Pulsing blinking caret indicator */}
              <div className="flex items-center gap-2 text-white/60">
                <span className="select-none text-white/20">{'>'}</span>
                <span className="h-4 w-2 bg-neon-green animate-pulse rounded-sm" />
              </div>
            </div>

            {/* Terminal bottom details */}
            <div className="bg-white/[0.02] px-6 py-4 border-t border-white/5 flex justify-between items-center text-xs text-white/40 font-mono">
              <span>Lines: 12</span>
              <span>UTF-8</span>
              <span>100% SECURE</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
