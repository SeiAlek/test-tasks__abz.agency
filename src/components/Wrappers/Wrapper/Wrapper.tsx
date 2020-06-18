import React from 'react';
import { Element } from 'react-scroll';
import './Wrapper.scss';

interface Props {
  children: JSX.Element;
  type: WrapperType;
  section: Section;
  descr?: string;
}

export const Wrapper = ({ children, type, section }: Props) => {
  const { id, title, descr } = section;

  return (
    <Element name={`#${id}`} className={`Wrapper Wrapper--${type}`}>
      <section className="container" id={id}>
        <h2 className="Wrapper__Title">
          {title}
        </h2>
        {descr && (
          <p className="Wrapper__Descr">
            {descr}
          </p>
        )}
        <div className="Wrapper__Content">
          {children}
        </div>
      </section>
    </Element>
  );
};
