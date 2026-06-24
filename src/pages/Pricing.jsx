import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck, FiCpu, FiGlobe, FiMapPin, FiShield } from 'react-icons/fi';

const Pricing = () => {
  const [activeMarket, setActiveMarket] = useState('local');
  const [calculator, setCalculator] = useState({
    pages: 1,
    uiux: false,
    database: false,
    ecommerce: false,
    seo: false,
  });

  const calculatorRates = {
    local: {
      label: 'Bangladesh',
      currency: 'BDT',
      basePrice: 25000,
      pricePerPage: 6000,
      uiuxCost: 15000,
      dbCost: 50000,
      ecomCost: 45000,
      seoCost: 12000,
    },
    international: {
      label: 'International',
      currency: 'USD',
      basePrice: 350,
      pricePerPage: 100,
      uiuxCost: 250,
      dbCost: 900,
      ecomCost: 700,
      seoCost: 200,
    }
  };

  const calculateEstimate = () => {
    const rates = calculatorRates[activeMarket];
    let total = rates.basePrice + (calculator.pages - 1) * rates.pricePerPage;
    if (calculator.uiux) total += rates.uiuxCost;
    if (calculator.database) total += rates.dbCost;
    if (calculator.ecommerce) total += rates.ecomCost;
    if (calculator.seo) total += rates.seoCost;
    return total;
  };

  const formatMoney = (amount, market) => {
    if (market === 'local') {
      return `BDT ${amount.toLocaleString('en-US')}`;
    }
    return `$${amount.toLocaleString('en-US')}`;
  };

  const servicePackages = [
    {
      name: 'Launch Pack',
      tag: 'New business',
      localPrice: 'BDT 25,000 - 40,000',
      internationalPrice: '$350 - $650',
      description: 'A focused package for startups, personal brands, campaigns, and service launches that need a premium first impression.',
      services: [
        'UI/UX Design',
        'Responsive Web Design',
        'Landing Page Development'
      ],
      features: [
        '1 high-converting landing page',
        'Mobile-first responsive layout',
        'Lead form or WhatsApp CTA',
        'Basic SEO structure',
        '7 days minor update support'
      ],
      timeline: '5-7 days',
      cta: 'Start Launch Pack',
      popular: false,
    },
    {
      name: 'Business Website Pack',
      localPrice: 'BDT 65,000 - 110,000',
      internationalPrice: '$900 - $1,800',
      tag: 'Most requested',
      description: 'A complete company website for agencies, shops, clinics, education brands, and professional service businesses.',
      services: [
        'UI/UX Design',
        'Responsive Web Design',
        'Frontend Development',
        'Full Website Development'
      ],
      features: [
        'Up to 5 custom pages',
        'Figma-style UI direction',
        'Reusable frontend sections',
        'Contact and service pages',
        '1 month maintenance support'
      ],
      timeline: '10-15 days',
      cta: 'Choose Business Pack',
      popular: true,
    },
    {
      name: 'Growth & Care Pack',
      tag: 'Existing website',
      localPrice: 'BDT 40,000 - 85,000',
      internationalPrice: '$650 - $1,500',
      description: 'A practical package for brands that already have a site and need a redesign, performance fixes, content updates, or ongoing care.',
      services: [
        'Website Redesign',
        'Website Maintenance & Support',
        'Website Update Service',
        'Responsive Web Design'
      ],
      features: [
        'Visual redesign or section rebuilds',
        'Speed and layout improvements',
        'Content and image updates',
        'Bug fixes and compatibility checks',
        'Maintenance plan available'
      ],
      timeline: '7-14 days',
      cta: 'Upgrade Website',
      popular: false,
    },
    {
      name: 'Custom Web App Pack',
      tag: 'Advanced build',
      localPrice: 'BDT 160,000 - 450,000+',
      internationalPrice: '$2,500 - $8,000+',
      description: 'A custom software package for dashboards, portals, booking systems, SaaS tools, admin panels, and database-driven workflows.',
      services: [
        'UI/UX Design',
        'Frontend Development',
        'Web Application Development',
        'Full Website Development',
        'Website Maintenance & Support'
      ],
      features: [
        'Custom app architecture',
        'Dashboard or portal interface',
        'Database and API planning',
        'Login, admin, or payment flow',
        '2 months technical support'
      ],
      timeline: '4-8 weeks',
      cta: 'Plan Web App',
      popular: false,
    }
  ];

  const PricingCard = ({ tier }) => (
    <div
      className={`glassmorphism-card rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${
        tier.popular ? 'border-neon-green/30 glow-green' : 'border-white/5 hover:border-neon-green/20'
      }`}
    >
      {tier.popular && (
        <div className="absolute top-0 right-0 bg-neon-green text-dark-bg text-[9px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-bl-xl">
          Popular
        </div>
      )}

      <div className="text-left">
        <div className="flex items-center justify-between gap-4 mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-neon-green bg-neon-green/10 border border-neon-green/20 px-3 py-1 rounded-full">
            {tier.tag}
          </span>
          <span className="text-[10px] font-mono text-white/30 uppercase">{tier.timeline}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3">{tier.name}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
            <p className="text-[10px] text-white/35 uppercase font-bold tracking-widest mb-2">Local BD</p>
            <p className="text-xl font-extrabold text-white">{tier.localPrice}</p>
          </div>
          <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
            <p className="text-[10px] text-white/35 uppercase font-bold tracking-widest mb-2">International</p>
            <p className="text-xl font-extrabold text-white">{tier.internationalPrice}</p>
          </div>
        </div>
        <p className="text-sm text-white/50 leading-relaxed font-sans mb-8">
          {tier.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {tier.services.map((service) => (
            <span key={service} className="text-[9px] font-mono text-white/65 bg-white/5 border border-white/10 rounded-full px-2.5 py-1">
              {service}
            </span>
          ))}
        </div>

        <hr className="border-white/5 mb-8" />

        <ul className="flex flex-col gap-4 text-xs font-sans text-white/70 mb-8">
          {tier.features.map((feat) => (
            <li key={feat} className="flex items-start gap-3">
              <FiCheck className="text-neon-green w-4 h-4 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        to="/contact"
        className={`w-full py-3 text-center rounded-lg text-xs font-bold uppercase tracking-wider transition-all border flex items-center justify-center gap-2 ${
          tier.popular
            ? 'bg-neon-green text-dark-bg border-neon-green hover:bg-emerald-500 hover:border-emerald-500 shadow-md hover:shadow-green-500/20'
            : 'bg-white/5 text-white border-white/10 hover:bg-white hover:text-dark-bg hover:border-white'
        }`}
      >
        <span>{tier.cta}</span>
        <FiArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );

  return (
    <div className="w-full min-h-screen text-white bg-dark-bg font-sans pt-28 pb-16">
      
      {/* Header */}
      <section className="relative py-16 overflow-hidden circuit-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/5 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold tracking-widest text-neon-green uppercase border border-neon-green/20 bg-neon-green/5 px-3 py-1 rounded-full">
            Pricing Plans
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-bold text-white mt-6 mb-6">
            Service Packages That Make Sense
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed font-sans">
            Four professional packages built from our 9 core services, with separate local BD and international price ranges.
          </p>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glassmorphism-card rounded-2xl p-8 border-white/5 text-left">
            <FiMapPin className="w-8 h-8 text-neon-green mb-5" />
            <h2 className="text-2xl font-bold text-white mb-3">Local Pricing: Bangladesh</h2>
            <p className="text-sm text-white/55 leading-relaxed font-sans">
              BDT-based packages for Bangladeshi startups, local brands, service businesses, and organizations that need reliable digital presence with practical budgets.
            </p>
          </div>
          <div className="glassmorphism-card rounded-2xl p-8 border-white/5 text-left">
            <FiGlobe className="w-8 h-8 text-neon-green mb-5" />
            <h2 className="text-2xl font-bold text-white mb-3">International Pricing</h2>
            <p className="text-sm text-white/55 leading-relaxed font-sans">
              USD-based packages for global clients who need premium UI/UX, frontend development, web apps, async collaboration, and structured delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 max-w-7xl mx-auto px-6 border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-neon-green uppercase border border-neon-green/20 bg-neon-green/5 px-3 py-1 rounded-full">
              Client Packages
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4">Choose the Right Scope</h2>
            <p className="text-sm text-white/55 leading-relaxed font-sans">
              These packages group your services around real client needs: launch, business growth, redesign/support, and custom web applications.
            </p>
          </div>
          <div className="flex items-center gap-3 text-left bg-white/[0.02] border border-white/5 rounded-xl px-5 py-4">
            <FiShield className="w-5 h-5 text-neon-green shrink-0" />
            <p className="text-xs text-white/50 leading-relaxed">Prices are practical starting ranges. Final quotes depend on scope, content, integrations, and deadline.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicePackages.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>
      </section>

      {/* Interactive Estimator Calculator */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="glassmorphism rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden text-left">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-neon-green/3 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FiCpu className="text-neon-green w-6 h-6" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">Dynamic Cost Calculator</h2>
              </div>
              <p className="text-xs text-white/50 leading-relaxed max-w-xl font-sans">
                Select a market, adjust page count, and add modules to estimate a custom project scope.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 bg-white/[0.03] border border-white/10 rounded-xl p-1">
              {[
                { id: 'local', label: 'BD Local' },
                { id: 'international', label: 'Global' }
              ].map((market) => (
                <button
                  key={market.id}
                  type="button"
                  onClick={() => setActiveMarket(market.id)}
                  className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
                    activeMarket === market.id
                      ? 'bg-neon-green text-dark-bg shadow-md'
                      : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {market.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Controls */}
            <div className="flex flex-col gap-6">
              
              {/* Slider for Pages */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-white/70">Number of Pages</span>
                  <span className="text-sm font-bold text-neon-green bg-neon-green/10 border border-neon-green/20 px-2.5 py-0.5 rounded-full font-mono">{calculator.pages}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={calculator.pages}
                  onChange={(e) => setCalculator({ ...calculator, pages: parseInt(e.target.value) })}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-neon-green"
                />
              </div>

              {/* Checkboxes */}
              <div className="flex flex-col gap-4 border-t border-white/5 pt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-white/70 mb-2">Include Modules</p>
                
                <label className="flex items-center gap-3 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    checked={calculator.uiux}
                    onChange={(e) => setCalculator({ ...calculator, uiux: e.target.checked })}
                    className="w-4 h-4 rounded bg-white/5 border border-white/10 text-neon-green focus:ring-0 focus:ring-offset-0 cursor-pointer"
                  />
                  <div className="text-left font-sans">
                    <p className="text-xs font-bold text-white group-hover:text-neon-green transition-colors">Figma UI/UX Mockup</p>
                    <p className="text-[10px] text-white/40">{formatMoney(calculatorRates[activeMarket].uiuxCost, activeMarket)} add-on</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    checked={calculator.database}
                    onChange={(e) => setCalculator({ ...calculator, database: e.target.checked })}
                    className="w-4 h-4 rounded bg-white/5 border border-white/10 text-neon-green focus:ring-0 focus:ring-offset-0 cursor-pointer"
                  />
                  <div className="text-left font-sans">
                    <p className="text-xs font-bold text-white group-hover:text-neon-green transition-colors">Database & API Backend</p>
                    <p className="text-[10px] text-white/40">{formatMoney(calculatorRates[activeMarket].dbCost, activeMarket)} add-on</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    checked={calculator.ecommerce}
                    onChange={(e) => setCalculator({ ...calculator, ecommerce: e.target.checked })}
                    className="w-4 h-4 rounded bg-white/5 border border-white/10 text-neon-green focus:ring-0 focus:ring-offset-0 cursor-pointer"
                  />
                  <div className="text-left font-sans">
                    <p className="text-xs font-bold text-white group-hover:text-neon-green transition-colors">E-Commerce Payments</p>
                    <p className="text-[10px] text-white/40">{formatMoney(calculatorRates[activeMarket].ecomCost, activeMarket)} add-on</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    checked={calculator.seo}
                    onChange={(e) => setCalculator({ ...calculator, seo: e.target.checked })}
                    className="w-4 h-4 rounded bg-white/5 border border-white/10 text-neon-green focus:ring-0 focus:ring-offset-0 cursor-pointer"
                  />
                  <div className="text-left font-sans">
                    <p className="text-xs font-bold text-white group-hover:text-neon-green transition-colors">Advanced SEO Campaign</p>
                    <p className="text-[10px] text-white/40">{formatMoney(calculatorRates[activeMarket].seoCost, activeMarket)} add-on</p>
                  </div>
                </label>

              </div>
            </div>

            {/* Display Estimate Quote */}
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-8 flex flex-col justify-between items-center text-center">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 font-mono">
                  {calculatorRates[activeMarket].label} Estimate
                </span>
                <div className="text-5xl font-extrabold text-neon-green my-6 font-sans glow-green-sm">
                  {formatMoney(calculateEstimate(), activeMarket)}
                </div>
                <p className="text-xs text-white/40 leading-relaxed font-sans px-4">
                  Final pricing depends on content, integrations, revisions, and project timeline.
                </p>
              </div>

              <Link
                to="/contact"
                className="mt-8 bg-primary-green hover:bg-neon-green text-dark-bg text-xs font-bold uppercase tracking-wider py-3 px-8 rounded-lg border border-primary-green hover:border-neon-green transition-all duration-300 shadow-md hover:shadow-green-500/20"
              >
                Book Consultation
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Pricing;
