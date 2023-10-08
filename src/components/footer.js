import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube, faVimeo } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-zinc-950 p-8 text-white">
            <div className="flex flex-col md:flex-row max-w-4xl mx-auto space-y-4 md:space-y-0 md:space-x-4">

                {/* Follow Us Section */}
                <div className="md:w-1/3 flex flex-col items-center mb-4 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                    <div className="flex justify-center md:justify-start space-x-4">
                        {/* Instagram */}
                        <a href="https://instagram.com/gringo_media" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        {/* TikTok */}
                        <a href="https://tiktok.com/@gringo.media" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTiktok} size="lg" />
                        </a>
                        {/* YouTube */}
                        <a href="https://www.youtube.com/@gringomedia" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                        </a>
                        {/* Vimeo */}
                        <a href="https://vimeo.com/gringomedia" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faVimeo} size="lg" />
                        </a>
                    </div>
                </div>

                {/* Contact Email */}
                <div className="md:w-1/3 flex flex-col items-center mb-4 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                    <a href="mailto:hey@gringo.media" className="text-blue-300">hey@gringo.media</a>
                </div>

                {/* Support Us Section */}
                <div className="md:w-1/3 flex flex-col items-center mb-4 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">Support Us</h3>
                    <div className="flex justify-center md:justify-end items-center space-x-4">
                        {/* Buy Me a Coffee */}
                        <a href="https://www.buymeacoffee.com/gringomedia" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faCoffee} size="lg" />
                        </a>
                        {/* Ko-Fi */}
                        <a href="https://ko-fi.com/gringomedia" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faCoffee} size="lg" />
                        </a>
                    </div>
                </div>


            </div>
        </footer>

    );
};

export default Footer;
