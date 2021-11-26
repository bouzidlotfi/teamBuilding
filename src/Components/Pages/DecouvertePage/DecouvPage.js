import React, {useEffect, useState} from 'react'
import NavModel from '../PageComponents/NavModel/NavModel'
import SidebarModel from '../PageComponents/SidebarModel/SidebarModel'
import {ImLocation, ImPhone} from 'react-icons/im'
import {HiUserGroup} from 'react-icons/hi'
import InforModel from '../PageComponents/InforModel/InforModel'


function DecouvPage() {

    const [decouvauCart, setDecouvauCart] = useState([])
    useEffect (()=>{
            fetch('decouveCard.json')
            .then((res)=>res.json())
            .then((data)=>setDecouvauCart(data.decouveCard))
    },[])

    const [info, setInfo] = useState(false)
    const openInfoModel = () => setInfo(!info);

    return (
        <div>
            <NavModel/>
            <SidebarModel/>
            <div className='pageContainer'>
                    <div className='pageContent'>
                        {decouvauCart.map((decouvauCart)=>(
                            <>
                        <div className='CarteModel' onClick={openInfoModel}>
                            <div className='CartePic'></div>
                            <div className='CarteDesc'>
                                <div className='actName'>{decouvauCart.nom}</div>
                                <div className='actProp actCont'><div className='cartProp'><ImPhone size='1.2em' color='red'/>Type d'activité :</div> {decouvauCart.type}</div>
                                <div className='actProp actCap'><div className='cartProp'><HiUserGroup size='1.2em' /> Capacité :</div> {decouvauCart.capacité}</div>
                                <div className='actProp actLoc'><div className='cartProp'><ImLocation size='1.2em' color='red'/> Localisation : </div>  {decouvauCart.localisation} </div>
                            </div>                                
                        </div>
                        <InforModel info={info} setInfo={setInfo} />
                            </>
                        )                           
                        )}                
                    </div>
            </div>
        </div>
    )
}

export default DecouvPage
