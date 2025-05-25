'use client';
import { useCallback } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const handleScrollToGallery = useCallback(() => {
    if (typeof window !== 'undefined') {
      const el = document.getElementById('video-gallery');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/85" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight text-accent"
        >
          Gringo Media
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-10 text-accent/90"
        >
          Crafting bold visual stories that captivate and connect audiences worldwide.
        </motion.p>
        <button
          onClick={handleScrollToGallery}
          className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-primary font-semibold rounded-full shadow-2xl hover:scale-105 transform transition duration-300"
        >
          <span>View Our Work</span>
          <span className="block animate-bounce">↓</span>
        </button>
      </motion.div>
    </section>
  );
}
