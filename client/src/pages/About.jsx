import React from 'react';
import { Shield, Brain, Globe, Box, Code } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-primary-600 to-accent-600 text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6 text-center">
          <Shield className="h-16 w-16 text-blue-400 mx-auto" />
          <h1 className="text-5xl font-bold">Bridging Worlds</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Combining military experience, technical expertise, and a passion for innovation to build community-driven solutions that empower individuals and foster collective growth.
          </p>
        </div>
      </section>

      {/* About Me Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-xl text-gray-300">
          I am a technical visionary with a background in psychology and web development, driven by a passion for interdisciplinary learning and community empowerment. My career journey spans from serving in the US Navy to developing platforms like Globethoughts, focusing on collective intelligence and social insight.
        </p>
      </section>

      {/* Experience Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <Shield className="h-6 w-6 text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold">US Navy (2003-2007)</h3>
              <p className="text-gray-300">Served with honor in various international assignments across Japan, Bahrain, and South Korea.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Brain className="h-6 w-6 text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold">TEDx Conference Organizer, UCSD (2012)</h3>
              <p className="text-gray-300">Organized a conference focused on humanity's future, fostering dialogue on innovation and societal growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-xl font-semibold">UCSD BA in Psychology (2013)</h3>
            <p className="text-gray-300">Specialized in Cognitive Science, Philosophy of Mind, and Consciousness Studies.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Web Development Certificate (2013)</h3>
            <p className="text-gray-300">Completed a comprehensive web development program with a focus on modern frameworks.</p>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold">Let's Connect</h2>
        <p className="mt-4 text-xl text-gray-300">Interested in collaborating or learning more about my projects?</p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default About;
