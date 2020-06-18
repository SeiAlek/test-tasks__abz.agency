import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useHistory, useLocation } from 'react-router-dom';
import { Events, Link, scrollSpy } from 'react-scroll';
import { SCROLL_DURATION, SECTIONS, SECTION_OFFSET } from '../../helpers';
import './Nav.scss';

export const Nav = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    Events.scrollEvent.register('end', (to) => {
      history.push(to);
    });
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('end');
    };
  }, [history]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleMenuOpening = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="Nav">
      <button type="button" className="Nav__Sandwich" onClick={handleMenuOpening} />
      <div
        className={cn('Nav__Container', { 'Nav__Container--open': isOpen })}
        onClick={handleMenuOpening}
      >
        <ul className={cn('Nav__List', { 'Nav__List--open': isOpen })}>
          {Object.values(SECTIONS).map(({ id, name }) => (
            <li className="Nav__Item" key={id}>
              <Link
                className="Nav__Link"
                activeClass="Nav__Link--active"
                to={`#${id}`}
                spy
                smooth
                offset={SECTION_OFFSET}
                duration={SCROLL_DURATION}
                isDynamic
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
