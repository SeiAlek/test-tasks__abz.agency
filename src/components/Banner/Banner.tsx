import React from 'react';
import { ButtonLink } from '../Button/ButtonLink';

import './Banner.scss';

interface Props {
  title: string;
  text: string;
  link?: string;
  textLink?: string;
}

export const Banner = ({
  title,
  text,
  link,
  textLink,
}: Props) => (
  <section className="Banner container">
    <div className="Banner__Content">
      <h1 className="Banner__Header">
        {title}
      </h1>
      <p className="Banner__Text">
        {text}
      </p>
      {link && textLink && (
        <ButtonLink href={link} text={textLink} className="Banner__Button" />
      )}
    </div>
  </section>
);
