import React, { useState } from 'react';
import listNum from '../utils/desafio1';

function Desafio1() {
  const [number, setNumber] = useState();
  const list = listNum(number);

  const onChange = (e) => {
    const value = e.target.value;
    setNumber(value);
  }

  return (
    <div className="container">
      <h1>Desafio 1</h1>
      <h6> Construa um algoritmo que mostre na tela todos os números n onde a soma de n + reverso(n) resultem em números ímpares que estão abaixo de 1 milhão.</h6>
        <input type="number" placeholder='Digite o número' value={ number } onChange={ onChange } />   
        <div>
          <div>{ `Quantidade total de números: ${list.length}` } </div>
          <div className="container d-flex">
            <div className="row bg-">
              {list.map((number) => (
                <div className="col border border-dark" key={number}>
                  {number}
                  { ' ' }
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Desafio1;
