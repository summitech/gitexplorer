import React from 'react';
import PropTypes from 'prop-types';
import github from 'assets/images/github.svg';
import githubGreen from 'assets/images/github-green.svg';

const Footer = props => (
  <footer className="footer">
    <div className="logo">
      <a href="https://github.com/natmegs/gitexplorer" rel="noopener noreferrer" target="_blank">
        {props.dark ? (
          <img src={githubGreen} alt="Github Logo" className="logo--github" />
        ) : (
          <img src={github} alt="Github Logo" className="logo--github" />
        )}
      </a>
    </div>
    <p className="footer__copyright dark-white">      
      <a href="https://d2iq.com/" target="_blank" rel="noopener noreferrer">
        D2iQ
      </a>
      <a
        href="https://twitter.com/d2iq"
        target="_blank"
        rel="noopener noreferrer"
        className="footer__link"
      >
        Twitter
      </a>
    </p>
  </footer>
);

Footer.propTypes = {
  dark: PropTypes.bool
};

export { Footer };
