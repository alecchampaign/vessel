import React, { ChangeEvent, SyntheticEvent, useState } from 'react';

import InputWithLabel from '../shared/InputWithLabel';
import NumberInputWithLabel from '../shared/NumberInputWithLabel';

const BuyForm: React.FC = () => {
  const [keyValue, setKeyValue] = useState<string>("")
  const [secretValue, setSecretValue] = useState<string>("")
  const [amountValue, setAmountValue] = useState<number>(0);
  const handleKeyChange = (e: ChangeEvent<HTMLInputElement>) => setKeyValue(e.currentTarget.value ?? '')
  const handleSecretChange = (e: ChangeEvent<HTMLInputElement>) => setSecretValue(e.target.value ?? '');
  const handleSetAmountValue = (e: ChangeEvent<HTMLInputElement>) => setAmountValue(Number(e.target.value))
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    // call lambda here
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputWithLabel label="API Key" name="key" currentValue={keyValue} handleChange={handleKeyChange} />
      <InputWithLabel label="API Secret" name="secret" currentValue={secretValue} handleChange={handleSecretChange} />
      <NumberInputWithLabel label="Amount" name="amount" currentValue={amountValue.toString()} handleChange={handleSetAmountValue} />
      <input type="submit" />
    </form>
  )
}

export default BuyForm;