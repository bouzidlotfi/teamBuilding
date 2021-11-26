import React from 'react'
import './ReservModel.css'
import {RiSendPlaneFill} from 'react-icons/ri'
import {FaHourglassEnd} from 'react-icons/fa'
import {BiTimeFive} from 'react-icons/bi'
import {MdPayment} from 'react-icons/md'
import {FcApproval} from 'react-icons/fc'
import {AiOutlineClose} from 'react-icons/ai'


function ReservModel({reserve, setReserve }) {
    return (
        <>
        {reserve?
        <div className='backPage' id="reserveBack">
            <div className='ReservModel' >
                <div className='closeBtn XResBtn' onClick={()=> setReserve(false)}><AiOutlineClose size='1.7em' color='black'/></div>
            <div className='ReservForm'>
                <div className='EntrpInfo'><h4>Coordonnées:</h4>
                    Nom:<input type='text' placeholder='Indiquez votre nom...'/>
                    Prénom:<input type='text' placeholder='Indiquer votre prénom...'/>
                    Nom de l'entreprise:<input type='text' placeholder="Indiquez le nom de l'entreprise..."/>
                    Email:<input type='text' placeholder='Indiquez votre adresse email...'/>
                    Téléphone:<input type='text' placeholder='Indiquez votre numéro...'/>

                    <p><FcApproval size='1.2em'/>Champ Obligatoire</p>
                </div>
                <div className='EvenInfo'><h4>A propos de l'évenement:</h4>
                    Nombre de participants:<input id="partNbr" type='number'/>
                    Date:<input type='date'/>
                        Heure:
                    <div id='timeInterval'>
                        <div id="timeDe">De <input type='time'/> </div>
                        <div id="timeA">A <input type='time'/></div>
                    </div>
                    <div id="recommander">
                    Recommandations:<textarea placeholder='Parlez-nous plus de votre événement...'/>
                    </div>
                    <p><FcApproval size='1.2em'/>Champ Obligatoire</p>
                </div>
            </div>
            <div className='ReservHow'>
                <ul><h4>Comment ça fonctionne ?</h4>
                    <li><RiSendPlaneFill size='1.1em' color='crimson'/> Vous nous envoyez votre demande gratuitement et sans engagement à partir de ce formulaire.</li>
                    <li><FaHourglassEnd color='crimson'/> Nous revenons vers vous dans un délai maxi de 4h.</li>
                    <li><BiTimeFive size='1.3em' color='crimson'/>Vous recevez les devis et les disponibilités de nos partenaires.</li>
                    <li><MdPayment size='1.3em' color='crimson'/>Vous signez votre devis en ligne et procédez au paiement par virement ou par chèque pour valider votre réservation.</li>
                </ul>
            <div className='resrvBtn'>Envoyer  
                <div id='sendIcon'><RiSendPlaneFill /></div>
            </div>    
            </div>
            </div>
        </div>
        : null}
        </>
    )
}

export default ReservModel
