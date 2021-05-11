import React, {useState} from 'react';
import './App.css';
import Pole from "./components/Pole";

function App() {
    const [pendingPiece, setPendingPiece] = useState<number|null>(null);
    const [firstPolePieces, setFirstPolePieces] = useState<number[]>([1, 2, 3]);
    const [secondPolePieces, setSecondPolePieces] = useState<number[]>([]);
    const [thirdPolePieces, setThirdPolePieces] = useState<number[]>([]);
    const [numberOfPieces, setNumberOfPieces] = useState(3)

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
        <div>
            Tower of Hanoi

            <div style={{display: "flex"}}>
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

            <div>
                <input role='input-box'
                       id='input-box'
                       type="number"
                       value={numberOfPieces}
                       onChange={(e) => {
                           setNumberOfPieces(Number(e.target.value));
                       }}/>
                <button role='piece-adjustment' style={{}} onClick={() => {
                    let newStartingPieces = Array.from({length: numberOfPieces}, (_, i) => i+1);
                    setFirstPolePieces(newStartingPieces);
                }}>Save</button>
            </div>
        </div>
    );
}

export default App;
