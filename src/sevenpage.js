import React, { useState, useEffect } from 'react';
import { Page } from './firstpage';
import bg7 from './bg7.png';
import Sheep from './sheepp.png'
import Wolf from './wolf.png'
import './index.css'
import './seven.css'




function Pageseven() {
  const [sheeps, setSheeps] = useState([])
  useEffect(() => {
    let newsheep = []
    for (let i = 0; i < 10; i++) {
      newsheep = [...newsheep, <img src={Sheep} style={{ width: '80px', padding: '20px' }} alt="sheep" />]
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
    <div style={{ position: 'relative' }}>
      <Page bg={bg7} height="120vh" />

      <div class="container">
        <img
          src={Wolf}
          style={{ display: 'fixed', width: '150px', cursor: 'pointer' }}
          onClick={handleDelete}
          alt="Wolf" className="wolf"
        />
        <div className="sheep">

          {sheeps}
        </div>




      </div>

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






  );


}




export default Pageseven