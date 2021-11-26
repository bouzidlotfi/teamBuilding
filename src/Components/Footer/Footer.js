import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer' id='contact'>
            <div className='topDiv'>
                <div className='content'>
                        <div id="contenu1">
                    <a href="https://web.facebook.com/?_rdc=1&_rdr">Facebook</a>
                    <a href="https://www.instagram.com/accounts/login/">Instagram</a>
                    <a href="https://www.whatsapp.com/">WhatsApp</a>
                        </div>
                        <div id="contenu2">
                        <ul className='footer-items'>
                    <a href='#accueil'><li>Accueil</li></a>               
                    <a href="#apropos"><li>A propos</li></a>
                    <a href="#services"><li>Services</li></a>
                    <a href="#contact"><li>Contact</li></a>               
                        </ul>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
