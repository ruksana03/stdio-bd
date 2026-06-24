import React from 'react';
import { FiCalendar, FiClock, FiUser, FiArrowRight } from 'react-icons/fi';

const Blog = () => {
  const posts = [
    {
      title: 'Vite & Tailwind CSS v4: The Developer Setup Guide',
      excerpt: 'Exploring the new import structures and theme variable definitions in CSS using the latest Tailwind CSS v4 spec. We examine layout performance improvements.',
      category: 'Engineering',
      date: 'June 22, 2026',
      readTime: '4 min read',
      author: 'Stdio BD',
      image: '/assets/webspeed.png'
    },
    {
      title: 'Figma UI/UX Mockups: Streamlining Frontend Conversions',
      excerpt: 'How creating clean design system tokens in Figma speeds up developer implementation timelines. Learn about grid mappings and micro-interactions.',
      category: 'Design',
      date: 'June 19, 2026',
      readTime: '6 min read',
      author: 'Stdio BD',
      image: '/assets/admindashboard.png'
    },
    {
      title: 'SEO Head & Speed Optimizations for High Conversions',
      excerpt: 'Improving Core Web Vitals (LCP, INP) in modern web applications. Tips on image resizing, font formats, and responsive script packaging.',
      category: 'Marketing',
      date: 'June 12, 2026',
      readTime: '5 min read',
      author: 'Stdiobd',
      image: '/assets/seo.png'
    }
  ];

  return (
    <div className="w-full min-h-screen text-white bg-dark-bg font-sans pt-28 pb-16">

      {/* Header */}
      <section className="relative py-16 overflow-hidden circuit-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/5 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold tracking-widest text-neon-green uppercase border border-neon-green/20 bg-neon-green/5 px-3 py-1 rounded-full">
            Developer Log
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-bold text-white mt-6 mb-6">
            Latest Insights
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed font-sans">
            Read engineering thoughts, layout designs, and web performance tutorials written by Stdio BD devs.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="glassmorphism rounded-2xl overflow-hidden border-white/5 flex flex-col group hover:border-neon-green/20 transition-colors"
            >
              {/* Image Frame */}
              <div className="w-full aspect-[16/9] bg-white/5 relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-center transition-transform duration-750 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/600x340/ffffff/1a1a1a?text=BLOG+POST";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 bg-primary-green text-dark-bg text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md border border-primary-green">
                  {post.category}
                </span>
              </div>

              {/* Text details */}
              <div className="p-6 text-left flex-grow flex flex-col justify-between">
                <div>

                  {/* Meta items */}
                  <div className="flex items-center gap-4 text-[10px] text-white/40 mb-4 font-mono">
                    <span className="flex items-center gap-1">
                      <FiCalendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <FiClock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-neon-green transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed font-sans mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-4 flex justify-between items-center mt-auto">
                  <span className="flex items-center gap-1.5 text-xs text-white/60">
                    <FiUser className="w-3.5 h-3.5 text-neon-green" />
                    <span>{post.author}</span>
                  </span>

                  <a
                    href="#"
                    className="text-xs font-semibold text-white/80 hover:text-neon-green transition-colors flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <FiArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </article>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Blog;
