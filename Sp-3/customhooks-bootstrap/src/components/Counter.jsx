import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
const INITAL_COUNTER = 0;

function Counter() {
  const [count, setCount] = useState(INITAL_COUNTER);
  return (
    <Row>
      <Col className='d-flex justify-content-center align-items-center flex-column gap-1'>
        <span>{count}</span>
        <Button variant='success' onClick={() => setCount(count + 1)}>
          Increment
        </Button>
        <Button variant='warning' onClick={() => setCount(count - 1)}>
          Decrement
        </Button>
        <Button variant='secondary' onClick={() => setCount(INITAL_COUNTER)}>
          Reset
        </Button>
      </Col>
    </Row>
  );
}

export default Counter;
