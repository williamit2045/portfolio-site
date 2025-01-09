import React from 'react';

const Footer = () => (
  <footer className="bg-black border-t border-gray-800 py-4">
    <div className="text-center text-gray-400">
      &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
    </div>
  </footer>
);

export default Footer;
