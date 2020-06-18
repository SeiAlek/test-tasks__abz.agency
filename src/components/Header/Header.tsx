import React from 'react';
import { useHistory } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import { Nav } from '../Nav';
import './Header.scss';

export const Header = () => {
  const history = useHistory();
  const scrollToTop = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    animateScroll.scrollToTop();
    history.push('/');
  };

  return (
    <header className="Header">
      <div className="Header__Container container">
        <a
          href="/"
          className="Header__LogoLink"
          onClick={scrollToTop}
        >
          <img
            src="/images/logo.svg"
            alt="TestTask"
            className="Header__LogoImage"
          />
        </a>
        <Nav />
      </div>
    </header>
  );
};
