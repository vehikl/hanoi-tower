import React from 'react';
import {fireEvent, render, screen, within} from '@testing-library/react';
import App from './App';

describe('The hanoi tower game', () => {
  test('it two poles', () => {
    render(<App />);
    expect(screen.getAllByRole('pole')).toHaveLength(2)
  });

  test('it starts with a piece in the left pole', () => {
    render(<App />);

    const withinTheLeftMostPole = within(screen.getAllByRole('pole')[0]);

    expect(withinTheLeftMostPole.getByRole('piece')).toBeInTheDocument();
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

  test('after moving the piece to the right-most pole, I can bring it back by clicking on the right on the right most pole, then on the left-most pole again', () => {
    render(<App />);
    fireEvent.click(screen.getAllByRole('pole')[0])
    fireEvent.click(screen.getAllByRole('pole')[1])
    fireEvent.click(screen.getAllByRole('pole')[1])
    fireEvent.click(screen.getAllByRole('pole')[0])
    const hml = screen.debug();
    console.log(hml);
    const piecesInFirstPole = within(screen.getAllByRole('pole')[0]).queryByRole('piece')
    const piecesInSecondPole = within(screen.getAllByRole('pole')[1]).queryByRole('piece')

    expect(piecesInFirstPole).toBeInTheDocument()
    expect(piecesInSecondPole).toBeNull()
  })
});


