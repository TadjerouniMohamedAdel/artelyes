import React, { Component } from 'react'
import './Artist.css'
import { elyes1, artist1, underline, artist2, top } from '../Images'
import { Paper } from '@material-ui/core'
import HeaderDeco from './HeaderDeco'
export default class Artist extends Component {
    render() {
        return (
            <div >
               <HeaderDeco />
                <h3 className="profile-section-title">
                    Elyes Taib Lamine<br/>
                    <img src={underline}  style={{marginTop:-10}} width={350} height={50}/>
                </h3>
                <Paper style={{backgroundColor:'white'}}>
                <section className="profile-section">
                    <div className="circle circle1">
                        <img src={elyes1} />
                    </div>
                    <div>
                        <p className="description-font">
                            Ne a Alger en 1951, artiste peintre, diplOme de I'ENBA a Alger 00 it fait ses premieres etudes artistiques, s'oriente en communication visuelle it obtient son diplOme en 1976 avec une armee de specialisation, jusqu'en 1977... 
                            admis sur dossier aux Beaux-arts option peinture 13 / 17, rue des Quais Malaquais Paris, 00 it obtient le Diplome National Superieur Des Beaux-Arts en 1981, arrete pendant une duree de trois annees (3.0 it s'adonne entierement a son art, puis entre a St Charles, fac des arts-plastiquesParis I Sorbonne pour enfin prendre conge des etudes avec une licence, et un projet en tete... 
                            I s'est fraye un chemin bien particulier dans le monde de la peinture.

                        </p>
                    </div> 
                </section>

                </Paper>
                <Paper style={{marginTop:50,backgroundColor:'white'}}>
                <section className="profile-section">
                <div className="circle circle1">
                        <img src={artist2} />
                    </div>
                    <div className="circle circle2">
                        <img src={artist1} />
                    </div>
                    <div>
                        <p className="description-font">
                                A travers ses oeuvres, it essaye de rendre kernels quelques endroits anciens, telle la Casbah d'Alger, et certains lieux empruntes ca et la, au gre dune promenade, ou la beaute du site ne le laisse pas indifferent. 
                                II exprime ce qu'il ressent et qui correspond a ('ensemble meme de son etre. II possede une technique personnelle, simple et direct dont la caracteristique principale est determine par la qualite de I'homme, ses origines et, 00 le mystere de la creativite reside dans un perpetuel duel avec la nature. 
                                il dit souvent: 
                                "A ce que la nature du beau presente mon regard, la dexterite de mes mains, essaye toujours d'en preserver I'esthetique." 
                                C'est ainsi, qu'au detour d'une rue, une atmosphere, un paysage, Alger, Paris et sa banlieue, que mes choix sont delimites, parceque chaque lieu, chaque endroit est particulier, et temoigne d'une vie. 
                                [artiste, engage tout son etre dans ce qu'il entreprend, et base son oeuvre sur les jeux d'ombres colorees et de lumiere. Cela confere une dimension joyeuse, et nouvelle a ses toiles, et une profondeur dans laquelle on aime a se perdre. 

                        </p>

                    </div> 
                </section>

                </Paper>
            </div>
        )
    }
}
