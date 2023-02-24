import React from 'react';
import { Container } from './styled';

export default function KeepLogin() {
  return (
    <Container>
      <div className="keepLogin">
        <label className="container">
          Manter login
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
    </Container>
  );
}
