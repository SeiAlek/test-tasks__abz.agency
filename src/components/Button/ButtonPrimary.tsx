import React from 'react';

import './Button.scss';

interface Props {
  text: string;
  disabled?: boolean;
  className?: string;
  handleClick: (e: React.FormEvent) => void;
}

export const ButtonPrimary: React.FC<Props> = ({
  text,
  disabled,
  className,
  handleClick,
}) => (
  <button
    type="button"
    disabled={disabled}
    className={`${className} Button`}
    onClick={handleClick}
  >
    {text}
  </button>
);
