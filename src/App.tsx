import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Footer} from "./components/Footer/Footer";
import {About} from "./components/About/About";
import {Cap} from "./components/Cap/Cap";
import TableBase from "./components/Table/TableRenderer";
import TableRenderer from "./components/Table/TableRenderer";

function App() {
  return (
    <>
      <div>
        <Cap/>

        <TableRenderer/>
        {/*<About/>*/}
        <Footer/>
      </div>
    </>
  );
}

export default App;
