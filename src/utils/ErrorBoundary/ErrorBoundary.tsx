import {Main, ErrorContainer} from './ErrorBoundary.style';

const myErrorHandler = (error: Error, info: { componentStack: string }) => {
  // Do something with the error  E.g. log to an error logging client here
  console.error(error.message, info);
};

const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: any } ) => {
  return (
    <Main>
      <ErrorContainer>
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <img
          src='https://c.tenor.com/LaS8ciJZFDAAAAAM/baby-cry.gif'
          width='220px'
          height='154px'
          alt='cry baby'
        /><br></br>
        <button onClick={resetErrorBoundary}>Try again</button>
      </ErrorContainer>
    </Main>
  );
};

export { myErrorHandler, ErrorFallback };
