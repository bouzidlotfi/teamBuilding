import {React, useState} from 'react'
import './NavModel.css'
import { MdLocalActivity } from 'react-icons/md';
import {SiFacebook, SiInstagram, SiWhatsapp} from 'react-icons/si';
import ConnectModel from '../ConnectModel/ConnectModel';
import InscripModel from '../InscriptionModel/InscripModel';


function NavModel() {

    //Connexion state
    const [connect, setConnect] = useState(false);
    const openConModel = () => setConnect(!connect);

    //Inscription state
    const [inscrip, setInscrip] = useState(false);
    const openInscripModel = () => setInscrip(!inscrip);

  

    return (
        <div className='NavModel'>
            <div className='NavContent1'>
            <div className='navTitle'>
                    <div className='navLogo'>
                        <MdLocalActivity size='2.5em'/>
                    </div>
                    <div className='navTitre'>
                        TEAMED
                    </div>
                </div>
            </div>
            <div className='NavContent2'>
                <div className='NavIcons'>
                    <SiFacebook size='1.5em'/>
                    <SiInstagram size='1.5em'/>
                    <SiWhatsapp size='1.5em'/>
                </div>
                <div className='NavSlogon' >
                        Take a rest & enjoy your life
                </div>
                <div className='navBtn'>
                    <div className='inscBtn' onClick={()=>
                        {openInscripModel();setConnect(false)}}>S'inscrire</div>
                    <div className='identBtn' onClick={()=>
                        {openConModel(); setInscrip(false)}}>S'identifier</div>
                    <ConnectModel connect={connect} setConnect={setConnect} />
                    <InscripModel inscrip={inscrip} setInscrip={setInscrip}/>
                </div>
            </div>
        </div>
    )
}

export default NavModel
