import React from 'react';
import {fireEvent, render, screen, within} from '@testing-library/react';
import App from './App';

describe('The hanoi tower game', () => {
  test('it has three poles', () => {
    render(<App />);
    expect(screen.getAllByRole('pole')).toHaveLength(3)
  });

  test('it starts with a piece in the left pole', () => {
    render(<App />);

    const withinTheLeftMostPole = within(screen.getAllByRole('pole')[0]);

    expect(withinTheLeftMostPole.getAllByRole('piece')[0]).toBeInTheDocument();
  });

  describe('since there are many pieces in the left most pole', () => {
    test('it will move a piece to the center pole if I click on the left one and then on the center one', async () => {
      render(<App />);
      fireEvent.click(screen.getAllByRole('pole')[0])
      fireEvent.click(screen.getAllByRole('pole')[1])

      const piecesInSecondPole = within(screen.getAllByRole('pole')[1]).getAllByRole('piece')[0]
      expect(piecesInSecondPole).toBeInTheDocument()

      const piecesInFirstPole = within(screen.getAllByRole('pole')[0]).getAllByRole('piece')[0]
      expect(piecesInFirstPole).toBeInTheDocument()
    })

    test('it will move that piece to the third pole if I click on the left one and then on the third one', async () => {
      render(<App />);
      fireEvent.click(screen.getAllByRole('pole')[0])
      fireEvent.click(screen.getAllByRole('pole')[2])

      const piecesInThirdPole = within(screen.getAllByRole('pole')[2]).getByRole('piece')
      expect(piecesInThirdPole).toBeInTheDocument()
    })
  })

  test('after moving the piece to the right-most pole, I can bring it back by clicking on the right on the right most pole, then on the left-most pole again', () => {
    render(<App />);
    fireEvent.click(screen.getAllByRole('pole')[0])
    fireEvent.click(screen.getAllByRole('pole')[1])

    fireEvent.click(screen.getAllByRole('pole')[1])
    fireEvent.click(screen.getAllByRole('pole')[0])

    const piecesInFirstPole = within(screen.getAllByRole('pole')[0]).queryAllByRole('piece')
    const piecesInSecondPole = within(screen.getAllByRole('pole')[1]).queryAllByRole('piece')

    expect(piecesInFirstPole).toHaveLength(3)
    expect(piecesInSecondPole).toHaveLength(0)
  })


  describe('Pieces follow the Byam Render', () => {
    test('A piece that is not pending has data-pending set to "false"', () => {
      render(<App />);

      const unpendingPiece = within(screen.getAllByRole('pole')[0]).queryAllByRole('piece')[0]

      expect(unpendingPiece).toHaveAttribute("data-pending", "false");
    });

    test('when you click a piece on the left pole to move it, it will change colour to indicate a pending piece', () => {
      render(<App />);
      fireEvent.click(screen.getAllByRole('pole')[0])

      const piecesInFirstPole = within(screen.getAllByRole('pole')[0]).queryAllByRole('piece')[0]
      expect(piecesInFirstPole).toBeInTheDocument()
      expect(piecesInFirstPole).toHaveAttribute("data-pending", "true");
    })

    test('when you click a piece on the left pole to move to the same one, it contains all the pieces', () => {
      render(<App />);

      fireEvent.click(screen.getAllByRole('pole')[0])
      fireEvent.click(screen.getAllByRole('pole')[0])

      const piecesInFirstPole = within(screen.getAllByRole('pole')[0]).queryAllByRole('piece')

      expect(piecesInFirstPole).toHaveLength(3)
    })

    test('second pole respects existing pieces', () => {
      render(<App />);

      fireEvent.click(screen.getAllByRole('pole')[0])
      fireEvent.click(screen.getAllByRole('pole')[2])
      fireEvent.click(screen.getAllByRole('pole')[0])
      fireEvent.click(screen.getAllByRole('pole')[1])
      fireEvent.click(screen.getAllByRole('pole')[2])
      fireEvent.click(screen.getAllByRole('pole')[1])

      const piecesInFirstPole = within(screen.getAllByRole('pole')[1]).queryAllByRole('piece')

      expect(piecesInFirstPole).toHaveLength(2)
    })
  })

  test('third pole respects existing pieces', () => {
    render(<App />);

    fireEvent.click(screen.getAllByRole('pole')[0])
    fireEvent.click(screen.getAllByRole('pole')[2])
    fireEvent.click(screen.getAllByRole('pole')[0])
    fireEvent.click(screen.getAllByRole('pole')[1])
    fireEvent.click(screen.getAllByRole('pole')[2])
    fireEvent.click(screen.getAllByRole('pole')[1])
    fireEvent.click(screen.getAllByRole('pole')[0])
    fireEvent.click(screen.getAllByRole('pole')[2])
    fireEvent.click(screen.getAllByRole('pole')[1])
    fireEvent.click(screen.getAllByRole('pole')[2])

    const piecesInFirstPole = within(screen.getAllByRole('pole')[2]).queryAllByRole('piece')

    expect(piecesInFirstPole).toHaveLength(2)
  })
});


