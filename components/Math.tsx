'use client'

import { useState, useEffect, ChangeEvent } from 'react';

const Math = () => {
  const [inputValue, setInputValue] = useState<number | ''>('');
  const [result, setResult] = useState<number>(0);
  const [multiplier, setMultiplier] = useState<number>(250); 

  useEffect(() => {
    if (inputValue !== '') {
      setResult(inputValue * multiplier);
    } else {
      setResult(0);
    }
  }, [inputValue, multiplier]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value === '' ? '' : parseFloat(value));
  };

  const changeMultiplier = () => {
    setMultiplier(multiplier === 250 ? 365 : 250); 
  };

  const formatWithCommas = (value: number) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div>
      <h1 className="text-3xl mb-2">how much did you make today?</h1>
      <p className="text-sm mb-2">type how much you made in the input box below</p>
      <input 
       type="number"
       className="mb-2 w-25 py-1 text-lg text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
       value={inputValue}
       onChange={handleInputChange}
      />
      { inputValue !== '' &&
        <>
          &nbsp;a day
          <h2 className="text-2xl">is {inputValue < 0 ? `-$${formatWithCommas(-result)}` : `$${formatWithCommas(result)}`} a year</h2>
          <p onClick={changeMultiplier}>if there are {multiplier} trading days a year</p>
        </>
      }
    </div>
  );
};

export default Math;