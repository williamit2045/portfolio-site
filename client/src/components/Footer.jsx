import React from 'react';

const Footer = () => (
  
    <footer className="mt-auto py-4 border-t border-gray-800 text-center text-sm text-gray-500">
      <p>
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
      <p className="mt-2 italic text-gray-400">
        When insecurity no longer defines how we see each other, justice becomes possible. That's the real horizon of social progress. 
      </p>
    </footer>
);

export default Footer;
