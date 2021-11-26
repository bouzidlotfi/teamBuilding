import {React, useEffect} from 'react'
import './SidebarModel.css'
import {ImHome} from 'react-icons/im'
import {HiUserGroup} from 'react-icons/hi'
import {FaHiking} from 'react-icons/fa'
import {FcSportsMode} from 'react-icons/fc'
import {GiTeacher} from 'react-icons/gi'
import {BsPersonBoundingBox} from 'react-icons/bs'
import {IoMdArchive, IoMdRestaurant} from 'react-icons/io'
import Aos from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom'


function SidebarModel() {
    useEffect(() => {
        Aos.init({duration : 2000})
    }, [])
    return (
        <div data-aos="fade-right" className='SidebarModel'>
            <div className='sideContent'>
                <div className='logoItems'>
                    <ul>
                        <li><ImHome size='1.5em' cursor='default'/></li>
                        <li><GiTeacher size='1.5em' cursor='default'/></li>
                        <li><FaHiking size='1.5em' cursor='default'/></li>
                        <li><HiUserGroup size='1.5em' cursor='default'/></li>
                        <li><FcSportsMode size='1.5em' cursor='default'/></li>
                        <li><IoMdRestaurant size='1.5em' cursor='default'/></li>
                        <li><IoMdArchive size='1.5em' cursor='default'/></li>
                        <li><BsPersonBoundingBox size='1.5em' cursor='default'/></li>
                        
                    </ul>
                </div>
                <div className='contItems'>
                    <ul>
                        <li className='lol'><Link to='/' style={{ textDecoration: 'none', color: 'white'}}>Accueil</Link></li>
                        <li className='lol'><Link to='/AtelierPage' style={{ textDecoration: 'none', color: 'white'}}>Ateliers</Link></li>
                        <li className='lol'><Link to='/DecouvertPage' style={{ textDecoration: 'none', color: 'white'}}>Découverte</Link></li>
                        <li className='lol'><Link to='/LudiquePage' style={{ textDecoration: 'none', color: 'white'}}>Activité ludique</Link></li>
                        <li className='lol'><Link to='/SportPage' style={{ textDecoration: 'none', color: 'white'}}>Activité sportives</Link></li>
                        <li className='lol'><Link to='/ReastaurantsPage' style={{ textDecoration: 'none', color: 'white'}}>Restau&Caféteria</Link></li>
                        <li className='lol'>Mes reservations</li>
                        <li className='lol'><Link to='/Compte' style={{ textDecoration: 'none', color: 'white'}}>Compte</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SidebarModel
