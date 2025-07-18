
import { motion } from 'framer-motion';
import { Instagram, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jaccbyag/',
      icon: Instagram
    },
    {
      name: 'Twitter/X',
      url: 'https://x.com/jaccbyag',
      icon: Twitter
    },
    {
      name: 'Email',
      url: 'mailto:jaccbyag@gmail.com',
      icon: Mail
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              className="font-montserrat font-bold text-2xl mb-4"
            >
              GODSWILL ANUO
            </motion.button>
            <p className="font-montserrat text-gray-400 leading-relaxed">
              Professional Content Creator & Digital Designer crafting compelling 
              visual stories and digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="font-montserrat text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-montserrat text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Godswill Anuo. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm font-montserrat text-gray-400">
              <button className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="hover:text-white transition-colors duration-200">
                Terms of Service
              </button>
              <div className="flex items-center">
                Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> in Nigeria
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
