import React from 'react';

interface IPoleProps {
    piece?: number
    onClick?: () => void
}

const Pole: React.FC<IPoleProps> = ({ piece, onClick }) => {

    return (
        <>
            <div role='pole' onClick={onClick} style={{ margin:40, width: 20, backgroundColor: "orange", height: 80}}></div>
            { piece ? <div role='piece'></div> : null}
        </>
    )
}

export default Pole;