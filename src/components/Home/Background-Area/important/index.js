import React, { useRef } from 'react';
import { Container } from './styled';
import { FaExclamation } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';

export default function ImportantComponent() {
  const message = useRef();
  function showMessage() {
    message.current.style.display = 'flex';
  }
  function hideMessage() {
    message.current.style.display = 'none';
  }
  return (
    <Container>
      <div onMouseOver={showMessage} onMouseOut={hideMessage}>
        <button>
          <FaExclamation size={20} color="black" />
        </button>
      </div>
      <div
        className="message-box"
        ref={message}
        onMouseOver={showMessage}
        onMouseOut={hideMessage}
      >
        <span></span>
        <span className="message">
          <article>
            <h4>Transferências de conta indisponíveis</h4>
            <p>
              <FaClock />
              22/09/2021 13:49
            </p>
            <p>
              As trasnferências de conta estão indisponíveis enquanto
              trabalhamos na solução de um problema.
            </p>
            <a>
              <h6>MAIS DETALHES</h6>
            </a>
          </article>
        </span>
      </div>
    </Container>
  );
}
