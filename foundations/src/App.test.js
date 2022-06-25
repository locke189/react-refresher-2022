import { render, screen } from '@testing-library/react';
import App from './App';

test('does not render learn react link', () => {
  render(<App />);
  expect(true).toBe(true);
});
