
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Monitor, Users, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      icon: Palette,
      title: 'Visual Identity Design',
      description: 'Creating memorable brand identities and visual systems that resonate with target audiences and drive brand recognition'
    },
    {
      icon: Monitor,
      title: 'Digital Design & Development',
      description: 'Designing modern, user-friendly digital experiences, interfaces, and responsive websites that engage users'
    },
    {
      icon: Users,
      title: 'Content Strategy & Creation',
      description: 'Developing compelling content strategies and creative campaigns that drive engagement and build communities'
    },
    {
      icon: Lightbulb,
      title: 'Creative Direction & Consultation',
      description: 'Leading creative projects from concept to execution, providing strategic creative direction for brands and businesses'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-[#1a1a1a] mb-6">
            About Godswill Anuo
          </h2>
          <p className="font-montserrat text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a passionate content creator and digital designer with extensive experience in visual storytelling 
            and brand development. My approach combines strategic thinking with creative execution to deliver 
            impactful solutions that resonate with audiences, build brand awareness, and drive measurable results 
            for businesses and individuals.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          role="list"
          aria-label="Core expertise and services"
        >
          {skills.map((skill, index) => (
            <motion.article
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              role="listitem"
            >
              <skill.icon className="h-12 w-12 text-[#1a1a1a] mx-auto mb-4" aria-hidden="true" />
              <h3 className="font-montserrat font-semibold text-xl text-[#1a1a1a] mb-3">
                {skill.title}
              </h3>
              <p className="font-montserrat text-gray-600">
                {skill.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-[#1a1a1a] mb-6">
            My Design Philosophy & Process
          </h3>
          <p className="font-montserrat text-lg text-gray-600 leading-relaxed">
            Every successful project begins with understanding your unique story, target audience, and business goals. 
            I believe in collaborative partnerships where your vision meets my creative expertise and technical skills. 
            Through thorough research, strategic planning, user-centered design principles, and meticulous execution, 
            I create digital experiences and visual identities that not only look exceptional but also deliver 
            measurable results and drive business growth. My process is transparent, iterative, and always focused 
            on exceeding expectations while maintaining the highest standards of quality and professionalism.
          </p>
        </motion.article>
      </div>
    </section>
  );
};

export default AboutSection;
