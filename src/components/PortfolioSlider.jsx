import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FiArrowUpRight } from 'react-icons/fi';

const PortfolioSlider = () => {
  const projects = [
    {
      title: 'Mans Premium apperience',
      category: 'E-commerch',
      image: '/assets/project-images/flora-fit.png',
      url: 'https://florafit.netlify.app/',
      description: 'A clean footwear brand website with responsive product sections, stylish visual presentation, and simple conversion-focused layout.',
      tech: ['HTML5', 'CSS3', 'Bootstrap']
    },
    {
      title: 'JustHome Real Estate',
      category: 'Business',
      image: '/assets/project-images/justhome.png',
      url: 'https://justhomereal.netlify.app/',
      description: 'A real estate business website designed to present property listings, trusted service details, and lead-focused contact actions.',
      tech: ['HTML5', 'CSS3', 'Bootstrap']
    },
    {
      title: 'Portfolio Website',
      category: 'Portfolio',
      image: '/assets/project-images/portfolio.png',
      url: 'https://fitarsiamportfolio.netlify.app/',
      description: 'A personal developer portfolio showcasing skills, project work, contact details, and a polished responsive presentation.',
      tech: ['HTML5', 'CSS3', 'Bootstrap']
    },
    {
      title: 'NuriGlow Store BD',
      category: 'E-Commerce',
      image: '/assets/project-images/nuriglow.png',
      url: 'https://nuriglow-store-bd.web.app/',
      description: 'A React-powered online store for beauty and skincare products with product browsing, storefront UI, and shopping-focused flow.',
      tech: ['React.js', 'Firebase', 'CSS']
    },

    {
      title: 'InnovateEd',
      category: 'Educational website ',
      image: '/assets/project-images/innovated-bd.png',
      url: 'https://innavated.web.app/',
      description: 'A modern education platform interface with React, Redux state flow, responsive Tailwind styling, and structured learning content.',
      tech: ['React.js', 'Redux', 'Tailwind CSS']
    },
    {
      title: 'Bigspring Business Platform',
      category: 'Business',
      image: '/assets/project-images/bigspring-business.png',
      url: 'https://lucent-biscuit-173f0a.netlify.app/',
      description: 'A Next.js business platform built for corporate presentation, service storytelling, and polished marketing page performance.',
      tech: ['Next.js', 'Tailwind CSS']
    },
    {
      title: 'BUBT academia',
      category: 'Educational',
      image: '/assets/project-images/bubt-academia.png',
      url: 'https://fitarsiam377.github.io/BUBT-Academia-Project-Prototype-/',
      description: 'A Figma-inspired UI implementation converted into responsive HTML, Tailwind CSS, and JavaScript sections.',
      tech: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'Figma']
    },
    {
      title: 'CyberGuard',
      category: 'Business',
      image: '/assets/project-images/cyber-guard.png',
      url: 'https://resplendent-sawine-828781.netlify.app/',
      description: 'A fast Next.js website with modern page composition, reusable sections, and production-ready responsive layout.',
      tech: ['Next.js', 'React.js', 'CSS']
    },
    {
      title: 'ÈLVORA',
      category: 'e-commerce ',
      image: '/assets/admindashboard.png',
      url: 'https://client-zeta-five-75.vercel.app/',
      description: 'A client-facing React application deployed on Vercel with component-based UI, responsive views, and polished frontend flow.',
      tech: ['React.js', 'Vercel', 'CSS']
    },
    {
      title: 'Furnito Furnitur',
      category: 'e-commerce ',
      image: '/assets/project-images/furniro-furnitur.png',
      url: "https://fitarsiam377.github.io/furniro-e-commerce-website-/",
      description: 'A client-facing React application deployed on Vercel with component-based UI, responsive views, and polished frontend flow.',
      tech: ['React.js', 'Vercel', 'CSS']
    }
  ];
  return (
    <section className="py-24 bg-[#0a0c14] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-neon-green/2 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-neon-green/3 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl text-left">
            <span className="text-xs font-bold tracking-widest text-neon-green uppercase border border-neon-green/20 bg-neon-green/5 px-3 py-1 rounded-full">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mt-4 mb-4">
              Featured Work
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Explore our latest frontend builds, full-stack systems, and pixel-perfect design files delivered with top-tier efficiency.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex gap-2">
            {/* Custom nav styling handled by Swiper standard controls */}
          </div>
        </div>

        {/* Swiper Coverflow Showcase */}
        <div className="w-full py-8">
          <Swiper
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 35,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            className="w-full max-w-[1000px] pb-14"
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2.2,
              }
            }}
          >
            {projects.map((proj, idx) => (
              <SwiperSlide key={idx} className="w-[320px] sm:w-[450px] aspect-[4/3] rounded-2xl overflow-hidden glassmorphism border border-white/10 group relative select-none">

                {/* Image Wrap */}
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-transparent opacity-90 group-hover:via-dark-bg/60 transition-all duration-300" />
                </div>

                {/* Live Link */}
                <div className="absolute top-4 right-4 z-20">
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-dark-bg/85 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-white shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-neon-green/40 hover:bg-neon-green hover:text-dark-bg hover:shadow-neon-green/20"
                    title={`Open ${proj.title}`}
                  >
                    <span>Live Link</span>
                    <FiArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* Card Content (Bottom overlay) */}
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col items-start text-left z-10">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-neon-green mb-2">
                    {proj.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-neon-green transition-colors duration-300">
                    {proj.title}
                  </h3>

                  {/* Tech stack badge row */}
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-mono font-medium text-white/60 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default PortfolioSlider;
