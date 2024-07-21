import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App header', () => {
  render(<App />);
  const linkElement = screen.getByText(/trivia app/i);
  expect(linkElement).toBeInTheDocument();
});
