import React, {useEffect, useState} from 'react'
import NavModel from '../PageComponents/NavModel/NavModel'
import SidebarModel from '../PageComponents/SidebarModel/SidebarModel'
import {ImLocation, ImPhone} from 'react-icons/im'
import {HiUserGroup} from 'react-icons/hi'
import InforModel from '../PageComponents/InforModel/InforModel'


function ReastauPage() {

    const [restauCart, setRestauCart] = useState([])
    useEffect (()=>{
            fetch('restau.json')
            .then((res)=>res.json())
            .then((data)=>setRestauCart(data.restau))
    },[])

    const [info, setInfo] = useState(false)
    const openInfoModel = () => setInfo(!info);

    return (
        <div>
                <NavModel/>
                <SidebarModel/>
            <div className='pageContainer'>
                    <div className='pageContent'>
                        {restauCart.map((restauCart)=>(
                            <>
                        <div className='CarteModel' onClick={openInfoModel}>
                            
                            <div className='CartePic'></div>
                            <div className='CarteDesc'>
                                <div className='actName'>{restauCart.nom}</div>
                                <div className='actProp actCap'><div className='cartProp'><HiUserGroup size='1.2em' /> Capacité :</div> {restauCart.capacité}</div>
                                <div className='actProp actLoc'><div className='cartProp'><ImLocation size='1.2em' color='red'/> Localisation : </div>  {restauCart.localisation} </div>
                                <div className='actProp actCont'><div className='cartProp'><ImPhone size='1.2em' color='red'/>Stationnement :</div> {restauCart.parking}</div>
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

export default ReastauPage
