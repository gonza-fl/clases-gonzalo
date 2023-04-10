import { useState } from 'react';
import { ImagenGenerica } from './ImagenGenerica';
import ContadorBtn from './ContadorBtn';

export function App() {
  const [state, setState] = useState(true);
  const [counter, setCounter] = useState(0);
  function cambiarState() {
    setState(!state);
  }
  return (
    <>
      <h1 onClick={cambiarState}>{state ? 'hola mundo' : 'chau mundo'}</h1>
      <strong style={{ marginRight: '30px' }}>{counter}</strong>
      <ContadorBtn counter={counter} setCounter={setCounter} />
      <br />
      <br />
      <br />
      <hr />
      <ImagenGenerica />
    </>
  );
}
