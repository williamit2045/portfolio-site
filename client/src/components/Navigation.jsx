import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="bg-gradient-to-r from-blue-900 via-gray-800 to-blue-900 text-white shadow-lg py-4 px-10 flex justify-between items-center">
    <div className="text-3xl font-extrabold tracking-wider text-silver-200">My Portfolio</div>
    <ul className="flex space-x-8">
      {[
        { label: 'Home', path: '/' },
        { label: 'Projects', path: '/projects' },
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' }
      ].map((link, index) => (
        <li key={index} className="relative group">
          <Link
            to={link.path}
            className="text-lg font-medium px-4 py-2 transition-all duration-300 ease-in-out group-hover:text-yellow-300"
          >
            {link.label}
          </Link>
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-300 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
