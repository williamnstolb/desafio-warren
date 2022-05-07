import React, { useState } from 'react';
import willHaveClass from '../utils/desafio2';

function Desafio2() {
  const [minAlunos] = useState(3);
  const [listChegada] = useState([0, 1, 2, -2, -1]);
  const vaiTerAula = willHaveClass(listChegada, minAlunos);
  return (
    <div>
      <h1>Desafio 2</h1>
      <h6> Construa um algoritmo que dado o tempo de chegada de cada aluno e o limite x de alunos presentes, determina se a classe vai ser cancelada ou não ("Aula cancelada” ou “Aula normal”).</h6>
      <p>Os três primeiros alunos chegaram no horário. Os dois últimos estavam atrasados. O limite é de três alunos, portanto a aula não será cancelada.</p>
      <div>
        <h4 >{`Resultado: ${ vaiTerAula } `}</h4>
      </div>
    </div>
  )
}

export default Desafio2;
