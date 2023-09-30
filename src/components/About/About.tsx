import React from 'react';
import './About.css';
import fox from './fox.png'
import ist from './ist_logo.jpg'

export function About() {
    return (
        <div className="about">
            <img src={fox} width={150}/>
            <img src={ist} width={150}/>
            <div>Сделано FoxStudios при поддержке кафедры ИСТ</div>

        </div>
    )
}
