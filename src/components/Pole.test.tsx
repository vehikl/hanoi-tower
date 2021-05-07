import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Pole from "./Pole";

describe('Pole', () => {
    test('it starts with no pieces', () => {
        render(<Pole pieces = {[]}/>);
        expect(screen.queryByRole('piece')).not.toBeInTheDocument()
    });

    test('it can have a piece', () => {
        render(<Pole pieces={[1]}/>);
        expect(screen.queryByRole('piece')).toBeInTheDocument()
    });

    test('it can have multiple pieces', () => {
        render(<Pole pieces={[1, 2, 3]}/>);
        expect(screen.getAllByRole('piece')).toHaveLength(3)
    });

    test('it can handle click event', ()=> {
        const myOnClickHandler = jest.fn();
        render(<Pole pieces={[1]} onClick={myOnClickHandler}/>);


        fireEvent.click(screen.getByRole('pole'));

        expect(myOnClickHandler).toHaveBeenCalled();
    });

    test('It can consider one of its pieces as pending, given an optional pendingPieceSize prop', () => {
        const sizeOfPendingPiece = 2;
        render(<Pole pieces={[sizeOfPendingPiece, 3]}  pendingPieceSize={sizeOfPendingPiece} />);

        let firstPiece = screen.getAllByRole('piece')[0];
        expect(firstPiece).toHaveAttribute('data-pending', "true");
    });

    test('Consider that all the pieces have pending as false, if none have been selected', () => {
        const sizeOfPendingPiece = 2;
        render(<Pole pieces={[sizeOfPendingPiece, 3]} />);
        const pieces = screen.getAllByRole('piece');
        pieces.forEach((piece) => {
            expect(piece).toHaveAttribute("data-pending", "false");
        });
    });
});


