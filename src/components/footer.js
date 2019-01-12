import React from 'react';
import PropTypes from 'prop-types';
import github from 'assets/images/github.svg';
import githubGreen from 'assets/images/github-green.svg';

function openRepo() {
  window.open('https://github.com/summitech/gitexplorer', '_blank');
}

const Footer = props => (
  <footer className="footer">
  <div className="logo">
      {props.dark ? (
        <img src={githubGreen} alt="Github Logo" className="logo--github" onClick={() => openRepo()} />
      ) : (
        <img src={github} alt="Github Logo" className="logo--github" onClick={() => openRepo()} />
      )}
    </div>
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
