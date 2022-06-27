import React from 'react';
import { useState } from "react";
import {fibonacci, listFibonacci} from "../helpers/helpers"

const FibonacciModule: React.FC = () => {
  const [number, setNumber] = useState(2);
  const onQuantityPlus = () => {
    setNumber(number + 1);
  };

  const onQuantityMinus = () => {
    if (number - 1 < 1) {
      setNumber(1)
    } else {
      setNumber(number - 1)
      fibonacci.pop()
    }
  }
  console.log(listFibonacci(number))
  return (
    <>
      <h1>Sélectionnez un chiffre</h1>
      <div className='cta'>
        <button onClick={() => onQuantityMinus()}>-</button>
        <h2>&nbsp;{number}&nbsp;</h2>
        <button onClick={() => onQuantityPlus()}>+</button>
      </div>
      <h3>Voici la suite de Fibonacci correspondante</h3>
      <h2 data-testid="fibonacci">{listFibonacci(number)}</h2>
      <style jsx={true}>{`
        .cta {
          display: flex;
          align-items: center;
        }
        button {
          cursor: pointer;
          height: 35px;
          text-align: center;
          background-color: transparent;
          border: 1px solid transparent;
          padding: 6px 12px;
          margin: 6px 12px;
          font-size: 1rem;
          border-radius: .25rem;
      `}</style>
    </>
  )
};

export default FibonacciModule;
