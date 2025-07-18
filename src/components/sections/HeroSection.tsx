
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-montserrat font-bold text-5xl md:text-7xl lg:text-8xl text-[#1a1a1a] mb-6"
          >
            GODSWILL
            <br />
            <span className="text-gray-600">ANUO</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-montserrat text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Professional Content Creator & Digital Designer
            <br />
            Crafting compelling visual stories and digital experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-[#1a1a1a] hover:bg-gray-800 text-white font-montserrat font-medium px-8 py-3 text-lg"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white font-montserrat font-medium px-8 py-3 text-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="animate-bounce"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-[#1a1a1a] transition-colors duration-300"
              aria-label="Scroll to about section"
            >
              <ArrowDown size={32} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
