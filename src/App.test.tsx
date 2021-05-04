import React from 'react';
import {fireEvent, render, screen, within} from '@testing-library/react';
import App from './App';

describe('The hanoi tower game', () => {
  test('it two poles', () => {
    render(<App />);
    expect(screen.getAllByRole('pole')).toHaveLength(2)
  });

  describe('since there is a piece in the left most pole', () => {
    test('it will move that piece to the right pole if I click on the left one and then on the right one', async () => {
      render(<App />);
      fireEvent.click(screen.getAllByRole('pole')[0])
      fireEvent.click(screen.getAllByRole('pole')[1])

      const piecesInSecondPole = within(screen.getAllByRole('pole')[1]).getByRole('piece')
      expect(piecesInSecondPole).toBeInTheDocument()
    })
  })
});


