'use client';
import Script from 'next/script';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 bg-accent text-primary">
      <Script
        src="https://widget.senja.io/widget/f5c18656-c15f-494c-af75-5741165dedf2/platform.js"
        strategy="afterInteractive"
      />
      <h2 className="text-4xl font-semibold text-center mb-12 px-4">What Our Clients Say</h2>
      <div className="w-full">
        {mounted && (
          <div
            className="senja-embed"
            data-id="f5c18656-c15f-494c-af75-5741165dedf2"
            data-mode="shadow"
            data-lazyload="false"
            style={{ display: 'block', width: '100%' }}
          />
        )}
      </div>
    </section>
  );
}