import React, {useState} from 'react';
import './App.css';
import Pole from "./components/Pole";

function App() {
    const [firstPolePieces, setFirstPolePieces] = useState<number[]>([1, 2, 3]);
    const [pendingPiece, setPendingPiece] = useState<number|null>(null);
    const [secondPolePieces, setSecondPolePieces] = useState<number[]>([]);
    const [thirdPolePieces, setThirdPolePieces] = useState<number[]>([]);

    function onFirstPoleClicked() {
        if (!pendingPiece) {
            setPendingPiece(firstPolePieces[0]);
            setFirstPolePieces((prev)=>{
                return prev.slice(1);
            });
        } else {
            setFirstPolePieces([pendingPiece]);
            setPendingPiece(null);
        }
    }

    function onSecondPoleClicked() {
        if (!pendingPiece) {
            setPendingPiece(secondPolePieces[0]);
            setSecondPolePieces([]);
        }
        else{
            setSecondPolePieces([pendingPiece]);
            setPendingPiece(null);
        }
    }

    function onThirdPoleClicked() {
        if (!pendingPiece) {
            setPendingPiece(thirdPolePieces[0]);
            setThirdPolePieces([]);
        }
        else{
            setThirdPolePieces([pendingPiece]);
            setPendingPiece(null);
        }
    }

    return (
        <div style={{display: "flex"}}>
            Tower of Hanoi
            <div data-testid='first-pole'>
                <Pole pieces={firstPolePieces} onClick={onFirstPoleClicked}/>
            </div>

            <div data-testid='second-pole'>
                <Pole pieces={secondPolePieces} onClick={onSecondPoleClicked}/>
            </div>

            <div data-testid='third-pole'>
                <Pole pieces={thirdPolePieces} onClick={onThirdPoleClicked}/>
            </div>
        </div>
    );
}

export default App;
