import React, { ChangeEvent, FC } from 'react';

interface InputWithLabelProps {
  name: string;
  label: string;
  currentValue: string;
  handleChange(event: ChangeEvent): void;
}

const InputWithLabel: FC<InputWithLabelProps> = ({ name, label, currentValue, handleChange }) => {
  return (
    <>
      <label>
        {label}
        <input type="text" name={name} value={currentValue} onChange={handleChange} />
      </label>
    </>
  );
}

export default InputWithLabel;