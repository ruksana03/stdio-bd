import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiFigma, FiSmartphone, FiMousePointer, FiLayers, 
  FiCpu, FiDatabase, FiShuffle, FiSettings, FiActivity,
  FiCheckCircle, FiArrowRight
} from 'react-icons/fi';

const Services = () => {
  const serviceDetails = [
    {
      title: 'UI/UX Design',
      icon: FiFigma,
      description: 'Creating high-fidelity, premium interfaces and interactive prototypes in Figma. We focus on modern user-centric journeys, micro-interactions, and visual storytelling.',
      features: ['Wireframing & Flowcharts', 'High-Fidelity UI Layouts', 'Interactive Prototypes', 'Design System Architecture'],
      tech: ['Figma', 'Adobe CC', 'Principle', 'Spline 3D']
    },
    {
      title: 'Responsive Web Design',
      icon: FiSmartphone,
      description: 'Fluid layout arrangements designed to adjust perfectly across mobile viewports, tablets, laptops, and ultra-wide displays.',
      features: ['Mobile-First Frameworks', 'Fluid Grid Layouts', 'Asymmetric Design Tokens', 'Cross-Browser Optimization'],
      tech: ['Tailwind CSS v4', 'CSS Grid & Flexbox', 'Vite', 'Media Queries']
    },
    {
      title: 'Landing Page Development',
      icon: FiMousePointer,
      description: 'Ultra-fast, high-converting single page promotional sites engineered to turn visitors into leads and scale campaigns.',
      features: ['Conversion Rate Optimization', 'SEO Head Tags', 'Interactive Contact Funnels', 'Fast Image Compression'],
      tech: ['React.js', 'Framer Motion', 'Google Fonts', 'Web Analytics']
    },
    {
      title: 'Frontend Development',
      icon: FiLayers,
      description: 'Translating complex designer assets into reactive, high-end visual systems using React and modern styled setups. We animate components for fluid screen responses.',
      features: ['Component-Driven Architecture', 'State Management Integration', 'JSON API Consumption', 'Smooth Web Animations'],
      tech: ['React.js', 'ES6 JavaScript', 'Tailwind v4', 'Vite Bundler']
    },
    {
      title: 'Full Website Development',
      icon: FiDatabase,
      description: 'End-to-end full-stack architectures. Combining modern user dashboards with custom backend processing, admin controllers, and secure API gateways.',
      features: ['Full-Stack Integration', 'Database Schemas', 'Auth & Security Protocols', 'Server Deployments'],
      tech: ['Node.js', 'Express', 'MongoDB / PostgreSQL', 'Firebase']
    },
    {
      title: 'Web Application Development',
      icon: FiCpu,
      description: 'Building intricate software platforms, client portals, real-time collaboration widgets, and custom developer tools engineered for speed and scalability.',
      features: ['Interactive Admin Panels', 'Real-time WebSockets Sync', 'Cloud File Storage', 'High-Scale Computations'],
      tech: ['React SPA', 'RESTful API Services', 'State Reducers', 'Auth0 / JWT']
    },
    {
      title: 'Website Redesign',
      icon: FiShuffle,
      description: 'Converting outdated pages into responsive, fast-loading, and visually premium systems using the latest frontend structures.',
      features: ['UI & Logic Overhauls', 'Speed Optimization Audits', 'SEO Ranking Preservation', 'Legacy Content Migrations'],
      tech: ['Vite + React', 'Tailwind CSS', 'Framer Motion', 'PageSpeed Insights']
    },
    {
      title: 'Website Maintenance & Support',
      icon: FiSettings,
      description: 'Providing constant server inspections, page security audits, bug remedies, and library upgrades to keep your digital assets safe.',
      features: ['24/7 Server Monitoring', 'Regular Security Audits', 'Monthly Package Upgrades', 'Immediate Bug Remediation'],
      tech: ['GitHub Actions', 'SSL Compliance', 'Sentry Logs', 'Database Backups']
    },
    {
      title: 'Website Update Service',
      icon: FiActivity,
      description: 'Swift integrations of new features, content adjustments, module expansions, and package upgrades to keep your site updated.',
      features: ['New Module Additions', 'Copy & Image Updates', 'Framework Version Upgrades', 'API Connection Tweaks'],
      tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'NPM Package Suite']
    }
  ];

  return (
    <div className="w-full min-h-screen text-white bg-dark-bg font-sans pt-28 pb-16">
      
      {/* Page Header */}
      <section className="relative py-16 overflow-hidden circuit-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/2 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold tracking-widest text-neon-green uppercase border border-neon-green/20 bg-neon-green/5 px-3 py-1 rounded-full">
            What We Do
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-bold text-white mt-6 mb-6">
            Elite Digital Services
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed font-sans">
            We provide a wide array of web engineering services styled with modern aesthetics and robust code logic.
          </p>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceDetails.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx} 
                className="glassmorphism-card rounded-2xl p-8 flex flex-col justify-between border-white/5 hover:border-neon-green/20 group text-left"
              >
                <div>
                  {/* Top line icon */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-white/10 transition-colors">
                      <Icon className="w-6 h-6 text-white group-hover:text-neon-green transition-colors" />
                    </div>
                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">
                      SERVICE_0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neon-green transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-white/50 leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-2.5 mb-6 text-xs text-white/70 font-sans">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <FiCheckCircle className="text-neon-green w-3.5 h-3.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stacks Tag */}
                <div>
                  <div className="border-t border-white/5 pt-4 mb-6">
                    <p className="text-[10px] uppercase font-bold text-white/30 tracking-widest mb-2 font-sans">Technologies</p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tech.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[9px] font-mono text-white/70 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-white/5 hover:bg-white hover:text-dark-bg text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-all border border-white/10 hover:border-white"
                  >
                    <span>Order Service</span>
                    <FiArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default Services;
