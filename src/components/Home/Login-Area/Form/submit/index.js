import React, { useContext, useEffect, useRef } from 'react';
import { Container } from './styled';
import { FaArrowRight } from 'react-icons/fa';
import UserContext from '../../../../../contexts/UserContext';

export default function Submit() {
  const { user, pass } = useContext(UserContext);
  const button = useRef();

  useEffect(() => {
    function checkInputStatus() {
      if (user && pass) {
        button.current.style.background = '#bc252a';
        button.current.style.cursor = 'pointer';
        button.current.disabled = false;
        return;
      }
      button.current.style.background = '#fff';
      button.current.style.cursor = 'default';
      button.current.disabled = true;
      return;
    }
    checkInputStatus();
  });

  return (
    <Container>
      <button type="submit" ref={button}>
        <FaArrowRight size={28} color="#e8e8e8" />
      </button>
    </Container>
  );
}
