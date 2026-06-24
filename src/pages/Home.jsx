import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServicesBento from '../components/ServicesBento';
import PortfolioSlider from '../components/PortfolioSlider';
import { FiCode, FiBriefcase, FiTrendingUp, FiMessageSquare } from 'react-icons/fi';

const Home = () => {
  const testimonials = [
    {
      quote: "Stdio BD built our web portal using React. The dynamic layout looks extremely premium, load times are under 1s, and our client intake grew by 45%. Highly recommended!",
      author: "Faris Siam",
      role: "Lead Engineer, FloraFit",
      rating: 5
    },
    {
      quote: "Their Figma UI design and transition into React code was flawless. Pixel-perfect layout matching exactly what we signed off on.",
      author: "Rimon Ahmed",
      role: "Founder, Furniro Store",
      rating: 5
    }
  ];

  const techStack = [
    'Full-Stack Web Development (React, Node.js)',
    'Responsive Design (Bootstrap & Tailwind)',
    'Mobile Apps',
    'WordPress',
    'UI/UX Design'
  ];

  return (
    <div className="w-full min-h-screen text-white bg-dark-bg font-sans">
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Infinite Tech Slider Ticker */}
      <div className="bg-white/[0.02] border-y border-white/5 py-4 overflow-hidden relative z-20">
        <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
          {/* Loop twice for seamless scrolling */}
          {[...techStack, ...techStack].map((tech, idx) => (
            <div key={idx} className="flex items-center gap-2 mx-8 text-xs font-bold uppercase tracking-widest text-white/70 font-mono">
              <FiCode className="w-4 h-4 text-neon-green" />
              <span>{tech}</span>
              <span className="ml-8 text-white/20">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Creative About Block */}
      <section className="py-24 bg-dark-bg relative">
        <div className="absolute inset-0 circuit-bg opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Grid Graphics */}
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-green/5 rounded-full filter blur-3xl pointer-events-none" />
            
            <div className="glassmorphism-card p-6 rounded-2xl flex flex-col justify-between h-44 border-neon-green/20">
              <FiBriefcase className="w-8 h-8 text-neon-green" />
              <div>
                <h3 className="text-2xl font-bold text-white">40+</h3>
                <p className="text-xs text-white/50 tracking-wide uppercase mt-1">Websites Delivered</p>
              </div>
            </div>

            <div className="glassmorphism-card p-6 rounded-2xl flex flex-col justify-between h-44 translate-y-8 border-neon-green/10">
              <FiTrendingUp className="w-8 h-8 text-neon-green" />
              <div>
                <h3 className="text-2xl font-bold text-white">99%</h3>
                <p className="text-xs text-white/50 tracking-wide uppercase mt-1">Client Satisfaction</p>
              </div>
            </div>
            
            <div className="col-span-2 glassmorphism-card p-6 rounded-2xl flex items-center gap-6 mt-4 border-white/5">
              <img
                src="/assets/rimon.png"
                alt="Stdio BD Developer"
                className="w-12 h-12 rounded-full object-cover border border-white/10"
                onError={(e) => { e.target.src = "https://placehold.co/100x100/ffffff/1a1a1a?text=DEV"; }}
              />
              <div className="text-left">
                <h4 className="text-sm font-bold text-white">Premium Quality Assurance</h4>
                <p className="text-xs text-white/40">Custom-coded frameworks. No bloated template builders.</p>
              </div>
            </div>
          </div>

          {/* Right Text details */}
          <div className="text-left flex flex-col items-start justify-center">
            <span className="text-xs font-bold tracking-widest text-neon-green uppercase border border-neon-green/20 bg-neon-green/5 px-3 py-1 rounded-full mb-6">
              Our Agency
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6">
              Digital Innovation with Structural Integrity
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-6 font-sans">
              Stdio BD is a premium creative agency offering state-of-the-art UI/UX Figma models, responsive frontend websites, and dynamic web application architectures.
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-8 font-sans">
              We specialize in custom web solutions built from scratch with clean logic, ensuring responsive scalability across mobile screens and modern security compliance.
            </p>
            <Link
              to="/about"
              className="bg-primary-green hover:bg-neon-green text-dark-bg text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg border border-primary-green hover:border-neon-green transition-all duration-300 shadow-md hover:shadow-green-500/20"
            >
              Learn More About Us
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Bento Grid Services */}
      <ServicesBento />

      {/* 5. Coverflow Portfolio Slider */}
      <PortfolioSlider />

      {/* 6. Testimonials Section */}
      <section className="py-24 bg-dark-bg border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-neon-green uppercase border border-neon-green/20 bg-neon-green/5 px-3 py-1 rounded-full">
              Client Feedback
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mt-4 mb-4">
              Trusted by Innovators
            </h2>
            <p className="text-white/50 text-sm">
              Read how Stdio BD helps business entities upgrade their online interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test, idx) => (
              <div key={idx} className="glassmorphism-card p-8 rounded-2xl text-left border-white/5 flex flex-col justify-between group hover:border-neon-green/20">
                <div>
                  <FiMessageSquare className="w-8 h-8 text-neon-green mb-6 opacity-40 group-hover:opacity-100 transition-opacity" />
                  <p className="text-white/70 italic text-sm leading-relaxed mb-8 font-sans">
                    "{test.quote}"
                  </p>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                  <div>
                    <h4 className="text-sm font-bold text-white">{test.author}</h4>
                    <p className="text-xs text-white/40 mt-0.5">{test.role}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(test.rating)].map((_, rIdx) => (
                      <span key={rIdx} className="text-neon-green text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-24 bg-[#0a0c14] border-t border-white/5 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/2 rounded-full filter blur-[150px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6">
            Ready to Build Something <br />
            <span className="text-neon-green">Exceptional</span>?
          </h2>
          <p className="text-white/60 text-sm max-w-xl mx-auto mb-10 leading-relaxed font-sans">
            Whether you want a high-performance landing page or a full web application redesign, our developers are ready.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-neon-green hover:bg-emerald-500 text-dark-bg font-bold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-green-500/25 text-sm uppercase tracking-wider"
          >
            <span>Start Your Project</span>
            <span className="text-lg">➔</span>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
