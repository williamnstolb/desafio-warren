import React, { useState } from 'react';
import desafio1 from '../utils/desafio1';

function Desafio1() {
  const [number, setNumber] = useState(0);
  const list = desafio1(number);

  const onChange = (e) => {
    const value = e.target.value;
    setNumber(value);
  }

  return (
    <div>
      <h1>Desafio 1</h1>
      <h4> Construa um algoritmo que mostre na tela todos os números n onde a soma de n + reverso(n) resultem em números ímpares que estão abaixo de 1 milhão.</h4>
      <div>
        <label htmlFor="number">Digite o número aqui { '===> ' } </label>
        <input id="number" type="text" value={ number } onChange={ onChange } />
      </div>
      <div>
        <p >{ `Quantidade total de números: ${list.length}` } </p>
        {list.map((number) => (
          <span key={number}>
            {number}
            { ' ' }
          </span>
        ))}
      </div>
    </div>
  )
}

export default Desafio1;
