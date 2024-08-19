import React, { useEffect } from "react";
import HeroImage from '../assets/about-hero.webp';
import KeaganPhoto from '../assets/keagan.webp'
import Map from '../components/map.js';

const AboutUs = () => {
    useEffect(() => {
        // Check if Senja.io script is already loaded
        const existingScript = document.querySelector('script[src="https://static.senja.io/dist/platform.js"]');

        if (!existingScript) {
            // If not loaded, append the script
            const script = document.createElement('script');
            script.src = 'https://static.senja.io/dist/platform.js';
            script.async = true;
            document.head.appendChild(script);

            // Clean up when the component unmounts
            return () => {
                document.head.removeChild(script);
            };
        }
    }, []);

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about-section');

        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="about-us">
            <section
                className="hero-section relative min-h-screen flex items-center justify-center"
                style={{
                    backgroundImage: `url(${HeroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
                <div className="max-w-2xl text-center relative z-10 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Gringo Media</h1>
                    <p className="text-base md:text-lg mb-8" >
                        Gringo Media is a full-service film production company...
                    </p>
                    <button onClick={scrollToAbout} className="bg-gray-800 text-white py-2 px-4 rounded-full inline-block font-bold text-lg">Read More</button>
                </div>
            </section>
            {/* About Gringo Media Section */}
            <section id="about-section" className="about-section p-8 bg-zinc-950 text-white" >
                <div className="max-w-5xl mx-auto" >
                    <h2 className="text-3xl font-bold mb-4" > About Gringo Media </h2>
                    <p>
                        At Gringo Media, storytelling is at the heart of everything we do. We believe that every brand has a unique story waiting to be told, and we’re passionate about bringing those stories to life through captivating videos. Founded by Keagan, whose background in photography has honed his keen eye for detail and creativity, we approach each project with a blend of artistic vision and strategic insight.
                        <br /> <br />
                        Whether it's through compelling branded storytelling, dynamic event highlights, or engaging social media content, we’re dedicated to capturing the essence of your brand and transforming it into visual content that resonates with your audience. At Gringo Media, we don’t just make videos—we craft experiences that elevate your brand and connect with viewers on a deeper level.
                        <br /><br />
                        Let us help you take your brand to new heights with Gringo Media.
                    </p>
                </div>
            </section>

            <section className="team-section p-8 bg-zinc-950 text-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Our Team</h2>
                    <div className="flex flex-wrap">
                        <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 p-4">
                            <div className="relative">
                                <div className="bg-zinc-900 h-48 sm:h-64 lg:h-80 overflow-hidden rounded-lg relative">
                                    <img
                                        src={KeaganPhoto}
                                        alt="Keagan"
                                        loading="lazy"
                                        className="w-full h-full object-cover object-center absolute inset-0"
                                        style={{
                                            objectPosition: '50% 25%', // Default for larger screens
                                            '@screen sm': {
                                                objectPosition: '50% 80%', // Adjust for mobile screens
                                            },

                                        }}
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
                                    <h3 className="text-xl font-bold text-white">Keagan</h3>
                                    <p className="text-white">Founder & Video Producer</p>
                                </div>
                            </div>
                        </div>
                        {/* Add more team members as needed */}
                    </div>
                </div>
            </section>

            <section className="testimonial-section p-8 bg-zinc-950 text-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
                    <div className="flex flex-wrap">
                        <div className="w-full mb-4 senja-container p-4">
                            {/* Senja.io testimonial embed */}

                            <div class="senja-embed" data-id="a9a86b7a-6efa-4b0e-a3b2-e455425d2e89" data-lazyload="false"></div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="map-section p-8 bg-zinc-950 text-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Our Location</h2>
                </div>
                <Map />
            </section>

        </div>
    );
}

export default AboutUs;