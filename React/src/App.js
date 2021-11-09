import './App.css';

import React, { useState } from 'react';

import GummyBear from './gummybear.png'

export default function App() {
  const [bears, setBears] = useState([])

  function handleClick() {
    let newBears = [...bears, <img src={GummyBear} style={{ width: '50px' }} alt="gummyBear" />]
    setBears(newBears)
  }

  return (
    <div className="App">
      <img
        src={GummyBear}
        style={{ display: 'block', width: '150px', cursor: 'pointer' }}
        onClick={handleClick}
        alt="Bear"
      />
      {bears}
    </div>
  );
}

