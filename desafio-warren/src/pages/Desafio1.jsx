import React from 'react';
import desafio1 from '../utils/desafio1';

function Desafio1() {
  const list = desafio1(1000);
  return (
    <div>
      <h1>Desafio 1</h1>
      <div>
        <input type="text" placeholder='Digite o número aqui'/>
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
