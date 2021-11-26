import {React, useRef, useState} from 'react'
import './ConnectModel.css'
import {AiOutlineClose} from 'react-icons/ai'
import {BsEyeSlash} from 'react-icons/bs'
import {BiShowAlt} from 'react-icons/bi'


function ConnectModel({connect, setConnect}) {
    
    const conModelRef = useRef();
    const closeConModel = e =>{
        if(conModelRef.current === e.target){
            setConnect(false)
        }
    }

    const [visibleMdp, setVisibleMdp] = useState()
    const letMdpVisible = () => setVisibleMdp(!visibleMdp);

    return (
        <> 
        {connect? 
        <div className='backPage' ref={conModelRef} onClick={closeConModel}>
            <div className='connectForm'>
                <div className='closeBtn XIdentBtn' onClick={()=> setConnect(false)}><AiOutlineClose size='1.7em' color='black'/></div>
            <div className='ConnecTo'> Connexion
                {/* <div className='connecTo1'>Connecter vous a</div> */}
                {/* <div className='connecTo2'>teamed</div> */}
            </div>
                <div className='inputConn'>
                    <input id="email" type="text" placeholder='E-mail'/>
                        <div id="mdpConnect">
                    <input type={(visibleMdp)?"text" :'password'} placeholder='Mot de passe'/>
                    <button className='visibleMdpBtn' onClick={letMdpVisible}>
                    {visibleMdp ? <BsEyeSlash color='black' size='1.2em' backGround="white"/> : <BiShowAlt color='black' size='1.5em'/> }
                        </button>
                        </div>
                    {/* <div className='lienMdp'> Mot de passe oublié ?</div> */}
                </div>
                    <button className='connexionBtn'>Se Connecter</button>
            </div>
        </div>
        :null}
        </>
    )
}

export default ConnectModel
