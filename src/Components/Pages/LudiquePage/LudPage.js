import React, {useEffect, useState} from 'react'
import NavModel from '../PageComponents/NavModel/NavModel'
import SidebarModel from '../PageComponents/SidebarModel/SidebarModel'
import {ImLocation, ImPhone} from 'react-icons/im'
import {HiUserGroup} from 'react-icons/hi'
import InforModel from '../PageComponents/InforModel/InforModel'


function LudPage() {

    const [ludCart, setLudCart] = useState([])
    useEffect (()=>{
            fetch('ludiqueCard.json')
            .then((res)=>res.json())
            .then((data)=>setLudCart(data.ludiqueCard))
    },[])

    const [info, setInfo] = useState(false)
    const openInfoModel = () => setInfo(!info);

    return (
        
        <div className='ludCarte'>
            <NavModel/>
            <SidebarModel/>
            <div className='pageContainer'>
                    <div className='pageContent'>
                        {ludCart.map((ludCart)=>(
                            <>
                        <div className='CarteModel'  onClick={openInfoModel}>
                            <div className='CartePic'>
                                <div id='clickMe'>Plus d'Info!</div>
                            </div>

                            <div className='CarteDesc'>
                                <div className='actName'>{ludCart.nom}</div>
                                <div className='actProp actLoc'><div className='cartProp'><HiUserGroup size='1.2em' color='crimson'/> Capacité : </div>  {ludCart.capacité} </div>
                                <div className='actProp actLoc'><div className='cartProp'><ImLocation size='1.2em' color='red'/> localisation : </div>  {ludCart.localisation} </div>
                                <div className='actProp actCap'><div className='cartProp'><HiUserGroup size='1.2em' /> Tarif:</div> {ludCart.tarif}</div>
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

export default LudPage
