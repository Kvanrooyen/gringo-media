'use client';

import { useCallback } from 'react';

export default function Hero() {
  const handleScrollToGallery = useCallback(() => {
    if (typeof window !== 'undefined') {
      const el = document.getElementById('video-gallery');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-primary overflow-hidden">
      {/* Gradient + subtle noise overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/70 to-accent/70 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />

      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight text-accent">
          Gringo Media
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-10 text-accent/90">
          Crafting bold visual stories that captivate and connect audiences worldwide.
        </p>
        <button
          onClick={handleScrollToGallery}
          className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-primary font-semibold rounded-full shadow-2xl hover:scale-105 transform transition duration-300"
        >
          <span>View Our Work</span>
          <span className="block animate-bounce">↓</span>
        </button>
      </div>
    </section>
  );
}
