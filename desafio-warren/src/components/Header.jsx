import React from 'react';
import Button from 'react-bootstrap/esm/Button';

function Header(props) {
  const { handleChangeDesafio } = props;

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="navbar-nav">
          <Button class="nav-link active" aria-current="page" type="button" onClick={handleChangeDesafio} value={1}>Desafio 1</Button>          
        </div>
        <div class="navbar-nav">
          <Button class="nav-link active" aria-current="page" type="button" onClick={handleChangeDesafio} value={2}>Desafio 2</Button>
        </div>
        <div class="navbar-nav">
          <Button class="nav-link active" aria-current="page" type="button" onClick={handleChangeDesafio} value={3}>Desafio 3</Button>
        </div>
      </div>
    </nav>
  )
}

export default Header;
