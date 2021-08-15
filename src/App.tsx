import React from 'react';
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback, myErrorHandler } from './utils/ErrorBoundary';
import { AppContainer } from './App.style';
import Header from './components/Header/Header';
import Statement from './components/Statement/Statement';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
    <AppContainer aria-label="appContainer">
       <Header />
       <Statement />
      </AppContainer>
      </ErrorBoundary>
  );
}

export default App;
