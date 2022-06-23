import Layout from '../components/Layout'
import { useState } from "react";

const fibonacci: React.FC = () => {
  const [number, setNumber] = useState(0);

  let fibonacci: number[] = [0, 1];

  const listFibonacci = (num: number) => {
    for (let i: number = 2; i < num; i++) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
  }

  const onQuantityPlus = () => {
    setNumber(number + 1);
  };

  const onQuantityMinus = () => {
    setNumber(number - 1 < 0 ? 0 : number - 1);
  };


  return (
    <Layout>
      <h1>Sélectionnez un chiffre</h1>
      <div className='cta'>
        <button onClick={() => onQuantityMinus()}>-</button>
        <h2>&nbsp;{number}&nbsp;</h2>
        <button onClick={() => onQuantityPlus()}>+</button>
      </div>
      <h3>Voici la suite de Fibonacci correspondante</h3>
      <h2>{listFibonacci(number)}</h2>
      <style jsx>{`
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
    </Layout>
  )
}

export default fibonacci;
