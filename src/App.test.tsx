import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

describe('The hanoi tower game', () => {
  test('it two poles', () => {
    render(<App />);
    expect(screen.getAllByRole('pole')).toHaveLength(2)
  });
});


