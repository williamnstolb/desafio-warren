import React, { useState, useEffect } from 'react';
import listOfCombination from '../utils/desafio3';

function Desafio3() {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeList = () => {
    const value = document.getElementById('valueAdd').value;
    setIsLoading(true);
    if(value !== '') {
      list.push(parseInt(value));
      setList(list);
    }
    document.getElementById('valueAdd').value = '';    
  }

  const cleanList = () => {
    setIsLoading(true);
    setList([]);
  }

  useEffect(() => {
    setIsLoading(false);
  }, [list, number, isLoading]);
  

  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  }

  return (
    <div>
      <h1>Desafio 3</h1>
      <h4> Dado um vetor de números e um número n. Determine a soma com o menor número de elementos entre os números do vetor mais próxima de n e também mostre os elementos que compõem a soma. Para criar a soma, utilize qualquer elemento do vetor uma ou mais vezes.</h4>
      <div>
        <label>Qual valor deseja adicionar na lista?:
          {' '}
          <input id="valueAdd" type="tel" placeholder="Digite aqui" />
          <button type="button" onClick={ handleChangeList }>Adicionar</button>
          <button type="button" onClick={ cleanList }>Limpa lista</button>
        </label>
        <br />
        <p >{isLoading ? <h1>Carregando...</h1> : `Lista de números: [${list}]` }</p>
        <br />
        <label >Número:
          {' '}
          <input type="tel" onChange={ handleChangeNumber } value={ number } />
        </label>
        
        <ul>Resultado:</ul>
        {
          listOfCombination(list, number).map((item) => (
            <li key={item}>[{item}]</li>
          ))
        }
      </div>
    </div>
  )
}

export default Desafio3;
