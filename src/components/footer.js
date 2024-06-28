import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faMastodon } from '@fortawesome/free-brands-svg-icons';
import { SiKofi, SiLiberapay, SiPaypal } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="bg-zinc-950 p-8 text-white">
            <div className="flex flex-col md:flex-row max-w-4xl mx-auto space-y-4 md:space-y-0 md:space-x-4">

                {/* Follow Us Section */}
                <div className="md:w-1/3 flex flex-col items-center mb-4 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                    <div className="flex justify-center md:justify-start space-x-4">
                        {/* Instagram */}
                        <a href="https://instagram.com/gringomedia.ie" target="_blank" rel="noopener noreferrer" aria-label='Follow Gringo Media on Instagram'>
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        {/* YouTube */}
                        <a href="https://www.youtube.com/@gringomedia" target="_blank" rel="noopener noreferrer" aria-label='Subscribe to Gringo Media on YouTube'>
                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                        </a>
                        {/* Mastodon.ie */}
                        <a href="https://mastodon.ie/@gringomedia" target="_blank" rel="noopener noreferrer" aria-label='Follow Gringo Media on Mastodon'>
                            <FontAwesomeIcon icon={faMastodon} size="lg" />
                        </a>
                    </div>
                </div>

                {/* Contact Email */}
                <div className="md:w-1/3 flex flex-col items-center mb-4 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                    <a href="mailto:info@gringomedia.ie" className="text-blue-300" aria-label='info@gringomedia.ie'>info@gringomedia.ie</a>
                </div>

                {/* Support Us Section */}
                <div className="md:w-1/3 flex flex-col items-center mb-4 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">Support Us</h3>
                    <div className="flex justify-center md:justify-end items-center space-x-4">
                        {/* Ko-Fi */}
                        <a href='https://ko-fi.com/gringomedia' target="_blank" rel="noopener noreferrer"> <SiKofi className="text-xl hover:text-pink-500 cursor-pointer" /></a>
                        {/* Liberapay */}
                        <a href='https://liberapay.com/GringoMedia' target="_blank" rel="noopener noreferrer"> <SiLiberapay className="text-xl hover:text-green-500 cursor-pointer" /></a>
                        {/* Paypal */}
                        <a href='https://paypal.me/gringomedia' target="_blank" rel="noopener noreferrer"> <SiPaypal className="text-xl hover:text-blue-500 cursor-pointer" /></a>
                    </div>
                </div>


            </div>
        </footer>

    );
};

export default Footer;
