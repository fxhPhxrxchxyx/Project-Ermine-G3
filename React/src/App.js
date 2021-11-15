import './App.css';
// import Snowfall from 'react-snowfall'

import React, { useState, useEffect } from 'react';

import Sheep from './sheepp.png'
import Wolf from './wolf.png'

export default function App() {
  const [sheeps, setSheeps] = useState([])
  useEffect(() => {
    let newsheep = []
    for (let i = 0; i < 10; i++) {
      newsheep = [...newsheep, <img src={Sheep} style={{ width: '50px', padding: '20px' }} alt="sheep" />]
    }
    setSheeps(newsheep)
  }, [])

  function handleClick() {
    let newSheeps = [...sheeps, <img src={Sheep} style={{ width: '50px' }} alt="sheep" />]
    setSheeps(newSheeps)
  }
  function handleDelete() {
    let suriveSheep = []
    for (let i = 0; i < sheeps.length - 1; i++) {
      suriveSheep.push(sheeps[i])
    }
    setSheeps(suriveSheep)
  }

  return (
    <div className="App">


      {/* <img
        src={Sheep}
        style={{ display: 'block', width: '150px', cursor: 'pointer' }}
        onClick={handleClick}
        alt="Sheep"
      /> */}
      {sheeps}
      <img
        src={Wolf}
        style={{ display: 'block', width: '150px', cursor: 'pointer' }}
        onClick={handleDelete}
        alt="Wolf"
      />


      <div class="container">
        <div class="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
