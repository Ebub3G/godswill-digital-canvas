
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Palette, Globe, User, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Elena Rodriguez Art Gallery',
      description: 'Complete visual identity and web design for a contemporary art gallery, featuring a sophisticated brand system and immersive digital experience.',
      category: 'Visual Identity & Web Design',
      technologies: ['Branding', 'Web Design', 'Art Direction'],
      icon: Palette,
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Bella Vista Italian Restaurant',
      description: 'Authentic brand development and digital experience design for a family-owned Italian restaurant, capturing tradition with modern appeal.',
      category: 'Brand & Digital Experience',
      technologies: ['Brand Strategy', 'Digital Design', 'Marketing'],
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Coach Sarah',
      description: 'Personal brand development and coaching platform design for a life coach, creating an inspiring and professional digital presence.',
      category: 'Personal Brand & Coaching Platform',
      technologies: ['Personal Branding', 'Platform Design', 'Content Strategy'],
      icon: User,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Falco Consulting',
      description: 'Strategic business solutions platform with comprehensive branding and web development for professional consulting services.',
      category: 'Strategic Business Solutions Platform',
      technologies: ['Business Strategy', 'Web Development', 'Consulting'],
      icon: Briefcase,
      link: 'https://jimmyfalco.vercel.app',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-[#1a1a1a] mb-6">
            Featured Projects
          </h2>
          <p className="font-montserrat text-lg text-gray-600 max-w-3xl mx-auto">
            A selection of recent work showcasing my expertise in brand development, 
            digital design, and strategic creative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <project.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-montserrat font-medium text-gray-500">
                    {project.category}
                  </span>
                  {project.link && (
                    <Button
                      onClick={() => window.open(project.link, '_blank')}
                      size="sm"
                      variant="outline"
                      className="border-gray-300 hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Site
                    </Button>
                  )}
                </div>

                <h3 className="font-montserrat font-bold text-xl text-[#1a1a1a] mb-3">
                  {project.title}
                </h3>

                <p className="font-montserrat text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-montserrat font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
