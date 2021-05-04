import React, {useState} from 'react';
import './App.css';
import Pole from "./components/Pole";

function App() {
    const [firstPolePiece, setFirstPolePiece] = useState<number>(1);
    const [pendingPiece, setPendingPiece] = useState<number>(0);
    const [secondPieceNumber, setSecondPieceNumber] = useState(0);

    function onFirstPoleClicked() {
        setFirstPolePiece(0);
        setPendingPiece(1);
    }

    function onSecondPoleClicked() {
        setSecondPieceNumber(pendingPiece);
    }

    return (
        <div style={{display: "flex"}}>
            Tower of Hanoi
            <div data-testid='first-pole'>
                <Pole piece={firstPolePiece} onClick={onFirstPoleClicked}/>
            </div>

            <div data-testid='second-pole'>
                <Pole piece={secondPieceNumber} onClick={onSecondPoleClicked}/>
            </div>
        </div>
    );
}

export default App;
