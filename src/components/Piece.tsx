import React from 'react';

interface IPieceProps {
    width: number
    isPending: boolean
}

const Piece: React.FC<IPieceProps> = ({width, isPending}) => {
    return (
        <>
            <div role='piece' data-pending={isPending} style={{width: 30 + 10 * width, height: 20, margin: "auto", marginTop: "2px"}}></div>
        </>);
};

export default Piece;