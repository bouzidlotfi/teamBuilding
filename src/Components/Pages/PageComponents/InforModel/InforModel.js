import {React,useRef, useState} from 'react'
import ReservModel from '../ReservationModel/ReservModel';
import {AiOutlineClose} from 'react-icons/ai'
import {BiChevronsRight} from 'react-icons/bi'
import './InforModel.css'
import CarouselContainer from '../CarouselInfor/Carousel';


function InforModel({info, setInfo}) {

    const InfoModelRef = useRef();
    const closeInfoModel = e =>{
        if(InfoModelRef.current === e.target){
            setInfo(false)
        }
    }

    const [reserve, setReserve] = useState(false);
    const openReserveModel = () => setReserve(!reserve)

    return (
        <>
        {info?
        <div className='backPage' id="infoBack" ref={InfoModelRef} onClick={closeInfoModel}>
            <div className='infoPage'>
                <div className='moreInfo'>
                    <div className='closeBtn XInfoBtn' onClick={()=> setInfo(false)}><AiOutlineClose size='1.7em' color='black'/></div>
                    <div className='specialInfo'>info</div>
                    <div className='reservBtn'>
                    <button onClick={openReserveModel}>Passer une réservation <BiChevronsRight/></button>
                    <ReservModel reserve={reserve} setReserve={setReserve} />
                </div>
                </div>
                <div className='morePic'>  
                <CarouselContainer/>                
                </div>
            </div>
        </div>
        :null}
        </>
    )
}

export default InforModel
