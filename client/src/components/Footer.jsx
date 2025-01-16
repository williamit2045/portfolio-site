import React from 'react';

const Footer = () => (
  
    <footer className="mt-auto py-4 border-t border-gray-800 text-center text-sm text-gray-500">
      <p>
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
      <p className="mt-2 italic text-gray-400">
        Only when people stop projecting their insecurities upon one another will the world be just. This is the endgame of social justice.
      </p>
    </footer>
);

export default Footer;
