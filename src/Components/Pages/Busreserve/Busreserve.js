import React, {useEffect} from 'react'
import NavModel from '../PageComponents/NavModel/NavModel'
import './Busreserve.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Busreserve() {
    useEffect(() => {
        Aos.init({duration : 2000})
    }, [])
    return (
        <div className='Busreserve'>
            <NavModel/>
            <div className='BreserContainer'>
                <div className='BreserContent'>
                    <div data-aos="zoom-in" className='transporType' id="trans1"></div>
                    <div data-aos="zoom-in" className='transporType' id="trans2"></div>
                    <div data-aos="zoom-in" className='transporType' id="trans3"></div>
                </div>
            </div>
        </div>
    )
}

export default Busreserve
