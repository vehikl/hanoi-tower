import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

describe('The hanoi tower game', () => {
  test('it has at least one pole', () => {
    render(<App />);
    expect(screen.getByRole('pole')).toBeInTheDocument();
  });
});


