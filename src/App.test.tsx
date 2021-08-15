import { render } from '@testing-library/react';
import App from './App';

test('should render App Component', () => {
  const { getByLabelText } = render(<App />);
  const headerRow = getByLabelText('appContainer')
  expect(headerRow).not.toBeNull();
});