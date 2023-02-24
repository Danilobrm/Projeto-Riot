import React from 'react';
import BackgroundComponent from '../../components/Home/Background-Area';
import LoginComponent from '../../components/Home/Login-Area';
import { Container } from './styled';

export default function Home() {
  return (
    <Container>
      <LoginComponent />
      <BackgroundComponent />
    </Container>
  );
}
