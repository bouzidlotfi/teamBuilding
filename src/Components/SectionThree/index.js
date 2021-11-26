import React from 'react'
import './SectionThree.css'
import {BiChevronsRight} from 'react-icons/bi'
import {Link} from 'react-router-dom'


function SectionThree() {
    return (
        <div className='SectionThree' id='apropos'>
            <div className='SectionThreeContent'>
            <div id='content1'>
                <div data-aos='fade-right' className='globalDesc'>
                    <h4>Qu’est-ce qu’un team building ?</h4>
                    <p>Le “team building” est à la mode dans le monde du travail depuis maintenant plusieurs années.
                    Donc le team building c'est une activité destinée aux salariés d’une entreprise, effectuée collectivement par l’ensemble du groupe
                    </p>
                    <br/>
                    <br/>
                    <h4>A quoi sert le team building ?</h4>
                        <p>Le team building consiste, assez simplement, à créer ou resserrer des liens entre les collaborateurs d'une entreprise. 
                        C'est souvent des moments assez informels reposant sur du travail d'équipe et de la collaboration dans un cadre extérieur à l'entreprise.
                        Elles permettent aux participants de mieux se connaître, mieux s’apprécier. Le team-building est organisé autour d’une thématique ludique et 
                        fédératrice : rallye-découverte, parcours d’orientation, création artistique et créative, épreuves sportives, challenge par équipes, réstaurants...
                        </p>
                    
                </div>
                <div data-aos='fade-left' className='globalPic'>          
                </div>
                </div>
            <div id="content2">
                <div id="part1">
                    <div id="descPart1">
                    <h4>C'est quoi TEAMED ?</h4>
                    <p>Teamed c'est une plateforme algérienne qui vous donne la <br/>facilité d'organiser votre TEAM BUILDING, En offrant<br/> pleine  d'activité amusantes
                        en plusieurs thème et dans un <br/>cadre bien organisé. Tout ça en passant votre réservation<br/> souhaité a travers cette plateforme après d'avoir
                        choisis votre activité. Ainsi que vous pouvez prochainement assurer le transport des employés du point de départ au point où va se dérouler l'évenement.  </p>
                    </div>
                </div>

                <div id="part2">
                        <div id="descPart2">
                        <p>Ainsi que Teamed vous donne la possibilté d'assurer le transport<br/> (Allé / Retour) pour vos <br/>employés du point de
                        départ <br/>au point où se déroulera <br/>votre team building <br/>
                        <br/><br/><br/><br/>
                        Vous pouvez réserver a partir de là
                        <Link to="/Transport-reservation">
                        <button className="resTransp">Réserver <BiChevronsRight/></button>
                        </Link></p>
                    <div id="picPart2"></div>
                        </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SectionThree
