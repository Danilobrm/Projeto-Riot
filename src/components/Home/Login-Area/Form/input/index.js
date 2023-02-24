import React, { useState, useContext, useEffect } from 'react';
import { Container } from './styled';

import UserContext from '../../../../../contexts/UserContext';

export default function Inputs() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser, setPass } = useContext(UserContext);
  useEffect(() => {
    setUser(username);
    setPass(password);
  });

  return (
    <Container>
      <div className="form-group">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <span className={username ? 'active' : ''}>NOME DE USUÁRIO</span>
      </div>

      <div className="form-group">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className={password ? 'active' : ''}>SENHA</span>
      </div>
    </Container>
  );
}
