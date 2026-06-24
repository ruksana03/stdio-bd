import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'UI/UX Design',
    budget: '$500 - $1,000',
    details: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API intake submission
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  const services = [
    'UI/UX Design',
    'Responsive Web Design',
    'Landing Page Development',
    'Frontend Development',
    'Full Website Development',
    'Web Application Development',
    'Website Redesign',
    'Website Maintenance & Support',
    'Website Update Service'
  ];

  return (
    <div className="w-full min-h-screen text-white bg-dark-bg font-sans pt-28 pb-16">

      {/* Header */}
      <section className="relative py-16 overflow-hidden circuit-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/2 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold tracking-widest text-neon-green uppercase border border-neon-green/20 bg-neon-green/5 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-bold text-white mt-6 mb-6">
            Let's Collaborate
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed font-sans">
            Ready to upgrade your web layout? Send your specifications and budget to start development.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left info column */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Start a conversation with our developers.
              </h2>
              <p className="text-sm text-white/50 leading-relaxed mb-10 font-sans">
                Whether you have complete Figma layouts ready for frontend compilation, or want us to build a full-stack web platform from scratch, we provide clear estimate budgets and transparent development timelines.
              </p>

              {/* Direct links */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 bg-white/[0.02] border border-white/5 rounded-xl p-5 hover:border-neon-green/20 transition-all duration-300">
                  <div className="p-3 bg-neon-green/10 border border-neon-green/20 rounded-lg text-neon-green">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-1">Office Location</h4>
                    <p className="text-sm text-white font-semibold">Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/[0.02] border border-white/5 rounded-xl p-5 hover:border-neon-green/20 transition-all duration-300">
                  <div className="p-3 bg-neon-green/10 border border-neon-green/20 rounded-lg text-neon-green">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-1">Direct Call</h4>
                    <p className="text-sm text-white font-semibold">+880 1752350135</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/[0.02] border border-white/5 rounded-xl p-5 hover:border-neon-green/20 transition-all duration-300">
                  <div className="p-3 bg-neon-green/10 border border-neon-green/20 rounded-lg text-neon-green">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-1">Email Inquiry</h4>
                    <p className="text-sm text-white font-semibold">stdiobd@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Tag */}
            <div className="hidden lg:block border-t border-white/5 pt-6 mt-10">
              <span className="text-[10px] text-white/30 font-mono tracking-widest uppercase">
                STDIO BD - RESPONSE TIMELINE UNDER 12 HOURS
              </span>
            </div>

          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div className="glassmorphism rounded-2xl p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">

              {submitted ? (
                <div className="py-16 text-center flex flex-col items-center justify-center">
                  <div className="p-4 bg-neon-green/10 border border-neon-green/20 rounded-full text-neon-green mb-6 animate-bounce">
                    <FiCheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Intake Received</h3>
                  <p className="text-xs text-white/50 max-w-sm mx-auto leading-relaxed font-sans mb-8">
                    Thank you for reaching out to Stdio BD. Our engineers will inspect your requirements and contact you via email shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-lg transition-all"
                  >
                    Send Another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="text-left flex flex-col gap-6 relative z-10">

                  {/* Name field */}
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-white/60 tracking-wider mb-2 font-sans">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-green transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-white/60 tracking-wider mb-2 font-sans">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-green transition-all"
                    />
                  </div>

                  {/* Dropdown for Services */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-white/60 tracking-wider mb-2 font-sans">Required Service</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#0a0c10] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-green transition-all appearance-none cursor-pointer"
                      >
                        {services.map((svc) => (
                          <option key={svc} value={svc} className="bg-[#0a0c10] text-white py-2">{svc}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold text-white/60 tracking-wider mb-2 font-sans">Project Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#0a0c10] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-green transition-all appearance-none cursor-pointer"
                      >
                        <option value="Under $500">Under $500</option>
                        <option value="$500 - $1,000">$500 - $1,000</option>
                        <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                        <option value="$3,000+">$3,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Details textarea */}
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-white/60 tracking-wider mb-2 font-sans">Project Requirements</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Please outline your platform specifications, page counts, or references..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-green transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary-green hover:bg-neon-green text-dark-bg py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-green-500/20 border border-primary-green hover:border-neon-green flex items-center justify-center gap-2 glow-green-sm"
                  >
                    <span>Submit Request</span>
                    <FiSend className="w-3.5 h-3.5" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
