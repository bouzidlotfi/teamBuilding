import React from 'react'
import './NavigationBar.css'
import { MdLocalActivity } from 'react-icons/md';


function NavigationBar() {
    return (

        <div className='NavigationBar'>
            <div className='barContent'>
                <div className='logo'>
                    <div className='logoPic'>
                        <MdLocalActivity size="3em"/>
                    </div>
                    <div className='nameApp'>
                        Teamed
                    </div>
                </div>

                <div className='Nav-items'>
                    <ul className='Navigate-items'>
                <a href='#accueil'><li className='oneItem'>Accueil</li></a>               
                <a href="#apropos"><li className='oneItem'>A propos</li></a>
                <a href="#services"><li className='oneItem' >Services</li></a>
                <a href="#contact"><li className='oneItem'>Contact</li></a>               
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default NavigationBar
