import React from 'react';

const Footer = () => (
  <footer
    className="bg-black border-t border-gray-800 py-8 px-4 text-center"
    style={{
      backgroundImage: 'url(/assets/prism.png)',
      backgroundSize: 'cover',
      backgroundBlendMode: 'multiply',
    }}
  >
    <div className="text-gray-400 text-sm font-semibold">
      &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
    </div>

    <div className="mt-6 space-y-4 text-teal-400 text-xs font-sans tracking-wide">
      <p>
        Only when people stop projecting their insecurities upon one another will the world be just.
        This is the endgame of social justice.
      </p>
      <p>
        The individual has a responsibility to exercise their right to think as one being,
        independent from the rest.
      </p>
      <p>
        When we fail to do this, our communities become corrupt.
      </p>
    </div>
  </footer>
);

export default Footer;
