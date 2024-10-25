// LandingPage.js

import React, { lazy, Suspense } from 'react';
import backgroundImage from '../assets/DSC03310.webp';

const LandingPage = () => {

    const LazyVimeoVideo = lazy(() => import('./VimeoVideo'));

    const scrollToServices = () => {
        const servicesSection = document.getElementById('services-section');

        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="landing-page">

            {/* Hero Section with Background Image and CTA */}
            <section
                className="hero-section relative min-h-screen flex items-center justify-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="max-w-2xl text-center relative z-10">
                    <h1 className="text-5xl font-bold text-zinc-100 mb-4">Gringo Media</h1>
                    <p className="text-lg text-zinc-200 mb-8">Welcome to our creative world.</p>
                    <button onClick={scrollToServices} className="bg-zinc-800 text-white py-2 px-4 rounded-full inline-block font-bold text-lg">See Our Services</button>
                </div>
            </section>

            {/* Services Section with Three Columns */}
            <section id="services-section" className="services-section p-8 bg-zinc-950 text-white">
                <div className="flex flex-wrap justify-around">
                    <div className="max-w-sm mb-4 bg-zinc-950 p-5 rounded">
                        <h2 className="text-2xl font-bold mb-2">Branded Storytelling</h2>
                        <p>At Gringo Media, we excel in crafting compelling narratives that highlight your brand's unique journey and values. Whether it's a powerful testimonial, a documentary-style feature, or a company overview, we'll help you tell your story in a way that resonates deeply with your audience and enhances your brand identity.</p>
                    </div>
                    <div className="max-w-sm mb-4 bg-zinc-950 p-5 rounded">
                        <h2 className="text-2xl font-bold mb-2">Event Highlights & Recaps</h2>
                        <p>Capture the energy, emotion, and key moments of your events with our expertly produced highlight reels and recap videos. From conferences and product launches to charity events and corporate gatherings, Gringo Media will help you create visually engaging videos that not only document the event but also amplify its impact.</p>
                    </div>
                    <div className="max-w-sm mb-4 bg-zinc-950 p-5 rounded">
                        <h2 className="text-2xl font-bold mb-2">Social Media Video Content</h2>
                        <p>In today’s digital landscape, having high-quality, engaging content on social media is crucial. Gringo Media specializes in creating eye-catching, shareable videos designed specifically for social platforms. Whether promoting a new product or highlighting client services, our videos will help you enhance your online presence and connect with your audience in a meaningful way.</p>
                    </div>
                </div>
            </section>

            {/* Work Section to Showcase Previous Videos */}
            <section className="work-section py-16 text-center bg-zinc-950 text-white">
                <h2 className="text-3xl font-bold mb-8">Our Work</h2>
                <div className="flex flex-wrap justify-around">
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyVimeoVideo videoId="872188465" title="Journey to Partner" />
                        <LazyVimeoVideo videoId="926669134" title="Client Testimonial: Zirona & Clearspace" />
                        <LazyVimeoVideo videoId="935446343" title="The Future Beauty Show | BTL Ireland Highlight Reel" />
                         <LazyVimeoVideo videoId="1023237436" title="Ubuntu Family Chiropractic Testimonial" />
                        {/* Add more videos as needed */}
                    </Suspense>
                </div>
            </section>
        </div>

    );
};

export default LandingPage;
