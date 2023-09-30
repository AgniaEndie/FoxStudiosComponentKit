import React from 'react';
import './Cap.css';
import logo from './logo.svg';
export function Cap() {
    return(
        <div className="header">
            <img className='logo' src={logo} width={40}/>
            <a href='#'>Главная</a>
            <a href='#'>О нас</a>

        </div>
    )
}