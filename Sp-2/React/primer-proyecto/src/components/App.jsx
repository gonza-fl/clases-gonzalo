import { useState, useEffect } from 'react';
import { ImagenGenerica } from './ImagenGenerica';
import ContadorBtn from './ContadorBtn';

const GENERIC_USER = {
  avatar: 'https://picsum.photos/300',
  email: 'email.generic@reqres.in',
  first_name: 'UserName',
  id: 0,
  last_name: 'UserLastName',
};
export function App() {
  const [state, setState] = useState(true);
  const [show, setShow] = useState(true);
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([GENERIC_USER]);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (counter > 0) {
      console.log('counter se modificó');
    }
  }, [counter]);

  async function getUsers() {
    try {
      const response = await fetch('https://reqres.in/api/users').then((res) =>
        res.json()
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

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
      <button onClick={() => setShow(!show)}>
        {!show ? 'Show Image' : 'Hide Image'}
      </button>
      <br />
      <br />
      {show && <ImagenGenerica />}

      <section>
        {users?.map((user) => (
          <article key={user.id}>
            <h3>{user.first_name}</h3>
            <img src={user.avatar} alt='' />
            <span>{user.email}</span>
          </article>
        ))}
      </section>
    </>
  );
}
