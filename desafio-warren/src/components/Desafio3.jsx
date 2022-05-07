import React, { useState, useEffect } from 'react';
import listOfCombination from '../utils/desafio3';
import IsLoading from './IsLoading';
import Button from 'react-bootstrap/esm/Button';

function Desafio3() {
  const [list, setList] = useState([2,3,4]);
  const [number, setNumber] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeList = () => {
    const value = document.getElementById('valueAdd').value;
    setIsLoading(true);
    if(value !== '' && value !== undefined) {
      if(!(list.find(n => n === parseInt(value)))) list.push(parseInt(value));
      setList(list);
      document.getElementById('valueAdd').value = '';
    }
  }

  const cleanList = () => {
    setIsLoading(true);
    setList([]);
  }

  useEffect(() => {
    setIsLoading(false);
  }, [list, number, isLoading]);
  

  const handleChangeNumber = (e) => {
    setIsLoading(true);
    setNumber(e.target.value);
  }

  return (
    <div>
      <h1>Desafio 3</h1>
      <h6> Dado um vetor de números e um número n. Determine a soma com o menor número de elementos entre os números do vetor mais próxima de n e também mostre os elementos que compõem a soma. Para criar a soma, utilize qualquer elemento do vetor uma ou mais vezes.</h6>
      <div>
        <label>Qual valor deseja adicionar na lista?:
          {' '}
          <input id="valueAdd" type="number" placeholder="Digite aqui" />
          <br />
          <br />
          <Button className="btn btn-success" type="button" onClick={ handleChangeList }>Adicionar</Button>
          { ' ' }
          <Button className="btn btn-danger" type="button" onClick={ cleanList }>Limpa lista</Button>
        </label>
        <br />
        <br />
        <div >{isLoading ? <IsLoading /> : `Lista de números: [${list}]` }</div>
        <br />
        <label >Número:
          {' '}
          <input type="tel" onChange={ handleChangeNumber } value={ number } />
        </label>        
        <ul className="list-group">Resultado:</ul>
        { isLoading ? <IsLoading /> :
          listOfCombination(list, number).map((item) => (
            <li className="list-group-item" key={item}>[{item}]</li>
          ))
        }
      </div>
    </div>
  )
}

export default Desafio3;
