import { useEffect, useState } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';

import Counter from './components/Counter';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Container>
      <UserContainer />
      <Counter />
    </Container>
  );
}

export default App;
