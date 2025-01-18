import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import PropTypes from 'prop-types';
import textureB from '../assets/spiration-dark.webp';
import textureA from '../assets/folk-pattern-black.webp';

const projectData = [
  {
    id: 1,
    icon: "🌐",
    title: "Globethoughts",
    subtitle: "A platform for collective intelligence.",
    techStack: "Node.js, Express, MongoDB",
    valuation: "$5M - $10M by 2027",
    business: "A nonprofit funded by academic and private sponsorships, subscription-based services, user-taught ads for free content, and tips for user-curators.",
    category: "Community Groups",
    link: "https://www.globe-thoughts.com"
  },
  {
    id: 2,
    icon: "🧠",
    title: "Memeplex",
    subtitle: "Relational Blogging Network",
    techStack: ["React", "Next.js", "PostgreSQL"],
    valuation: "$100K in 2 years",
    business: "Increases metadata through user engagement, building collective knowledge.",
    category: "Knowledge Enthusiasts",
    link: "https://www.memeplex.pro"
  },
  {
    id: 3,
    icon: "🎨",
    title: "Apex",
    subtitle: "Creative Marketplace",
    techStack: ["Next.js", "Tailwind CSS", "Node.js"],
    valuation: "$500K in 2 years",
    business: "Starts with t-shirt design and expands to a full creative marketplace.",
    category: "Creative Entrepreneurs",
    link: "https://www.apex-vets.pro"
  },
  {
    id: 4,
    icon: "🔧",
    title: "Nexus",
    subtitle: "Innovation Hub",
    techStack: ["Next.js", "Prisma", "React"],
    valuation: "$750K in 2 years",
    business: "Combines physical and digital spaces to foster innovation and support veterans.",
    category: "Veteran Innovators",
    link: "https://www.nexus-vets.pro"
  }
];

const ProjectCard = ({ project }) => (
  <div
    className="bg-black rounded-lg overflow-hidden transition-all duration-300 hover:bg-texture"
    style={{
      backgroundImage: `url(${textureA})`,
      backgroundSize: 'auto',
      backgroundRepeat: 'repeat',
    }}
  >
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-4xl">{project.icon}</span>
          <div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-blue-400">{project.subtitle}</p>
          </div>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <ExternalLink className="h-6 w-6" />
        </a>
      </div>

      <div className="space-y-3">
        <div className="text-sm text-gray-400">
          <span className="text-gray-300">Tech Stack:</span> {project.techStack}
        </div>
        <div className="text-sm text-gray-400">
          <span className="text-gray-300">Target:</span> {project.category}
        </div>
        <p className="text-gray-300 text-sm">{project.business}</p>
        <div className="text-sm text-green-400">
          Projected Value: {project.valuation}
        </div>
      </div>
    </div>
  </div>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    link: PropTypes.string.isRequired,
    techStack: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
    category: PropTypes.string,
    business: PropTypes.string,
    valuation: PropTypes.string,
  }).isRequired,
};

const Projects = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-8"
      style={{
        backgroundImage: `url(${textureB})`,
        backgroundSize: 'auto',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-12" style={{marginTop: '7rem'}} >
          <h1 className="text-4xl font-bold text-white">Four Web Projects:</h1>
          <a
            href="https://github.com/williamit2045"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-white"
          >
            <Github className="h-6 w-6" />
            <span>View on GitHub</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
