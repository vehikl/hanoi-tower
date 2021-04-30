import React from 'react';
import './App.css';
import Pole from "./components/Pole";

function App() {
  return (
   <div style={{ display: "flex" }}>
     Tower of Hanoi
     <Pole/>

     <Pole/>
   </div>
  );
}

export default App;
