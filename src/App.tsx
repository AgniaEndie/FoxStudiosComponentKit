import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Footer} from "./components/Footer/Footer";
import {About} from "./components/About/About";
import {Cap} from "./components/Cap/Cap";
import TableBase from "./components/Table/TableRenderer";
import TableRenderer from "./components/Table/TableRenderer";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Main from "./components/Main/Main";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="about" element={<About/>}/>
                    <Route path="/" element={<Main/>}/>
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default App;
