import React from 'react';
import Piece from './Piece';

interface IPoleProps {
    piece?: number
    onClick?: () => void
}

const Pole: React.FC<IPoleProps> = ({ piece, onClick }) => {

    return (
        <div role='pole' onClick={onClick} style={{ margin: 40, width: 20, backgroundColor: "orange", height: 80, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center"}}>
            <div>
                { piece ?  <Piece/> : null }
            </div>
        </div>
    )
}

export default Pole;