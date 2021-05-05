import React from 'react';
import Piece from './Piece';

interface IPoleProps {
    pieces: Array<number>
    onClick?: () => void
}

const Pole: React.FC<IPoleProps> = ({ pieces, onClick }) => {

    return (
        <div role='pole' onClick={onClick} style={{ margin: 40, width: 20, backgroundColor: "orange", height: 80, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center"}}>
            <div>
                {
                    pieces.map((size, index) => {
                        console.log(index, size)
                        return <Piece key={index} width={size} />;
                    })
                }
            </div>
        </div>
    )
}

export default Pole;