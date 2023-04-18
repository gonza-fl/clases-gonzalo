import React, { useState } from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import useUsers from '../hooks/useUsers';
import User from './User';
import CustomPagination from './Pagination';

const INITIAL_PAGE = 1;

function UserContainer() {
  const { users, reFetch, isLoad } = useUsers();
  const [page, setPage] = useState(INITIAL_PAGE);
  return (
    <Container fluid className='d-flex flex-column align-items-center mt-5'>
      <CustomPagination page={page} setPage={setPage} reFetch={reFetch} />
      <Row className='d-flex gap-3 mt-5'>
        <CardGroup>
          {users.map((user, idx) => (
            <User key={idx} user={user} />
          ))}
        </CardGroup>
      </Row>
      <CustomPagination
        page={page}
        setPage={setPage}
        margin={'mt-5'}
        reFetch={reFetch}
      />
    </Container>
  );
}

export default UserContainer;
