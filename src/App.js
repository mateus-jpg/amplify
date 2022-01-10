import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';

import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Authenticator>
      {({signOut, user}) => (
        <div className="App">
          <header className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <h1> sory ana :( </h1>
            <button onClick={signOut} className="App"> Sing aut </button>
          </header>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
