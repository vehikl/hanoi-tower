import React, {useState} from 'react';
import './App.css';
import Pole from "./components/Pole";

function App() {
    const [firstPolePiece, setFirstPolePiece] = useState<number>(1);
    const [pendingPiece, setPendingPiece] = useState<number>(0);
    const [secondPolePiece, setSecondPolePiece] = useState(0);

    function onFirstPoleClicked() {
        if (!pendingPiece) {
            setFirstPolePiece(0);
            setPendingPiece(1);
        } else {
            setFirstPolePiece(1);
            setPendingPiece(0);
        }
    }

    function onSecondPoleClicked() {
        if (!pendingPiece) {
            setPendingPiece(1);
            setSecondPolePiece(0);
        }
        else{
            setSecondPolePiece(pendingPiece);
            setPendingPiece(0);
        }
    }

    return (
        <div style={{display: "flex"}}>
            Tower of Hanoi
            <div data-testid='first-pole'>
                <Pole piece={firstPolePiece} onClick={onFirstPoleClicked}/>
            </div>

            <div data-testid='second-pole'>
                <Pole piece={secondPolePiece} onClick={onSecondPoleClicked}/>
            </div>
        </div>
    );
}

export default App;
