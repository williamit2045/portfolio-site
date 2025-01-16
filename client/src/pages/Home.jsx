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
        <h1 className="text-4xl font-extrabold text-green-400">
          Reality Thrives Without Mental Limitations
        </h1>

        <h2 className="text-1xl text-orange-300 leading-snug">
          Corruption festers amidst artificial limitations and insecurities,
        </h2>

        <h2 className="text-1xl text-blue-300 leading-snug">
          while freedom, clarity, and connection thrive in their absence.
        </h2>
      </div>

      {/* Call-to-action */}
      <div className="mt-8">
        <Link
          to="/projects"
          className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-red-500 via-blue-600 to-red-700 rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-orange-800 transition-all duration-300"
        >
          <span>View Projects</span>
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>

      {/* Explanation */}
      <div
        className="explanation text-md text-turquoise-300 leading-relaxed mt-8 lg:mt-0 lg:absolute lg:right-8 lg:bottom-8 lg:w-1/3 space-y-4"
      >
        <p>I believe that history is defined by every choice that everyone makes.</p>
        <p>
          There is no such thing as fame. We are all legislators of history. 
        </p>
        <p>
        ...so history has always been your responsibility. 
        </p>
        <p>
        Make this a world worth living in by helping the truth become something
         everyone can afford to know, freeing us all from the fear of politics.
        </p>
        <p>
       I have dedicated my life to helping the truth flow more effectively through society. 
        </p>
      </div>
    </div>

  </div>
);

export default Home;
