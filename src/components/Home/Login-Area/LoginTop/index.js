import React from 'react';
import { Container } from './styled';
import logoRiot from '../../../../assets/images.png';

export default function LoginTop() {
  return (
    <Container>
      <div className="riot-logo">
        <img src={logoRiot} alt="logo-riot" />
      </div>
      <h1>Fazer login</h1>
    </Container>
  );
}
