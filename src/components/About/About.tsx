import React from 'react';
import './About.css';
import fox from './fox.png'
import ist from './ist_logo.jpg'

export function About() {
    return (
        <div>
            <h1 className={'h1'}>О нас</h1>
            <div className="about">
                <div className={'about1'}>
                    <img src={fox} width={320}/>
                    <img src={ist} width={320}/>
                </div>

                <div>Сделано FoxStudios при поддержке кафедры ИСТ</div>

            </div>
        </div>
    )
}
