import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiFigma, FiSmartphone, FiMousePointer, FiLayers, 
  FiCpu, FiDatabase, FiShuffle, FiSettings, FiActivity 
} from 'react-icons/fi';

const ServicesBento = () => {
  const services = [
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      description: 'Creating high-fidelity, premium interfaces and pixel-perfect interactive prototypes in Figma. We focus on modern user-centric journeys, micro-interactions, and visual storytelling.',
      icon: FiFigma,
      tag: 'Creative',
      tagColor: 'bg-neon-green/10 text-neon-green border-neon-green/20',
      size: 'lg:col-span-8',
      hoverGlow: 'hover:border-neon-green/30 hover:shadow-[0_10px_30px_-10px_rgba(0,255,102,0.15)]',
    },
    {
      id: 'responsive',
      title: 'Responsive Web Design',
      description: 'Seamless layouts crafted to render perfectly on smartphones, tablets, laptops, and ultra-wide displays.',
      icon: FiSmartphone,
      tag: 'Layout',
      tagColor: 'bg-neon-green/10 text-neon-green border-neon-green/20',
      size: 'lg:col-span-4',
      hoverGlow: 'hover:border-neon-green/30 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.1)]',
    },
    {
      id: 'landing-page',
      title: 'Landing Page Development',
      description: 'Ultra-fast, high-converting single page promotional sites engineered to turn visitors into leads and scale campaigns.',
      icon: FiMousePointer,
      tag: 'Conversion',
      tagColor: 'bg-neon-green/10 text-neon-green border-neon-green/20',
      size: 'lg:col-span-4',
      hoverGlow: 'hover:border-neon-green/30 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.1)]',
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      description: 'Translating complex designer assets into reactive, high-end visual systems using React and modern styled setups (Tailwind v4). We animate components for fluid screen responses.',
      icon: FiLayers,
      tag: 'Speed',
      tagColor: 'bg-neon-green/10 text-neon-green border-neon-green/20',
      size: 'lg:col-span-8',
      hoverGlow: 'hover:border-neon-green/30 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.1)]',
    },
    {
      id: 'full-website',
      title: 'Full Website Development',
      description: 'End-to-end full-stack architectures. Combining modern user dashboards with custom backend processing, admin controllers, and secure API gateways.',
      icon: FiDatabase,
      tag: 'Full-Stack',
      tagColor: 'bg-neon-green/10 text-neon-green border-neon-green/20',
      size: 'lg:col-span-6',
      hoverGlow: 'hover:border-neon-green/30 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.1)]',
    },
    {
      id: 'web-app',
      title: 'Web Application Development',
      description: 'Building intricate software platforms, client portals, real-time collaboration widgets, and custom developer tools engineered for speed and scalability.',
      icon: FiCpu,
      tag: 'Software',
      tagColor: 'bg-neon-green/10 text-neon-green border-neon-green/20',
      size: 'lg:col-span-6',
      hoverGlow: 'hover:border-neon-green/30 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.1)]',
    },
    {
      id: 'redesign',
      title: 'Website Redesign',
      description: 'Converting outdated pages into responsive, fast-loading, and visually premium systems using the latest frontend structures.',
      icon: FiShuffle,
      tag: 'Optimization',
      tagColor: 'bg-neon-green/10 text-neon-green border-neon-green/20',
      size: 'lg:col-span-4',
      hoverGlow: 'hover:border-neon-green/30 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.1)]',
    },
    {
      id: 'maintenance',
      title: 'Website Maintenance',
      description: 'Providing constant server inspections, page security audits, bug remedies, and library upgrades to keep your digital assets safe.',
      icon: FiSettings,
      tag: '24/7 Support',
      tagColor: 'bg-neon-green/10 text-neon-green border-neon-green/20',
      size: 'lg:col-span-4',
      hoverGlow: 'hover:border-neon-green/30 hover:shadow-[0_10px_30px_-10px_rgba(0,255,102,0.15)]',
    },
    {
      id: 'update',
      title: 'Website Update Service',
      description: 'Swift integrations of new features, content adjustments, module expansions, and package upgrades to keep your site updated.',
      icon: FiActivity,
      tag: 'Continuous',
      tagColor: 'bg-neon-green/10 text-neon-green border-neon-green/20',
      size: 'lg:col-span-4',
      hoverGlow: 'hover:border-neon-green/30 hover:shadow-[0_10px_30px_-10px_rgba(0,255,102,0.15)]',
    },
  ];

  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background SVG Grid / Glow lines */}
      <div className="absolute inset-0 circuit-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/3 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-neon-green uppercase border border-neon-green/20 bg-neon-green/5 px-3 py-1 rounded-full">
            Our Offerings
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mt-4 mb-6">
            Elite Tech Solutions for Your Brand
          </h2>
          <p className="text-white/60 text-base leading-relaxed">
            From layout refinement to building heavy full-stack web platforms, we engineer solutions matching premium standards.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className={`glassmorphism-card rounded-2xl p-8 flex flex-col justify-between group relative overflow-hidden ${svc.size} ${svc.hoverGlow}`}
              >
                {/* Accent light overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
                
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-white/10 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-white group-hover:text-neon-green transition-colors duration-300" />
                    </div>
                    <span className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full border ${svc.tagColor}`}>
                      {svc.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors duration-300">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed font-sans">
                    {svc.description}
                  </p>
                </div>

                {/* Bottom link/decor */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-white/40 font-mono tracking-wider">SECURE-DEV</span>
                  <Link
                    to="/contact"
                    className="text-xs font-semibold text-white/80 group-hover:text-neon-green transition-colors duration-300 flex items-center gap-1"
                  >
                    <span>Request Service</span>
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">➔</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesBento;
