import {React, useRef} from 'react'
import './InscripModel.css'
import {AiOutlineClose} from 'react-icons/ai'


function InscripModel({inscrip, setInscrip}) {

    const inscModelRef = useRef();
    const closeInscModel = e =>{
        if(inscModelRef.current === e.target){
            setInscrip(false)
        }
    }
    return (
        <>
        {inscrip? 
            <div className='backPage' id="backInscrip" ref={inscModelRef} onClick={closeInscModel}>
                <div className='inscripPAge'>
                <div className='closeBtn XIscripBtn' onClick={()=> setInscrip(false)}><AiOutlineClose size='1.7em' color='black'/></div>
                    <div className='inscripPic'></div> 
                    <div className='inscripForm'>
                        <div className='InscripTo'> Inscription </div> 
                        <div id='inscripForm'>
                            <div id="InscForm1">
                                <input type='text' placeholder='Nom de votre entreprise' id='entName'></input>    
                                <input type='email' placeholder='Adresse electronique' id='email'></input>  
                            </div>
                             <div id="InscForm2"> 
                                <input type='tel' placeholder='Numéro de téléphone' id='phone1' minlength='10'></input>    
                                <input type='tel' placeholder='Numéro de téléphone (facultatif)' minlength='8' id='phone2'></input> 
                            </div>   
                            <div id="InscForm3">
                                <input type='password' placeholder='Mot de passe' id='mdp'></input>    
                                <input type='password' placeholder='Confirmer votre mot de passe' id='confMdp'></input>   
                            </div> 
                        </div>  
                        <div className='inscripBtn'>
                            <button id='inscripBtn'>Inscription</button>
                        </div>
                    </div> 
                </div>
                
            </div>
        :null}
        </>
    )
}

export default InscripModel
