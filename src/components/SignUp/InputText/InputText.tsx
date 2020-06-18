import React from 'react';
import cn from 'classnames';
import { FieldWrapper } from '../FieldWrapper';
import './InputText.scss';

interface Props {
  fieldSettings: FormField;
  value: string | number;
  error: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({
  fieldSettings,
  value,
  error,
  handleChange,
  handleBlur,
  handleFocus,
}: Props) => {
  const {
    id,
    name,
    type,
    label,
    placeholder,
    autoComplete,
  } = fieldSettings;

  return (
    <FieldWrapper id={id} label={label} error={error}>
      <>
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={cn('InputText', { 'InputText--error': error })}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </>
    </FieldWrapper>
  );
};
