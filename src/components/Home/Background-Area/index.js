import React from 'react';
import ImportantComponent from './important';
import { Container } from './styled';
import UserOptionsComponent from './userOptions';

export default function LoginComponent() {
  return (
    <Container>
      <ImportantComponent />
      <UserOptionsComponent />
    </Container>
  );
}
