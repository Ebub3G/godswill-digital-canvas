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
      description: 'Complete visual identity design and responsive web development for a contemporary art gallery. Features sophisticated brand system, immersive digital gallery experience, and content management integration.',
      category: 'Visual Identity & Web Design',
      technologies: ['Brand Identity', 'Web Design', 'Art Direction', 'Content Strategy'],
      icon: Palette,
      link: 'https://art-gallery-lake-ten.vercel.app',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop&crop=center',
      alt: 'Elena Rodriguez Art Gallery website design showing modern gallery layout'
    },
    {
      title: 'Bella Vista Italian Restaurant',
      description: 'Authentic brand development and digital experience design for a family-owned Italian restaurant. Captures traditional Italian heritage with modern digital appeal, including menu design and social media strategy.',
      category: 'Brand & Digital Experience',
      technologies: ['Brand Strategy', 'Digital Design', 'Social Media', 'Menu Design'],
      icon: Globe,
      link: 'https://bella-vista-inky.vercel.app',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&crop=center',
      alt: 'Bella Vista Italian Restaurant brand design and digital experience'
    },
    {
      title: 'Coach Sarah Personal Brand',
      description: 'Complete personal brand development and coaching platform design for a professional life coach. Created inspiring and professional digital presence with integrated booking system and content hub.',
      category: 'Personal Brand & Coaching Platform',
      technologies: ['Personal Branding', 'Platform Design', 'Content Strategy', 'UX Design'],
      icon: User,
      link: 'https://coach-sarah.vercel.app',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&crop=center',
      alt: 'Coach Sarah personal brand and coaching platform design'
    },
    {
      title: 'Falco Consulting Business Solutions',
      description: 'Strategic business solutions platform with comprehensive branding and full-stack web development for professional consulting services. Features client portal, service showcase, and lead generation system.',
      category: 'Strategic Business Solutions Platform',
      technologies: ['Business Strategy', 'Full-Stack Development', 'Consulting', 'Lead Generation'],
      icon: Briefcase,
      link: 'https://jimmyfalco.vercel.app',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center',
      alt: 'Falco Consulting business website showing professional services platform'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-[#1a1a1a] mb-6">
            Featured Design Projects
          </h2>
          <p className="font-montserrat text-lg text-gray-600 max-w-3xl mx-auto">
            A curated selection of recent work showcasing expertise in brand development, 
            digital design, web development, and strategic creative solutions for diverse clients 
            across various industries.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" role="list" aria-label="Portfolio projects">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              role="listitem"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <project.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-montserrat font-medium text-gray-500">
                    {project.category}
                  </span>
                  {project.link && (
                    <Button
                      onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                      size="sm"
                      variant="outline"
                      className="border-gray-300 hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
                      aria-label={`View live website for ${project.title}`}
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

                <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-montserrat font-medium rounded-full"
                      role="listitem"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
