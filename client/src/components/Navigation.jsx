import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="bg-black border-b border-gray-800 shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-500">My Portfolio</Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/projects" className="text-gray-300 hover:text-white">Projects</Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
