import React from 'react';
import github from 'assets/svg/github.svg';
import githubGreen from 'assets/svg/github-green.svg';
import PropTypes from 'prop-types';

const Footer = props => (
  <footer className="footer">
    <div className="logo">
      {props.dark ? (
        <img src={githubGreen} alt="Github Logo" className="logo--github" />
      ) : (
        <img src={github} alt="Github Logo" className="logo--github" />
      )}
    </div>
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
