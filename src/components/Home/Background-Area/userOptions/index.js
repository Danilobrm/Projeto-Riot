import React, { useRef } from 'react';
import { Container } from './styled';
import { FaUser } from 'react-icons/fa';

export default function UserOptionsComponent() {
  const userOptions = useRef();
  const userIcon = useRef();

  function openUserOptions() {
    userOptions.current.classList.toggle('active');
    userIcon.current.children[0].classList.toggle('active');
  }

  return (
    <Container>
      <div onClick={openUserOptions}>
        <button ref={userIcon}>
          <FaUser size={25} />
        </button>
      </div>
      <div ref={userOptions} className="user-menu">
        <nav>
          <a>CONFIGURAÇÕES</a>
          <a>ENCERRAR SESSÃO</a>
          <a>SAIR</a>
        </nav>
      </div>
    </Container>
  );
}
