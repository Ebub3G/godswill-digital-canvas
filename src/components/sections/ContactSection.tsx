
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, MessageSquare, Send, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    }
  };

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jaccbyag/',
      icon: Instagram,
      color: 'hover:text-pink-500'
    },
    {
      name: 'Twitter/X',
      url: 'https://x.com/jaccbyag',
      icon: Twitter,
      color: 'hover:text-blue-500'
    },
    {
      name: 'Email',
      url: 'mailto:jaccbyag@gmail.com',
      icon: Mail,
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-[#1a1a1a] mb-6">
            Let's Work Together
          </h2>
          <p className="font-montserrat text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to bring your vision to life? I'd love to hear about your project 
            and discuss how we can create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name" className="font-montserrat font-medium">
                  Full Name
                </Label>
                <Input
                  id="name"
                  {...register('name')}
                  className="mt-2 font-montserrat"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 font-montserrat">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="font-montserrat font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="mt-2 font-montserrat"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 font-montserrat">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="subject" className="font-montserrat font-medium">
                  Subject
                </Label>
                <Input
                  id="subject"
                  {...register('subject')}
                  className="mt-2 font-montserrat"
                  placeholder="Project inquiry, collaboration, etc."
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500 font-montserrat">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="message" className="font-montserrat font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  {...register('message')}
                  className="mt-2 font-montserrat"
                  rows={6}
                  placeholder="Tell me about your project, goals, and how I can help..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 font-montserrat">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1a1a1a] hover:bg-gray-800 text-white font-montserrat font-medium py-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-montserrat font-bold text-2xl text-[#1a1a1a] mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-[#1a1a1a] mr-3" />
                  <a
                    href="mailto:jaccbyag@gmail.com"
                    className="font-montserrat text-gray-600 hover:text-[#1a1a1a] transition-colors"
                  >
                    jaccbyag@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-[#1a1a1a] mr-3" />
                  <span className="font-montserrat text-gray-600">
                    Response within 24 hours
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-montserrat font-bold text-2xl text-[#1a1a1a] mb-6">
                Connect With Me
              </h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ${social.color} text-gray-600`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-[#1a1a1a] text-white rounded-2xl p-8">
              <h3 className="font-montserrat font-bold text-xl mb-4">
                Let's Create Something Amazing
              </h3>
              <p className="font-montserrat text-gray-300 leading-relaxed">
                Whether you're looking to build a brand from scratch, redesign your digital presence, 
                or need creative content that converts, I'm here to help bring your vision to life.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
