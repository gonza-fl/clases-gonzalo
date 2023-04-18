import React from 'react';
import { Card, CardImg } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';

function User({ user }) {
  return (
    <Card>
      <CardHeader>
        <CardImg
          src={user.avatar}
          style={{
            minHeight: '78.83px',
            objectFit: 'contain',
          }}
          alt={`avatar to user ${user.first_name} `}
        />
      </CardHeader>
      <Card.Body>
        <Card.Title>
          {user.first_name}
          {user.last_name}
        </Card.Title>
        <Card.Text>{user.email}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default User;
