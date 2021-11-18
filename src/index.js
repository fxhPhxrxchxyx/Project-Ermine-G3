import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Firstpage, { Page } from './firstpage';
import reportWebVitals from './reportWebVitals';
import Pagetwo from './twopage';
import Navbar from './nav.js';
import Pagethree from './threepage';
import Pagefour from './fourpage';
import Pagefive from './fivepage';
import Pagesix from './sixpage';
import Pageseven from './sevenpage';
import Pageeight from './eight'
import Pagenine from './nine'
import Pageten from './ten';
import Banner from './banner';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Banner/>
   <Firstpage/>
    <Pagetwo/>
    <Pagethree/>
    <Pagefour/>
    <Pagefive/>
    <Pagesix/>
    <Pageseven/>
   
    <Pagenine/>
    <Pageten/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
