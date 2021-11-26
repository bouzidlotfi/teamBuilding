import {React} from 'react'
import './CarteModel.css'
import {FaRegBookmark} from 'react-icons/fa'

function CarteModel() {

    return (
        <div className='CarteModel'>
            <div className='CartePic'>
                <div id='clickMe'>Click me!</div>
            </div>
            <div className='CarteDesc'>
                <div className='actName'></div>
                <div className='actProp actCap'><div className='cartProp'>Capacité: </div> </div>
                <div className='actProp actLoc'><div className='cartProp'>Localisation: </div> </div>
                <div className='actProp actCont'><div className='cartProp'>Contact: </div> 
                <div className='saveIcon'>
                    <FaRegBookmark size='1.5em'/>
            </div>
                </div>
            </div>
                
        </div>
    )
}

export default CarteModel
