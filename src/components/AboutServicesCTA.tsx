import React from "react";

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

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* About Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            About Gringo Media
          </h2>
          <p
            className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-8"
            style={{ color: "#f6e7d8" }}
          >
            At Gringo Media, storytelling is at the heart of everything we do.
            Founded by Keagan, whose background in photography has honed his
            keen eye for detail and creativity, we approach each project with a
            blend of artistic vision and strategic insight.
          </p>
          <p
            className="text-lg opacity-75 max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#f6e7d8" }}
          >
            We don't just make videos—we craft experiences that elevate your
            brand and connect with viewers on a deeper level.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-lg transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-video text-white text-xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-accent mb-4">
              Branded Storytelling
            </h3>
            <p
              className="leading-relaxed"
              style={{ color: "#f6e7d8", opacity: 0.9 }}
            >
              Crafting compelling narratives that highlight your brand's unique
              journey and values. From testimonials to company overviews, we
              tell your story in a way that resonates with your audience.
            </p>
          </div>

          <div className="p-8 rounded-lg transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-calendar-alt text-white text-xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-accent mb-4">
              Event Highlights
            </h3>
            <p
              className="leading-relaxed"
              style={{ color: "#f6e7d8", opacity: 0.9 }}
            >
              Capture the energy and key moments of your events with expertly
              produced highlight reels. From conferences to corporate
              gatherings, we create videos that amplify your event's impact.
            </p>
          </div>

          <div className="p-8 rounded-lg transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-share-alt text-white text-xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-accent mb-4">
              Social Media Content
            </h3>
            <p
              className="leading-relaxed"
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
            Let's bring your vision to life with professional video content that
            captivates your audience and drives results.
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
