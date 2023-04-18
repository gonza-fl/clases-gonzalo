import { useEffect, useState } from 'react';

function useUsers(page = 1) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      setIsLoad(true);
      const response = await fetch(
        `https://reqres.in/api/users?page=${page}`
      ).then((res) => res.json());
      setUsers(response.data);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoad(false);
    }
  }

  async function reFetch(page) {
    try {
      setIsLoad(true);
      const response = await fetch(
        `https://reqres.in/api/users?page=${page}`
      ).then((res) => res.json());
      setUsers(response.data);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoad(false);
    }
  }

  return {
    users,
    setUsers,
    reFetch,
    error,
    isLoad,
  };
}

export default useUsers;
