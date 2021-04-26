import React from 'react';
import {render, screen} from '@testing-library/react';
import Pole from "./Pole";

describe('Pole', () => {
    test('it starts with no pieces', () => {
        render(<Pole />);
        expect(screen.queryByRole('piece')).not.toBeInTheDocument()
    });

    test('it can have a piece', () => {
        render(<Pole piece={1}/>);
        expect(screen.queryByRole('piece')).toBeInTheDocument()
    });
});


