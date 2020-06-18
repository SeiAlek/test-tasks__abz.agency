import React from 'react';
import './InputRadio.scss';

interface Props {
  fieldSettings: FormField;
  positionId: string;
  professionList: Profession[];
  error: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputRadio = ({
  fieldSettings,
  professionList,
  positionId,
  error,
  handleChange,
  handleFocus,
}: Props) => {
  const {
    label,
    name,
  } = fieldSettings;

  return (
    <div className="InputRadio">
      <span className="InputRadio__Title">
        {label}
      </span>
      <ul className="InputRadio__List">
        {professionList && professionList.map((profession: Profession) => (
          <li className="InputRadio__Item" key={profession.id}>
            <input
              type="radio"
              checked={`${profession.id}` === positionId}
              name={name}
              id={profession.id}
              className="InputRadio__Field"
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <label htmlFor={profession.id} className="InputRadio__Label">
              {profession.name}
            </label>
          </li>
        ))}
      </ul>
      {error && error.length > 0 && (
        <div className="InputRadio__Error">
          {error}
        </div>
      )}
    </div>
  );
};
