import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Should render Header Component', () => {
  render(<Header />);
  const headerElement = screen.getByText(/Bench Test/i);
  expect(headerElement).toBeInTheDocument();
});