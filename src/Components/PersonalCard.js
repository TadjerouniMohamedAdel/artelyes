import React from 'react'
import { artelyesLogo, elyes1 } from '../Images'
import SocialMenuArtist from './SocialMenuArtist'
import { Link } from 'react-router-dom'
import './PersonalCard.css'
export default function PersonalCard() {
    return (
        <div className="personal-container-1">
                   <div className="personal-card-1">
                       <div className="imgBx">
                           <img src={elyes1} alt="Elyes Taib Lamine"/>
                        </div> 
                        <div className="personal-details-1">
                            <div className="personal-content-1">
                                <div className="image-content">
                                    <div className="artist-circle-p artist-circle-2">
                                        <img src={elyes1} alt="Elyes Taib Lamine"/>
                                    </div>
                                    <div>
                                        <img src={artelyesLogo} className="logo-landing" alt="Artelyes" />
                                    </div>
                                </div>
                                <h2 className="artist-font">
                                    Elyes Tayeb Lamine 
                                </h2>
                                    <div className="description-font job">
                                        Artiste Paintre et Proffesseur
                                    </div>
                                    <SocialMenuArtist />
                                    <Link to="/artist">
                                        <a className="readmore" href="#">
                                            Apprendre Plus
                                        </a>
                                    </Link>
                                 
                            </div>
                        </div>
                   </div>
               </div>
    )
}
