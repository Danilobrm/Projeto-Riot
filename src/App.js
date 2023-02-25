import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/GlobalStyle';

import UserContext from './contexts/UserContext';

function App() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  return (
    <UserContext.Provider value={{ user, setUser, pass, setPass }}>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
