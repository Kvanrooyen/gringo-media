// LandingPage.js

import React from 'react';
import VimeoVideo from './VimeoVideo';
import backgroundImage from '../assets/DSC03310.jpg';

const LandingPage = () => {

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
                    <h1 className="text-5xl font-bold text-white mb-4">Gringo Media</h1>
                    <p className="text-lg text-white mb-8">Welcome to our creative world.</p>
                    <button onClick={scrollToServices} className="bg-gray-800 text-white py-2 px-4 rounded-full inline-block font-bold text-lg">See Our Services</button>
                </div>
            </section>

            {/* Services Section with Three Columns */}
            <section id="services-section" className="services-section p-8 bg-gray-100">
                <div className="flex flex-wrap justify-around">
                    <div className="max-w-sm mb-4 bg-white p-5 rounded shadow-md">
                        <h2 className="text-2xl font-bold mb-2">Corporate Videos</h2>
                        <p>At Gringo Media, we specialize in creating high-quality corporate videos that showcase your brand and message in the best possible light. Whether it's an explainer video, product demo, or company overview, we'll work with you to create a video that meets your specific needs and goals.</p>
                    </div>
                    <div className="max-w-sm mb-4 bg-white p-5 rounded shadow-md">
                        <h2 className="text-2xl font-bold mb-2">Event Videos</h2>
                        <p>Capture the excitement and energy of your next event with a professionally produced video. From conferences and trade shows to product launches and charity events, Gringo Media can help you create a video that captures the essence of your event and engages your audience.</p>
                    </div>
                    <div className="max-w-sm mb-4 bg-white p-5 rounded shadow-md">
                        <h2 className="text-2xl font-bold mb-2">Promotional Videos</h2>
                        <p>Looking to promote a new product or service? Let Gringo Media help you create a promotional video that showcases what you have to offer in a creative and compelling way. From concept development to final delivery, we'll work with you every step of the way to ensure your video meets your marketing goals.</p>
                    </div>
                </div>
            </section>

            {/* Work Section to Showcase Previous Videos */}
            <section className="work-section py-16 text-center">
                <h2 className="text-3xl font-bold mb-8">Our Work</h2>
                <div className="flex flex-wrap justify-around">
                    {/* Add Vimeo videos dynamically */}
                    <VimeoVideo videoId="872188465" title="Journey to Partner" />
                    <VimeoVideo videoId="834207852" title="Gustavo's Red Carpet" />
                    <VimeoVideo videoId="840556219" title="Belíssima Body & Mind Spa" />
                    {/* Add more videos as needed */}
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
