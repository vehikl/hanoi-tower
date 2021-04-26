import React from 'react';

interface IPoleProps {
    piece: number
}

const Pole: React.FC<IPoleProps> = ({ piece }) => {

    return (
        <>
            <div role='pole'></div>
            { piece ? <div role='piece'></div> : null}
        </>
    )
}

export default Pole;