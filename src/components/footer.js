import React from 'react';
import PropTypes from 'prop-types';

const Footer = () => (
  <footer className="footer">
    <p className="footer__copyright dark-white">
      Made with <span>❤</span> by{' '}
      <a href="https://www.summitech.ng" target="_blank" rel="noopener noreferrer">
        Summitech
      </a>
      <a
        href="https://twitter.com/gitexplorer"
        target="_blank"
        rel="noopener noreferrer"
        className="footer__link"
      >
        Twitter
      </a>
      <a
        href="https://rave.flutterwave.com/donate/bavfmdlomzs2"
        target="_blank"
        rel="noopener noreferrer"
        className="footer__link"
      >
        Donate
      </a>
    </p>
  </footer>
);

Footer.propTypes = {
  dark: PropTypes.bool
};

export { Footer };
