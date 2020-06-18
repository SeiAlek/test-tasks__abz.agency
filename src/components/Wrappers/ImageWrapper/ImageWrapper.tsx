import React from 'react';
import './ImageWrapper.scss';

interface Props {
  children: JSX.Element;
}

export const ImageWrapper = ({ children }: Props) => (
  <div className="ImageWrapper">
    {children}
  </div>
);
