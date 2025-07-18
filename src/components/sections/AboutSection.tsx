
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
      title: 'Visual Identity',
      description: 'Creating memorable brand identities that resonate with target audiences'
    },
    {
      icon: Monitor,
      title: 'Digital Design',
      description: 'Designing modern, user-friendly digital experiences and interfaces'
    },
    {
      icon: Users,
      title: 'Content Strategy',
      description: 'Developing compelling content strategies that drive engagement'
    },
    {
      icon: Lightbulb,
      title: 'Creative Direction',
      description: 'Leading creative projects from concept to execution'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-[#1a1a1a] mb-6">
            About Me
          </h2>
          <p className="font-montserrat text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a passionate content creator and digital designer with a keen eye for detail 
            and a love for crafting compelling visual narratives. My approach combines strategic 
            thinking with creative execution to deliver impactful solutions that resonate with 
            audiences and drive results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <skill.icon className="h-12 w-12 text-[#1a1a1a] mx-auto mb-4" />
              <h3 className="font-montserrat font-semibold text-xl text-[#1a1a1a] mb-3">
                {skill.title}
              </h3>
              <p className="font-montserrat text-gray-600">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-[#1a1a1a] mb-6">
            My Approach
          </h3>
          <p className="font-montserrat text-lg text-gray-600 leading-relaxed">
            Every project begins with understanding your unique story and goals. I believe in 
            collaborative partnerships where your vision meets my creative expertise. Through 
            thoughtful research, strategic planning, and meticulous execution, I create designs 
            that not only look exceptional but also deliver measurable results. My process is 
            transparent, iterative, and always focused on exceeding expectations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
