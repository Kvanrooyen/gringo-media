import React from "react";
import KeaganPortrait from "@/assets/Keagan-Portrait.jpeg";

export default function AboutServicesCTA() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#1c191a", color: "#f6e7d8" }}
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-10 right-10 w-32 h-32 rounded-full blur-xl"
        style={{ backgroundColor: "rgba(246, 231, 216, 0.1)" }}
      ></div>
      <div
        className="absolute bottom-20 left-10 w-24 h-24 rounded-full blur-lg"
        style={{ backgroundColor: "rgba(246, 231, 216, 0.2)" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* About Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-12 text-center">
            About Gringo Media
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            {/* Photo Column - Takes up more space on desktop */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-none">
                <div className="w-full aspect-square lg:aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={KeaganPortrait.src}
                    alt="Keagan - Founder of Gringo Media"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Column - Takes up remaining space */}
            <div className="lg:col-span-3 lg:pl-8">
              <p
                className="text-xl md:text-2xl opacity-90 leading-relaxed mb-6"
                style={{ color: "#f6e7d8" }}
              >
                At Gringo Media, storytelling is at the heart of everything we
                do. Founded by Keagan, whose background in photography has honed
                his keen eye for detail and creativity, we approach each project
                with a blend of artistic vision and strategic insight.
              </p>
              <p
                className="text-lg opacity-75 leading-relaxed"
                style={{ color: "#f6e7d8" }}
              >
                We don&apos;t just make videos—we craft experiences that elevate
                your brand and connect with viewers on a deeper level.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-lg transition-all duration-300 hover:transform hover:scale-105 relative">
            <div className="absolute top-4 left-4 text-6xl font-bold text-accent opacity-20">
              01
            </div>
            <h3
              className="text-3xl font-bold text-accent mb-4 relative z-10"
              id="services"
            >
              Branded Storytelling
            </h3>
            <p
              className="leading-relaxed text-lg"
              style={{ color: "#f6e7d8", opacity: 0.9 }}
            >
              Crafting compelling narratives that highlight your brand&apos;s
              unique journey and values. From testimonials to company overviews,
              we tell your story in a way that resonates with your audience.
            </p>
          </div>

          <div className="p-8 rounded-lg transition-all duration-300 hover:transform hover:scale-105 relative">
            <div className="absolute top-4 left-4 text-6xl font-bold text-accent opacity-20">
              02
            </div>
            <h3 className="text-3xl font-bold text-accent mb-4 relative z-10">
              Event Highlights
            </h3>
            <p
              className="leading-relaxed text-lg"
              style={{ color: "#f6e7d8", opacity: 0.9 }}
            >
              Capture the energy and key moments of your events with expertly
              produced highlight reels. From conferences to corporate
              gatherings, we create videos that amplify your event&apos;s
              impact.
            </p>
          </div>

          <div className="p-8 rounded-lg transition-all duration-300 hover:transform hover:scale-105 relative">
            <div className="absolute top-4 left-4 text-6xl font-bold text-accent opacity-20">
              03
            </div>
            <h3 className="text-3xl font-bold text-accent mb-4 relative z-10">
              Social Media Content
            </h3>
            <p
              className="leading-relaxed text-lg"
              style={{ color: "#f6e7d8", opacity: 0.9 }}
            >
              High-quality, engaging videos designed specifically for social
              platforms. Enhance your online presence and connect with your
              audience in a meaningful way.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-12 rounded-xl">
          <h3
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#f6e7d8" }}
          >
            Ready to Tell Your Story?
          </h3>
          <p
            className="text-xl mb-8 max-w-2xl mx-auto"
            style={{ color: "#f6e7d8", opacity: 0.9 }}
          >
            Let&apos;s bring your vision to life with professional video content
            that captivates your audience and drives results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:info@gringomedia.ie"
              className="bg-accent hover:bg-accent text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </a>

            <a
              href="#video-gallery"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
