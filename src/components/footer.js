import React from 'react';
import PropTypes from 'prop-types';

const Footer = () => (
  <footer className="footer">
    <a
      href="http://www.summitech.ng"
      target="_blank"
      rel="noopener noreferrer"
      className="footer__copyright  dark-white"
    >
      Made with <span>❤</span> by Summitech
    </a>
  </footer>
);

Footer.propTypes = {
  dark: PropTypes.bool
};

export { Footer };
