import React, { useState } from 'react';
import desafio2 from '../utils/desafio2';

function Desafio2() {
  const [minAlunos] = useState(3);
  const [listChegada] = useState([0, 1, 2, -2, -1]);
  const vaiTerAula = desafio2(minAlunos, listChegada);
  return (
    <div>
      <h1>Desafio 2</h1>
      <h4> Construa um algoritmo que dado o tempo de chegada de cada aluno e o limite x de alunos presentes, determina se a classe vai ser cancelada ou não ("Aula cancelada” ou “Aula normal”).</h4>
      <h5>Os três primeiros alunos chegaram no horário. Os dois últimos estavam atrasados. O limite é de três alunos, portanto a aula não será cancelada.</h5>
      <div>
        <p >{ vaiTerAula }</p>
      </div>
    </div>
  )
}

export default Desafio2;
