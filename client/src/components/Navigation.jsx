import React from 'react';
import { Link } from 'react-router-dom';



const Navigation = () => (
  <nav className="text-white shadow-lg py-4 px-10 flex justify-between items-center"
  style={{
    background: 'transparent',
    borderBottom: '1rem solid black'
  }}>



<div className="hidden sm:block text-3xl font-extrabold tracking-wider text-green-200">William Teach</div>
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
            className="text-lg font-medium px-4 py-2 transition-all duration-300 ease-in-out group-hover:text-green-300"
          >
            {link.label}
          </Link>
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-green-300 transition-all duration-100 ease-in-out group-hover:w-full"></span>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
