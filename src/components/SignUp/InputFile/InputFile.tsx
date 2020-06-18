import React from 'react';
import cn from 'classnames';
import { FieldWrapper } from '../FieldWrapper';
import './InputFile.scss';

interface Props {
  fieldSettings: FormField;
  value: File | null;
  error: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputFile = ({
  fieldSettings,
  value,
  error,
  handleChange,
  handleFocus,
}: Props) => {
  const {
    id,
    name,
    label,
    placeholder,
  } = fieldSettings;

  return (
    <FieldWrapper id={id} label={label} error={error}>
      <div className="InputFile__Wrapper">
        <input
          type="file"
          name={name}
          id={id}
          className={cn('InputFile', { 'InputFile--error': error })}
          accept="image/jpg, image/jpeg"
          onChange={handleChange}
          onFocus={handleFocus}
        />
        <span
          className={cn('InputFile__Custom', { 'InputFile__Custom--error': error })}
          data-title={(value?.name) || placeholder}
        />
      </div>
    </FieldWrapper>
  );
};
