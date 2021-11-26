import React, {useEffect} from 'react'
import './SectionTwo.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import {Link} from 'react-router-dom'


function SectionTwo() {
    useEffect(() => {
        Aos.init({duration : 1000})
    }, [])

return (
        <div className='SectionTwo' id='services'>
            <div className='SectionTwo-content'>
                 
                  <div className='serviceTitle'>
                Les différents services de teamed 
                    </div>
                        <div id="allCarts">
                <div  className='cart1 GenCarte'
                        ata-aos="fade-up"
                         data-aos-anchor-placement="top-bottom" 
                         >
                    <div className='cartPicture ludiquePic'></div>
                    <div className='cartDescrip'>
                        <div className='cartit'>Activite Ludique :<br/>
                        <p>Le jeu n'est pas opposé au travail il est meme supérieure à lui, c'est une activité absolument libre
                        qui sait les conditions de son existence et n'entretient pas d'illusions sur sa valeur, prenez du temps pour vous !
                        </p>
                        <p id="exempleCart">Escape room, Laser game, Paintball...</p>
                        </div>
                            <div className='cartBtn'>
                            <Link to="/LudiquePage">
                      <button className='plusBtn '>voir plus</button>
                            </Link>
                            </div>
                    </div>
                </div>

                <div className='cart2 GenCarte'
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        >
                    <div className='cartDescrip'>
                    <div className='cartit'>Aventure et Découverte :
                    <p>C'est lorsque vous etes au bureau que vous revez d'Aventure, Et en pleine aventure que vous avez
                        la nostalgie de votre temps de travails...
                    </p>
                    <p id="exempleCart">Randonnée, Kayak, Plongée sous marine...</p>
                    </div>
                            <div className='cartBtn'>
                                <Link to="/DecouvertPage">
                      <button className='plusBtn '>voir plus</button>
                                </Link>
                            </div>
                    </div>
                    <div className='cartPicture decouvPic'></div>
                </div>
                
                <div className='cart3 GenCarte'
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom" 
                        >
                    <div className='cartPicture sportPic'></div>
                    <div className='cartDescrip'>
                    <div className='cartit'>Activité Sportives :
                    <p>Le milieu du travail requiert du sérieux, des compétences et un véritable sens du travail en équipe,
                    le sport est aussi un moyen efficace pour obtenir une cohésion de groupe à l’intérieur d’une même société
                    </p>
                    <p id="exempleCart">Tennis, Volley Ball, Football...</p>
                    </div>
                            <div className='cartBtn'>
                                <Link to="/SportPage">
                      <button className='plusBtn '>voir plus</button>
                            </Link>
                            </div>
                    </div>
                </div>
                
                <div className='cart4 GenCarte'
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-center" 
                        >
                    <div className='cartDescrip'>
                    <div className='cartit'>Restaurants et Caféteria :
                    <p>Parfois, le simple fait d'etre assis à deux bureaux opposés nécessit de passer un bon 
                        moment entre collègues en dehors du cadre formel du travail
                    </p>
                    <p id="exempleCart">Fitcoffee, 213 grill&chill, la cité asiatique...</p>
                    </div>
                            <div className='cartBtn'>
                            <Link to="/ReastaurantsPage">
                      <button className='plusBtn '>voir plus</button>
                            </Link>
                            </div>
                    </div>
                    <div className='cartPicture restauPic'></div>
                </div>

                <div className='cart5 GenCarte'
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-center"
                        >
                    <div className='cartPicture atelPic'></div>
                    <div className='cartDescrip'>
                    <div className='cartit'>Ateliers :
                    <p>Au bureau on applique ce qu'on a appris, en Atelier on applique notre imagination, 
                        notre créativité...<br/> laissez vous emportezet soyez créatifs</p>
                        <p id="exempleCart">Origami, Peinture, Poterie...</p>
                    </div>
                            <div className='cartBtn'>
                            <Link to="/AtelierPage">
                      <button className='plusBtn '>voir plus</button>
                            </Link>
                            </div>
                    </div>
                </div>
                {/* <div className='cart6 GenCarte'
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        >
                    <div className='cartDescrip'>
                    <div className='cartit'>Transport :
                    <p>C'est lorsque vous etes au bureau que vous revez d'Aventure, Et en pleine aventure que vous avez
                        la nostalgie de votre temps de travails...
                    </p>
                    <p id="exempleCart">Randonnée, Kayak, Plongée sous marine...</p>
                    </div>
                            <div className='cartBtn'>
                                <Link to="/DecouvertPage">
                      <button className='plusBtn '>voir plus</button>
                                </Link>
                            </div>
                    </div>
                    <div className='cartPicture transportPic'></div>
                </div> */}
                    </div>
            </div>

        </div>
    )
}

export default SectionTwo
