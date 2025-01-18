import React from 'react';
import { Terminal, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import textureB from '../assets/double-bubble-dark.webp';

const Home = () => (
  <div
    className="min-h-screen bg-black text-white"
    style={{
      backgroundImage: `url(${textureB})`,
      backgroundSize: 'auto',
      backgroundRepeat: 'repeat',
    }}
  >
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16 relative">
      {/* Centered Title */}
      <div className="text-center space-y-6 max-w-3xl">
        <h1 className="text-5xl font-extrabold text-green-400">
          Where is your freedom?
        </h1>

        <h2 className="text-2xl font-extrabold text-orange-400">
          Reality Thrives Without Mental Limitations
        </h2>

        <h2 className="text-1xl text-orange-300 leading-snug">
          Insecurities and artificial limitations breed corruption. 
        </h2>

        <h2 className="text-1xl text-blue-300 leading-snug">
          Freedom, Clarity, and Connection thrive in their absence.
        </h2>
      </div>

      {/* Call-to-action */}
      <div className="mt-8">
        <Link
          to="/projects"
          className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-red-500 via-blue-600 to-red-700 rounded-full shadow-lg hover:shadow-xl hover:from-red-600 hover:to-blue-800 transition-all duration-300"
        >
          <span>View Projects</span>
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>

    
    </div>

  </div>
);

export default Home;
