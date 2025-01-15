import React from 'react';
import { Terminal, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import textureB from '../assets/double-bubble-dark.webp';
import textureA from '../assets/circle-blues.webp';

const Home = () => (
  <div
    className="min-h-screen bg-black"
    style={{
      backgroundImage: `url(${textureB})`,
      backgroundSize: 'auto',
      backgroundRepeat: 'repeat',
    }}
  >
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-12">
        {/* Icon */}
        <div className="inline-block bg-blue-900/50 p-6 rounded-full">
          <Terminal className="h-16 w-16 text-blue-400" />
        </div>

        {/* Main content */}
        <div className="space-y-6">
          <h1 className="text-6xl font-bold text-blue-400">Welcome</h1>

          <div className="space-y-4">
            <p className="text-xl text-gray-300">
              Harnessing ironic simplicity for the collective IQ
            </p>

            <p className="text-gray-400 italic">
              I'm all ears.
            </p>
          </div>
        </div>

        {/* Call to action */}
        <Link
          to="/projects"
          className="inline-flex items-center px-8 py-4 space-x-3 text-white transition duration-300"
          style={{
            backgroundImage: `url(${textureA})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
            borderRadius: '24px', // Sharp corners
            padding: '16px 32px', // Increased padding
            backgroundColor: 'rgba(29, 78, 216, 0.5)', // Transparent blue overlay
          }}
        >
          <span>View Projects</span>
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
