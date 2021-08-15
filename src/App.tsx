import React from 'react';
import { AppContainer } from './App.style';
import Header from './components/Header/Header';
import Statement from './components/Statement/Statement';

function App() {
  return (
    <>
    <AppContainer>
       <Header />
       <Statement />
      </AppContainer>
    </>
  );
}

export default App;
