import React from 'react';
import { Link } from 'react-scroll';
import { SCROLL_DURATION, SECTION_OFFSET } from '../../helpers';
import './Button.scss';


interface Props {
  href: string;
  text: string;
  className?: string;
  handleClick?: () => void;
}

export const ButtonLink: React.FC<Props> = ({
  href,
  text,
  className,
  handleClick,
}) => (

  <Link
    className={`${className} Button`}
    to={href}
    spy
    smooth
    offset={SECTION_OFFSET}
    duration={SCROLL_DURATION}
    isDynamic
    onClick={handleClick}
  >
    {text}
  </Link>
);
