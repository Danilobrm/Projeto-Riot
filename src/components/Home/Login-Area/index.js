import React from 'react';
import { Container } from './styled';
import Form from './Form';
import LoginTop from './LoginTop';

export default function LoginComponent() {
  return (
    <Container>
      <LoginTop />
      <Form />
    </Container>
  );
}
