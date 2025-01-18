import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="text-white shadow-lg py-4 px-6 sm:px-10 flex justify-between items-center"
      style={{
        background: "transparent",
        borderBottom: "1rem solid black",
      }}
    >
      {/* Logo / Brand */}
      <div className="text-2xl sm:text-3xl font-extrabold tracking-wider text-green-200">
        <Link to="/" className="hover:text-green-300 transition-all duration-300">
          William Teach
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex space-x-8">
        {[
          { label: "Home", path: "/" },
          { label: "Projects", path: "/projects" },
          { label: "About", path: "/about" },
          { label: "Contact", path: "/contact" },
        ].map((link, index) => (
          <li key={index} className="relative group">
            <Link
              to={link.path}
              className="text-lg font-medium px-4 py-2 transition-all duration-300 ease-in-out group-hover:text-green-300"
            >
              {link.label}
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-green-300 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden text-green-200 hover:text-green-300 transition-all duration-300"
        onClick={() => setMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={isMenuOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-16 left-0 w-full bg-transparent text-center sm:hidden z-50"
      >
        <ul className="grid grid-cols-2 gap-x-6 gap-y-4 p-4">
          {[
            { label: "Home", path: "/" },
            { label: "Projects", path: "/projects" },
            { label: "About", path: "/about" },
            { label: "Contact", path: "/contact" },
          ].map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="text-lg font-medium px-4 py-2 block text-green-200 hover:text-green-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setTimeout(() => setMenuOpen(false), 150);
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navigation;
