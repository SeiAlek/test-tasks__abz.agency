import React from 'react';
import './IllustratedSection.scss';
import { ButtonFlat } from '../Button';

interface Props {
  children: JSX.Element;
  image: string;
  title: string;
  link?: string;
  textLink?: string;
}

export const IllustratedSection = ({
  children,
  image,
  title,
  link,
  textLink,
}: Props) => (
  <div className="IllustratedSection">
    <img src={image} alt={title} className="IllustratedSection__Image" />
    <div className="IllustratedSection__Content">
      <h2 className="IllustratedSection__Title">{title}</h2>
      {children}
      {link && textLink && (
        <ButtonFlat href={link} text={textLink} className="IllustratedSection__Button" />
      )}
    </div>
  </div>
);
