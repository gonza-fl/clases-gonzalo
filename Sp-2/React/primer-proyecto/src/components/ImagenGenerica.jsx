import { useState, useEffect } from 'react';

export function ImagenGenerica() {
  const [size, setSize] = useState('400');
  function changeSize(valor) {
    setSize(valor);
  }

  useEffect(() => {
    console.log('Imagen montado');
  }, []);

  return (
    <section>
      <img src={`https://picsum.photos/${size}`} alt='image-generica' />
      <button onClick={() => changeSize(100)}>100</button>
      <button onClick={() => changeSize(300)}>300</button>
      <button onClick={() => changeSize(400)}>400</button>
    </section>
  );
}
