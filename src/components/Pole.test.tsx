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
});


