import {React,useEffect} from 'react'
import './Accueil.css'
import Aos from 'aos';
import 'aos/dist/aos.css'



function Accueil() {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className='Accueil' >
            <div className='Accueil-content'>

                <div className='accueilText'>
                    <div className='description'>     
                        <div className='text1'>Teamed</div>
                        <div className='text2'>Votre meilleur choix<br/> pour organisez votre<br/> team building </div>  
                    </div>       
                </div>
                <div className='accueilPic'>
                <div className='accPic'>
                    <div className='accPic1'
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1800"></div>
                </div>
                <div className='accPic '>
                <div className='accPic2'
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1400"></div>
                </div>
                <div className='accPic '>
                <div className='accPic3'
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"></div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Accueil
