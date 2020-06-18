import React, { useEffect } from 'react';
import { ButtonPrimary } from '../../Button';
import './PopUp.scss';

interface Props {
  title: string;
  message: string;
  buttonText: string;
  handleClick: () => void;
}

export const PopUp = ({
  title,
  message,
  buttonText,
  handleClick,
}: Props) => {
  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className="PopUp">
      <div className="PopUp__Container">
        <button
          type="button"
          className="PopUp__Close"
          onClick={handleClick}
        />
        <h2 className="PopUp__Title">
          {title}
        </h2>
        <p className="PopUp__Message">
          {message}
        </p>
        <ButtonPrimary
          text={buttonText}
          className="PopUp__Button PopUp__Button--primary"
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};
