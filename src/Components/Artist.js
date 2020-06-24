import React, { Component } from 'react'
import './Artist.css'
import { elyes1, artist1, artist3, artist2 } from '../Images'
import { Paper } from '@material-ui/core'
import HeaderDeco from './HeaderDeco'
import TitleSection from './TitleSection'
export default class Artist extends Component {
    constructor(props){
        super(props)
        this.props.updatelinkActive(1)
    }
    render() {
        return (
            <div className="artist-section">
               <HeaderDeco />
                <TitleSection title="Elyes Taib Lamine" />
                <Paper className="card-artist">
                <section className="profile-section">
                    <div className="circle1-container">
                        <div className="circle circle1">
                            <img src={elyes1} />
                        </div>
                    </div>
                    <div>
                        <p className="description-font">
                        <i className="first-letter artist-font">L</i>amine Tayeb, dit " Elyes " né le 14/09/1951,artiste peintre, diplomé de I'ENBA a Alger ou il fait ses premieres etudes artistiques, s'oriente en communication visuelle il obtient son diplome en 1976 avec une annee de specialisation, jusqu'en 1977...<br/> 
                            Admis sur dossier aux Beaux-arts option peinture 13 / 17, rue des Quais Malaquais Paris, ou il obtient le Diplome National Superieur Des Beaux-Arts en 1981, arrete pendant une duree de trois annees ou il s'adonne entierement a son art, puis entre a St Charles, fac des arts-plastiquesParis I Sorbonne pour enfin prendre conge des etudes avec une licence, et un projet en tete... 
                            
                        </p>
                    </div> 
                </section>

                </Paper>
                <Paper className="card-artist">
                <section className="profile-section">
                <div className="circle2-container">
                <div className="circle circle2">
                    <img src={artist2} />
                </div>

                </div>
                    <div>
                        <p className="description-font">
                            Artiste peintre, graphiste, illustrateur, aime à raconter par des touches colorées l'histoire des petites rues empruntée ça-et là au gré d'une flânerie, rappeler combien certains endroits sont beaux quand on prend le temps de bien les regarder .
                                A travers ses oeuvres, it essaye de rendre eternels quelques endroits anciens, telle la Casbah d'Alger, et certains lieux empruntes ca et la, au gre dune promenade, ou la beaute du site ne le laisse pas indifferent. 
                                II exprime ce qu'il ressent et qui correspond a (l'ensemble meme de son etre. II possede une technique personnelle, simple et direct dont la caracteristique principale est determine par la qualite de I'homme, ses origines et, ou le mystere de la creativite reside dans un perpetuel duel avec la nature. 
                                <br/><br/>
                                Il dit souvent: 
                                "A ce que la nature du beau presente mon regard, la dexterite de mes mains, essaye toujours d'en preserver I'esthetique." 
                                C'est ainsi, qu'au detour d'une rue, une atmosphere, un paysage, Alger, Paris et sa banlieue, que mes choix sont delimites, parceque chaque lieu, chaque endroit est particulier, et temoigne d'une vie. 
                                L'artiste engage tout son etre dans ce qu'il entreprend, et base son oeuvre sur les jeux d'ombres colorees et de lumiere. Cela confere une dimension joyeuse, et nouvelle a ses toiles, et une profondeur dans laquelle on aime a se perdre. 

                        </p>
                    <div className="img-artist-container">
                        <div className="circle circle3">
                                <img src={artist1} />
                        </div>
                        <div className="circle circle3">
                                <img src={artist3} />
                        </div>

                    </div> 
                    </div>
                </section>

                </Paper>
            </div>
        )
    }
}
