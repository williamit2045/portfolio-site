import React from 'react';
import { Shield, Brain, Globe, Code, Linkedin, Mail, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import textureB from '../assets/double-bubble-dark.webp';
import texture from '../assets/folk-pattern-black.webp';

const About = () => {
  const techSkills = [
    {
      title: 'Full-Stack Website Development',
      description: 'Proficient in Node.js, Express, React, and MongoDB.',
      icon: Code,
      link: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs'
    },
    {
      title: 'Data Analysis',
      description: 'Experienced in using SQL, Python, and data visualization tools.',
      icon: Brain,
      link: 'https://www.python.org/'
    },
    {
      title: 'UI/UX Design',
      description: 'Skilled in creating responsive and user-friendly interfaces.',
      icon: Shield,
      link: 'https://developer.mozilla.org/en-US/docs/Learn/Accessibility'
    },
    {
      title: 'Web economics and innovation',
      description: 'Learned in the market potential of ever-emerging tech niches.',
      icon: Shield,
      link: 'https://developer.mozilla.org/en-US/docs/Learn/Accessibility'
    }
  ];

  const interests = [
    {
      title: 'Paleontology and Macro-Evolutionary Mechanisms',
      description: 'Deep history points to the punctuating equilibrium of our time.',
      icon: Globe,
      link: 'https://en.wikipedia.org/wiki/Evolution'
    },
    {
      title: 'Collective Intelligences',
      description: 'You are a singularity greater than your parts. We live during a time with another singularity emerging from human groups.',
      icon: Globe,
      link: 'https://en.wikipedia.org/wiki/Collective_intelligence'
    },
    {
      title: 'Philosophy of Neuroscience and Consciousness',
      description: 'Matter and energy are interchangeable, along with everything in math.',
      icon: Brain,
      link: 'https://cogsci.ucsd.edu/'
    },
    {
      title: 'Mechanisms of Cultural Evolution',
      description: 'The evolution of culture has mechanisms that offer predictive vision over the heads of the crowd.',
      icon: Shield,
      link: 'https://en.wikipedia.org/wiki/Cultural_evolution'
    },
    {
      title: 'Augmenting human intelligence',
      description: 'We are our greatest limiting factor - upon one another.',
      icon: Shield,
      link: 'https://en.wikipedia.org/wiki/Cultural_evolution'
    }
  ];

  const education = [
    {
      title: 'UCSD BA in Psychology (2013)',
      description: 'Specialized in Cognitive Science, Philosophy of Mind, and Consciousness Studies.',
      icon: Brain,
      link: 'https://catalog.ucsd.edu/curric/PSYC-ug.html'
    },
    {
      title: 'Web Development Certificate (2013)',
      description: 'Completed a comprehensive web development program with a focus on modern frameworks.',
      icon: Code,
      link: 'https://extendedstudies.ucsd.edu/courses-certificates/digital-arts/graphic-web-design'
    },
    {
      title: 'Udemy Web Development Bootcamp (2022)',
      description: 'Gained hands-on experience in modern web technologies and frameworks.',
      icon: Code,
      link: 'https://www.udemy.com/course/the-web-developer-bootcamp/'
    },
    {
      title: 'Y Combinator Startup School (2021)',
      description: 'Completed a program focused on startup development and entrepreneurial strategies.',
      icon: Globe,
      link: 'https://www.startupschool.org'
    }
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white"
      style={{
        backgroundImage: `url(${textureB})`,
        backgroundSize: 'auto', // Use original size for tiling
        backgroundRepeat: 'repeat', // Repeat the texture across the entire background
        borderRadius: '0rem'
      }}
      
    >
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-blue-600 p-4 rounded-full shadow-lg"
          >
            <Shield className="h-16 w-16 text-white" />
          </motion.div>
          <h1 className="text-5xl font-bold">Living on the Edge:</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From the Navy, to Academia, to Web Innovation, I'm familiar with the fault-lines between various cultures, institutions, and academic subjects.
          </p>
        </div>
      </section>

      {/* Tech Skills Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold mb-8 text-blue-400">Tech Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techSkills.map((skill, index) => (
            <motion.a style={{
              backgroundImage: `url(${texture})`,
              backgroundSize: 'auto', // Use original size for tiling
              backgroundRepeat: 'repeat', // Repeat the texture across the entire background
              border: '1px solid #333',
              borderRadius: '0rem'
            }}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="bg-gray-800 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4"
              whileHover={{ scale: 1.05 }}
            >
              <skill.icon className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                <p className="text-sm text-gray-300">{skill.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Interests Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-red-400">Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {interests.map((interest, index) => (
            <motion.a style={{
              backgroundImage: `url(${texture})`,
              backgroundSize: 'auto', // Use original size for tiling
              backgroundRepeat: 'repeat', // Repeat the texture across the entire background
              border: '1px solid #333',
              borderRadius: '0rem'
            }}
              href={interest.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="bg-gray-800 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4"
              whileHover={{ scale: 1.05 }}
            >
              <interest.icon className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-semibold text-white">{interest.title}</h3>
                <p className="text-sm text-gray-300">{interest.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-blue-400">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.a style={{
              backgroundImage: `url(${texture})`,
              backgroundSize: 'auto', // Use original size for tiling
              backgroundRepeat: 'repeat', // Repeat the texture across the entire background
              border: '1px solid #333',
              borderRadius: '0rem'
            }}
              href={edu.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="bg-gray-800 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4"
              whileHover={{ scale: 1.05 }}
            >
              <edu.icon className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-semibold text-white">{edu.title}</h3>
                <p className="text-sm text-gray-300">{edu.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-red-400">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[{
            title: 'US Navy (2003-2007)',
            description: 'Served with honor in various international assignments across Japan, Bahrain, and South Korea.',
            icon: Shield,
            link: 'https://www.navy.mil/'
          },
          {
            title: 'TEDx Conference Organizer, UCSD (2012)',
            description: 'Organized a conference focused on humanity’s future, fostering dialogue on innovation and societal growth.',
            icon: Brain,
            link: 'https://www.ted.com/tedx'
          }].map((item, index) => (
            <motion.a style={{
              backgroundImage: `url(${texture})`,
              backgroundSize: 'auto', // Use original size for tiling
              backgroundRepeat: 'repeat', // Repeat the texture across the entire background
              border: '1px solid #333',
              borderRadius: '0rem'
            }}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="bg-gray-800 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4"
              whileHover={{ scale: 1.05 }}
            >
              <item.icon className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-400">Let’s Connect</h2>
        <p className="mt-4 text-xl text-gray-300">Interested in collaborating or learning more about my projects?</p>
        <div className="flex justify-center mt-8 space-x-6">
          <Github className="h-8 w-8 text-white hover:text-blue-400 cursor-pointer" />
          <Linkedin className="h-8 w-8 text-white hover:text-blue-400 cursor-pointer" />
          <Mail className="h-8 w-8 text-white hover:text-blue-400 cursor-pointer" />
        </div>
      </section>
    </div>
  );
};

export default About;
