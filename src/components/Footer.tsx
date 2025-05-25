import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <footer className="text-white">
        {/* Main footer content */}
        <div className="py-16 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-accent-400 mb-4">
                Gringo Media
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We specialize in creating compelling video content that tells
                your story and drives results. From corporate videos to creative
                campaigns, we bring your vision to life with professional
                quality and creative flair.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://mastodon.ie/@gringomedia"
                  className="text-gray-300 hover:text-accent-400 transition-colors duration-300"
                >
                  <i className="fab fa-mastodon text-xl"></i>
                </a>
                <a
                  href="https://instagram.com/gringomedia.ie"
                  className="text-gray-300 hover:text-accent-400 transition-colors duration-300"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a
                  href="https://tiktok.com/@gringomedia.ie"
                  className="text-gray-300 hover:text-accent-400 transition-colors duration-300"
                >
                  <i className="fab fa-tiktok text-xl"></i>
                </a>
                <a
                  href="https://www.youtube.com/@gringomedia"
                  className="text-gray-300 hover:text-accent-400 transition-colors duration-300"
                >
                  <i className="fab fa-youtube text-xl"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-accent-400 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about-us"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#video-gallery"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Our Work
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-accent-400 mb-4">
                Get In Touch
              </h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-envelope text-accent-400"></i>
                  <a
                    href="mailto:info@gringomedia.ie"
                    className="hover:text-white transition-colors duration-300"
                  >
                    info@gringomedia.ie
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fas fa-map-marker-alt text-accent-400 mt-1"></i>
                  <span>
                    Dún Laoghaire
                    <br />
                    Dublin, Ireland
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 py-6 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Gringo Media. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
