import React from 'react';
import './FieldWrapper.scss';

interface Props {
  id: string;
  label: string;
  error: string;
  children: JSX.Element;
}

export const FieldWrapper = ({
  id,
  label,
  error,
  children,
}: Props) => {
  return (
    <div className="FieldWrapper">
      <label htmlFor={id} className="FieldWrapper__Label">
        <span className="FieldWrapper__Title">
          {label}
        </span>
        {children}
        {error && error.length > 0 && (
          <div className="FieldWrapper__Error">
            {error}
          </div>
        )}
      </label>
    </div>
  );
};
