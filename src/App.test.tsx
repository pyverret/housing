import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Render App Title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('Home');
  expect(linkElement).toBeInTheDocument();
});
