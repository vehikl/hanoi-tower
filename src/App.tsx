import React, {useState} from 'react';
import './App.css';
import Pole from "./components/Pole";

function App() {
    const [pendingPiece, setPendingPiece] = useState<number|null>(null);
    const [firstPolePieces, setFirstPolePieces] = useState<number[]>([1, 2, 3]);
    const [secondPolePieces, setSecondPolePieces] = useState<number[]>([]);
    const [thirdPolePieces, setThirdPolePieces] = useState<number[]>([]);

    function onFirstPoleClicked() {
        if (!pendingPiece) {
            setPendingPiece(firstPolePieces[0]);
        } else {
            if (pendingPiece > firstPolePieces[0]) {
                setPendingPiece(null);
                return;
            }
            removePendingPieceFromOtherPoles();
            setFirstPolePieces((prev) => {
                return [pendingPiece, ...prev];
            });
            setPendingPiece(null);
        }
    }

    function removePendingPieceFromOtherPoles(){
        setFirstPolePieces(firstPolePieces.filter(piece => piece !== pendingPiece));
        setSecondPolePieces(secondPolePieces.filter(piece => piece !== pendingPiece));
        setThirdPolePieces(thirdPolePieces.filter(piece => piece !== pendingPiece));
    }

    function onSecondPoleClicked() {
        if (!pendingPiece) {
            setPendingPiece(secondPolePieces[0]);
        }
        else{
            if (pendingPiece > secondPolePieces[0]) {
                setPendingPiece(null);
                return
            }
            removePendingPieceFromOtherPoles();
            setSecondPolePieces((prev) => {
                return [pendingPiece, ...prev];
            });
            setPendingPiece(null);
        }
    }

    function onThirdPoleClicked() {
        if (!pendingPiece) {
            setPendingPiece(thirdPolePieces[0]);
        }
        else{
            if (pendingPiece > thirdPolePieces[0]) {
                setPendingPiece(null);
                return
            }
            removePendingPieceFromOtherPoles();
            setThirdPolePieces((prev) => {
                return [pendingPiece, ...prev];
            });
            setPendingPiece(null);
        }
    }

    return (
        <div style={{display: "flex"}}>
            Tower of Hanoi
            <div data-testid='first-pole'>
                <Pole pieces={firstPolePieces} onClick={onFirstPoleClicked} pendingPieceSize={pendingPiece}/>
            </div>

            <div data-testid='second-pole'>
                <Pole pieces={secondPolePieces} onClick={onSecondPoleClicked} pendingPieceSize={pendingPiece}/>
            </div>

            <div data-testid='third-pole'>
                <Pole pieces={thirdPolePieces} onClick={onThirdPoleClicked} pendingPieceSize={pendingPiece}/>
            </div>
        </div>
    );
}

export default App;
