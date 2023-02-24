import React from 'react';
import { Container } from './styled';
import Inputs from './input';
import LoginSocialComponent from './login-social';
import KeepLogin from './keep-login';
import Submit from './submit';

export default function Form() {
  return (
    <Container>
      <form>
        <Inputs />
        <LoginSocialComponent />
        <KeepLogin />
        <Submit />
        <h3>NÃO CONSEGUE INICIAR SESSÃO?</h3>
        <h3>CRIAR CONTA</h3>
      </form>
    </Container>
  );
}
