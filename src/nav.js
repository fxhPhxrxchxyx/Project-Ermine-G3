import React, { Component, useEffect, useState } from 'react';
import './nav.css'
import NavBarLink from './NavBarLink'





function Navbar() {


  return (
    <div className="navbar">



      <ul>
        {/* <li style={{ padding: "14px 16px" }} ><a onMouseEnter={() => setishover(true)} onMouseLeave={() => setishover(false)} className={ishover ? 'bg-active' : 'bg'} href="#member">Member</a></li> */}
        <NavBarLink href="#member" isactive={false} > Member </NavBarLink>
        <NavBarLink href="#story" isactive={false} > Story </NavBarLink>
        <NavBarLink href="#moral" isactive={false} > Moral </NavBarLink>

        {/* <li><a href="#story">Story</a></li>
        <li><a href="#moral">Moral</a></li> */}

      </ul>

      <div style={{ height: 64, width: "100%" }}></div>

    </div>
  )
}















export default Navbar