'use client'

import { useState, useEffect, ChangeEvent } from 'react';
import styles from './Math.module.css'; 

const Math = () => {
  const [inputValue, setInputValue] = useState<number | ''>('');
  const [result, setResult] = useState<number>(0);
  const [shrinkClass, setShrinkClass] = useState('');

  useEffect(() => {
    if (inputValue !== '') {
      setResult(inputValue * 250);
    } else {
      setResult(0);
    }
  }, [inputValue]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value === '' ? '' : parseFloat(value));
    if (shrinkClass) setShrinkClass(''); 
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && inputValue === '') {
      setShrinkClass(styles.shrink);
      setTimeout(() => setShrinkClass(''), 300); 
    }
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
       className={`mb-2 w-25 py-1 text-lg text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${shrinkClass}`}
       value={inputValue}
       onChange={handleInputChange}
       onKeyDown={handleKeyDown}
      />
      { inputValue !== '' &&
        <>
          &nbsp;a day
          <h2 className="text-2xl">is {inputValue < 0 ? `-$${formatWithCommas(-result)}` : `$${formatWithCommas(result)}`} a year</h2>
          <p>if there are 250 trading days a year </p>
        </>
      }
    </div>
  );
};

export default Math;