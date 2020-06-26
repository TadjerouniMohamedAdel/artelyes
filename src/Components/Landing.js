import React, { Component } from 'react'
import './Landing.css'
import { elyes3 } from '../Images'
import {Link} from 'react-router-dom'
import 'swiper/css/swiper.css'
import ContactSection from './ContactSection';
import PersonalCard from './PersonalCard';
import LatestProjects from './LatestProjects';

export default class Landing extends Component {
    
    render() {
        return (
            <div className="landing-container" style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

               <PersonalCard />
               <LatestProjects />
               <div className="about-artist">
                    <h3>
                    À propos d'Elyes
                   </h3>
                    <div className="about-content">
                        <div className="artist-circle artist-circle-2">
                            <img src={elyes3} alt="Elyes Taib Laimne" />
                        </div>
                        <p className="about-artist-text description-font">
                            <b>l'artist dit souvent : </b><br/>
                            <i class="fa fa-quote-left" aria-hidden="true" style={{marginRight:15}}></i>
                            A ce que la nature du beau presente mon regard, la dexterite de mes mains, essaye toujours d'en preserver I'esthetique. 
                            C'est ainsi, qu'au detour d'une rue, une atmosphere, un paysage, Alger, Paris et sa banlieue, que mes choix sont delimites, parceque chaque lieu, chaque endroit est particulier, et temoigne d'une vie.<i style={{marginLeft:15}} class="fa fa-quote-right" aria-hidden="true"></i>
                            <br/><br/>
                        <Link to="/artist" style={{color:"#d4af37",fontSize:17}}>
                               Apprendre plus sur l'artist
                        </Link>
                        </p>
                    </div>
               </div>
               <div className="contacts-landing">
                    <h3>
                      contacts
                   </h3>
                       
                        <ContactSection />

                    
               </div>
            </div>
        )
    }
}
