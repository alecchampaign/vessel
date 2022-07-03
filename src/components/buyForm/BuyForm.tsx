import React, { ChangeEvent, SyntheticEvent, useState } from 'react';

import InputWithLabel from '../shared/InputWithLabel';

const BuyForm: React.FC = () => {
  const [keyValue, setKeyValue] = useState<string>("")
  const [secretValue, setSecretValue] = useState<string>("")
  const handleKeyChange = (e: ChangeEvent<HTMLInputElement>) => setKeyValue(e.currentTarget.value ?? '')
  const handleSecretChange = (e: ChangeEvent<HTMLInputElement>) => setSecretValue(e.target.value ?? '');
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

  }

  return (
    <form onSubmit={handleSubmit}>
      <InputWithLabel label="API Key" name="key" currentValue={keyValue} handleChange={handleKeyChange} />
      <InputWithLabel label="API Secret" name="secret" currentValue={secretValue} handleChange={handleSecretChange} />
      <input type="submit" />
    </form>
  )
}

export default BuyForm;