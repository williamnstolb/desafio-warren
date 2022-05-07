import React, { useState } from 'react'
import Header from '../components/Header';
import Desafio1 from '../components/Desafio1';
import Desafio2 from '../components/Desafio2';
import Desafio3 from '../components/Desafio3';
import IsLoading from '../components/IsLoading';

function MainPage() {
  const [desafio, setDesafio] = useState('1');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChangeDesafio = (e) => {
    setIsLoading(true);
    const value = e.target.value;
setDesafio(value);
    setIsLoading(false);
  }

  return (
    <div>
      <Header handleChangeDesafio={handleChangeDesafio} />
      <div className="container">
        { isLoading ? <IsLoading /> : (
          <div>
            {desafio === '1' ? <Desafio1 /> : null}
            {desafio === '2' ? <Desafio2 /> : null}
            {desafio === '3' ? <Desafio3 /> : null}
          </div>
        )}
      </div>
    </div>
  )
}

export default MainPage;
