// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import GpsMap from './components/GpsMap';
import WsConnection from './components/WsConnection';

function App() {
  const [position, setPosition] = useState([6.51857009026597, 3.384305071458719]); // Default position

  return (
    <div className="App">
     
      {/* <h1>GPS Tracker</h1> */}
      <WsConnection setPosition={setPosition} />
      <GpsMap position={position} />
    </div>
  );
}

export default App;
