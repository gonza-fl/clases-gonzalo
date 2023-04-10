import React from 'react';

function ContadorBtn({ setCounter, counter }) {
  function increment() {
    const newResult = counter + 1;
    setCounter(newResult);
  }
  return <button onClick={increment}>ContadorBtn</button>;
}

export default ContadorBtn;
