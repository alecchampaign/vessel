import React, { ChangeEvent, FC } from 'react';

interface NumberInputWithLabelProps {
  name: string;
  currentValue: string;
  label: string;
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
}



const NumberInputWithLabel: FC<NumberInputWithLabelProps> = ({ name, currentValue, label, handleChange }) => {
  const validateChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.validity.valid && handleChange(e);
  }
  return (
    <label>
      {label}
      <input type="text" pattern="[0-9]*" name={name} value={currentValue} onChange={validateChange} />
    </label>
  );
}

export default NumberInputWithLabel;