import React from 'react';

interface IPieceProps {
    width: number
}

const Piece: React.FC<IPieceProps> = ({width}) => {
    return (
        <>
            <div role='piece' style={{width: 30 + 10 * width, backgroundColor: "red", height: 20, margin: "auto", marginTop: "2px"}}></div>
        </>);
}

export default Piece;