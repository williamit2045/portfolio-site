import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

const projectData = [
  {
    id: 1,
    icon: "🌐",
    title: "Globethoughts",
    subtitle: "Collective Intelligence Platform",
    techStack: "Node.js, Express, MongoDB",
    summary: "A revolutionary platform enabling communities to become functionally self-aware through anonymous participation.",
    economicVision: "Transform how communities understand themselves and make decisions collectively.",
    valuation: "$5M - $10M by 2027",
    link: "https://globethoughts.com",
  },
  {
    id: 2,
    icon: "🧠",
    title: "Memeplex",
    subtitle: "Knowledge Organization Tool",
    techStack: ["React", "Next.js", "PostgreSQL"],
    summary: "Transforming passive reading into active knowledge.",
    vision: "Enhance knowledge retention via categorization.",
    valuation: "$100K in 2 years",
    link: "https://memeplex.com",
  },
  {
    id: 3,
    icon: "🎨",
    title: "Apex",
    subtitle: "Creative Marketplace",
    techStack: ["Next.js", "Tailwind CSS", "Node.js"],
    summary: "Empowering creators through design tools and commerce.",
    vision: "Become the top indie-creator marketplace.",
    valuation: "$500K in 2 years",
    link: "https://apexmarketplace.com",
  },
  {
    id: 4,
    icon: "🔧",
    title: "Nexus",
    subtitle: "Innovation Hub",
    techStack: ["Next.js", "Prisma", "React"],
    summary: "A physical and digital hub for technical innovation.",
    vision: "Support veteran entrepreneurs in tech development.",
    valuation: "$750K in 2 years",
    link: "https://nexushub.com",
  },
];

const ProjectCard = ({ project, isExpanded, onExpand, onClose }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 text-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-transform duration-300 flex relative"
      onClick={(e) => {
        e.stopPropagation();
        onExpand(project.id);
      }}
      whileHover={!isExpanded ? { width: "100%" } : {}}
      initial={{ width: "300px" }}
      animate={isExpanded ? { width: "100%" } : { width: "300px" }}
    >
      <div className="flex items-center gap-4">
        <span className="text-4xl">{project.icon}</span>
        <div>
          <h3 className="text-2xl font-bold text-blue-400">{project.title}</h3>
          <p className="text-blue-300">{project.subtitle}</p>
        </div>
      </div>
      {isExpanded && (
        <div className="ml-4">
          <p className="text-blue-100 mt-4">{project.summary}</p>
          <div className="bg-gray-700 rounded-lg p-6 mt-4">
            <h4 className="text-xl font-semibold text-white">Vision</h4>
            <p className="text-blue-100">{project.vision || project.economicVision}</p>
          </div>
          <div className="bg-gray-700 rounded-lg p-6 mt-4">
            <h4 className="text-xl font-semibold text-white">Projected Value</h4>
            <p className="text-blue-100">{project.valuation}</p>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-blue-500 hover:underline mt-6"
          >
            Visit Project
          </a>
        </div>
      )}
      {isExpanded && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600"
        >
          <X className="w-6 h-6 text-white" />
        </button>
      )}
    </motion.div>
  );
};

const ProjectsPage = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handlePageClick = () => {
    if (expandedId !== null) setExpandedId(null);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-8"
      onClick={handlePageClick}
    >
      <h2 className="text-5xl font-bold text-white text-center mb-12">Projects</h2>
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col items-end lg:items-start">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isExpanded={expandedId === project.id}
            onExpand={setExpandedId}
            onClose={() => setExpandedId(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
