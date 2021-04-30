import React from 'react';

interface IPoleProps {
    piece?: number
    onClick?: () => void
}

const Pole: React.FC<IPoleProps> = ({ piece, onClick }) => {

    return (
        <>
            <div role='pole' onClick={onClick} style={{ margin: 40, width: 20, backgroundColor: "orange", height: 80}}>
                { piece ? <div role='piece' style={{width: 40, backgroundColor: "red", height: 20, marginTop: 60, marginLeft: -10}}></div> : null }
            </div>
        </>
    )
}

export default Pole;