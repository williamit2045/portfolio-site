import React from 'react';
import { Globe, Brain, Box, Code } from 'lucide-react';

const projects = [
  { title: "Globethoughts", description: "Unlocking collective intelligence.", icon: Globe },
  { title: "Memeplex", description: "Transform passive reading into knowledge.", icon: Brain },
  { title: "Apex", description: "Creative marketplace.", icon: Box },
  { title: "Nexus", description: "Innovation hub.", icon: Code },
];

const Projects = () => (
  <div className="min-h-screen bg-black text-white px-4 py-16">
    <h2 className="text-3xl font-bold text-blue-400 mb-6">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div key={index} className="bg-white/10 p-6 rounded-lg shadow-lg">
          <project.icon className="h-8 w-8 text-blue-400" />
          <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
          <p className="text-gray-300">{project.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
