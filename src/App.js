import './App.css';


import React, { useState, useEffect } from 'react';

import Sheep from './sheepp.png'
import Wolf from './wolf.png'
import Firstpage from './firstpage'
import Navbar from './nav.js';
import AOS from 'aos';
import "aos/dist/aos.css";



/*import bg1 from './bg1.png'
import styled from  'styled-components' ;*/

/*const Pageone = styled.div`
 background-image: url(${bg1});
 
 height: 500px;
`*/


export default function App() {
  const [sheeps, setSheeps] = useState([])
  useEffect(() => {
    let newsheep = []
    for (let i = 0; i < 10; i++) {
      newsheep = [...newsheep, <img src={Sheep} style={{ width: '50px', padding: '20px' }} alt="sheep" />]
    }
    setSheeps(newsheep)
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      mirror: true
    });
    AOS.refresh()
  }, []);

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

      <Navbar />
      <Firstpage />


      <Firstpage />



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
