import {React, useState, useEffect} from 'react'
import InforModel from '../PageComponents/InforModel/InforModel'
import NavModel from '../PageComponents/NavModel/NavModel'
import SidebarModel from '../PageComponents/SidebarModel/SidebarModel'
import {ImLocation, ImPhone} from 'react-icons/im'
import {HiUserGroup} from 'react-icons/hi'
import './AtelPage.css'

function AtelPage() {

    const [atelier, setAtelier] = useState([])
        useEffect (()=>{
        fetch('ateliers.json')
        .then((res)=>res.json())
        .then((data)=>setAtelier(data.atelCard))
},[])

const [info, setInfo] = useState(false)
const openInfoModel = () => setInfo(!info);

    return (
        <div>
                <NavModel/>
                <SidebarModel/>
            <div className='pageContainer'>
                    <div className='pageContent'>
                    {atelier.map((atelier)=>(
                            <>
                        <div className='CarteModel' onClick={openInfoModel}>
                            
                            <div className='CartePic'></div>
                            <div className='CarteDesc'>
                                <div className='actName'>{atelier.nom}</div>
                                <div className='actProp actCont'><div className='cartProp'><ImPhone size='1.2em' color='red'/>Thème :</div> {atelier.type}</div>
                                <div className='actProp actCap'><div className='cartProp'><HiUserGroup size='1.2em' /> Capacité :</div> {atelier.capacité}</div>
                                <div className='actProp actLoc'><div className='cartProp'><ImLocation size='1.2em' color='red'/> Localisation : </div>  {atelier.localisation} </div>
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

export default AtelPage
