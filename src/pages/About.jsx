import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiCode, FiHeart, FiLayers, FiShield, FiTarget, FiZap } from 'react-icons/fi';

const About = () => {
  const workflow = [
    {
      title: 'Discover',
      icon: FiTarget,
      description: 'We clarify business goals, audience needs, content priorities, and the conversion path before design begins.'
    },
    {
      title: 'Design',
      icon: FiLayers,
      description: 'We create clean UI systems, responsive layouts, and polished user journeys that feel premium on every screen.'
    },
    {
      title: 'Develop',
      icon: FiCode,
      description: 'We turn approved designs into fast, maintainable React websites and web apps with scalable component logic.'
    },
    {
      title: 'Support',
      icon: FiShield,
      description: 'We keep products healthy after launch with updates, bug fixes, performance checks, and technical care.'
    }
  ];

  const highlights = [
    'Responsive pages built for mobile, tablet, laptop, and desktop users',
    'Clean frontend architecture that stays easy to update as the business grows',
    'Performance-aware builds focused on speed, clarity, and conversion',
    'Reliable post-launch support for new content, fixes, and feature improvements'
  ];

  return (
    <div className="w-full min-h-screen text-white bg-dark-bg font-sans pt-28 pb-16">

      {/* 1. Header Hero */}
      <section className="relative py-16 overflow-hidden circuit-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/5 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold tracking-widest text-neon-green uppercase border border-neon-green/20 bg-neon-green/5 px-3 py-1 rounded-full">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-bold text-white mt-6 mb-6">
            Engineering the <br />
            <span className="text-neon-green">Next-Generation</span> Web
          </h1>
          <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto font-sans">
            We are Stdio BD. A premium creative studio building pixel-perfect digital structures that blend art with logical performance.
          </p>
        </div>
      </section>

      {/* 2. Brand Values Bento */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glassmorphism-card p-8 rounded-2xl text-left border-white/5">
            <FiCode className="w-8 h-8 text-neon-green mb-6" />
            <h3 className="text-lg font-bold text-white mb-3">Clean Code Logic</h3>
            <p className="text-sm text-white/50 leading-relaxed font-sans">
              We compile light, semantic, and modular React frameworks without templates to maximize loading speed.
            </p>
          </div>
          <div className="glassmorphism-card p-8 rounded-2xl text-left border-white/5">
            <FiLayers className="w-8 h-8 text-neon-green mb-6" />
            <h3 className="text-lg font-bold text-white mb-3">Asymmetric Design</h3>
            <p className="text-sm text-white/50 leading-relaxed font-sans">
              From glassmorphism overlays to custom bento layouts, our visuals wow visitors at first glance.
            </p>
          </div>
          <div className="glassmorphism-card p-8 rounded-2xl text-left border-white/5">
            <FiHeart className="w-8 h-8 text-neon-green mb-6" />
            <h3 className="text-lg font-bold text-white mb-3">Client Happiness</h3>
            <p className="text-sm text-white/50 leading-relaxed font-sans">
              We offer dedicated maintenance systems, update logs, and 24/7 technical monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Company Process Section */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[420px] h-[420px] bg-neon-green/5 rounded-full filter blur-[130px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <span className="text-xs font-bold tracking-widest text-neon-green uppercase border border-neon-green/20 bg-neon-green/5 px-3 py-1 rounded-full">
              How We Build
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mt-4 mb-4">
              A Practical System for Better Websites
            </h2>
            <p className="text-white/50 text-sm">
              Stdio BD helps businesses turn ideas into polished digital products with a clear process, focused design, and reliable development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
            <div className="lg:col-span-5 glassmorphism-card rounded-2xl p-8 border-white/5 text-left flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-neon-green/10 border border-neon-green/20 flex items-center justify-center mb-6">
                  <FiZap className="w-6 h-6 text-neon-green" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Built for Business Growth</h3>
                <p className="text-sm text-white/60 leading-relaxed font-sans mb-6">
                  We do more than make pages look modern. Every project is shaped around the business goal: getting inquiries, presenting services clearly, improving trust, and making future updates easier.
                </p>
                <p className="text-sm text-white/50 leading-relaxed font-sans">
                  From landing pages to full web applications, we combine UI/UX thinking with frontend engineering so the final product feels fast, clear, and ready for real customers.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-10 pt-6 border-t border-white/5">
                <div>
                  <p className="text-2xl font-bold text-neon-green">10+</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Projects Delivered</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-neon-green">24/7</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Support Mindset</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {workflow.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="glassmorphism-card rounded-2xl p-7 border-white/5 text-left group hover:border-neon-green/20">
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-neon-green/10 transition-colors">
                        <Icon className="w-5 h-5 text-white group-hover:text-neon-green transition-colors" />
                      </div>
                      <span className="text-[10px] font-mono text-white/30 tracking-widest">
                        STEP_0{idx + 1}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-neon-green transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-white/50 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 glassmorphism-card rounded-2xl p-8 border-white/5 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3 text-left">
                  <FiCheckCircle className="w-5 h-5 text-neon-green shrink-0 mt-0.5" />
                  <p className="text-sm text-white/60 leading-relaxed font-sans">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Contact CTA */}
      <section className="py-16 text-center max-w-4xl mx-auto px-6">
        <div className="glassmorphism rounded-2xl p-12 border-white/5">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Want to build a stronger digital presence?</h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-8 leading-relaxed font-sans">
            Contact us today to discuss your next responsive web application, landing page build, or platform redesign.
          </p>
          <Link
            to="/contact"
            className="bg-neon-green hover:bg-emerald-500 text-dark-bg font-bold px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-colors inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;
