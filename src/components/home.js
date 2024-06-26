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
                        <h2 className="text-2xl font-bold mb-2">Corporate Videos</h2>
                        <p>At Gringo Media, we specialize in creating high-quality corporate videos that showcase your brand and message in the best possible light. Whether it's an explainer video, product demo, or company overview, we'll work with you to create a video that meets your specific needs and goals.</p>
                    </div>
                    <div className="max-w-sm mb-4 bg-zinc-950 p-5 rounded">
                        <h2 className="text-2xl font-bold mb-2">Event Videos</h2>
                        <p>Capture the excitement and energy of your next event with a professionally produced video. From conferences and trade shows to product launches and charity events, Gringo Media can help you create a video that captures the essence of your event and engages your audience.</p>
                    </div>
                    <div className="max-w-sm mb-4 bg-zinc-950 p-5 rounded">
                        <h2 className="text-2xl font-bold mb-2">Promotional Videos</h2>
                        <p>Looking to promote a new product or service? Let Gringo Media help you create a promotional video that showcases what you have to offer in a creative and compelling way. From concept development to final delivery, we'll work with you every step of the way to ensure your video meets your marketing goals.</p>
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
                        {/* Add more videos as needed */}
                    </Suspense>
                </div>
            </section>
        </div>

    );
};

export default LandingPage;
