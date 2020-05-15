import React, { Component } from 'react'
import './Landing.css'
import { elyes2, elyes1, demandeMariage, saintLouis2, peniche, pontNapoleon, academie, grandOrsay, saintLouis1, bastille, elyes4, elyes3 } from '../Images'
import { Paper,Button } from '@material-ui/core'
import Swiper from 'react-id-swiper';
import {Link} from 'react-router-dom'

import 'swiper/css/swiper.css'
const data=[
    {title:"La demande en mariage",image:demandeMariage,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Saint-Louis-en-île",image:saintLouis2,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"La péniche du pont-neuf",image:peniche,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Le pont-Napoléon",image:pontNapoleon,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"L'académie",image:academie,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Le grand Orsay",image:grandOrsay,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"L'ile saint louis",image:saintLouis1,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Bastille",image:bastille,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
]
const params = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
  }
export default class Landing extends Component {
    
    render() {
        return (
            <div className="landing-container" style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

               <div className="personal-container-1">
                   <div className="personal-card-1">
                       <div className="imgBx">
                           <img src={elyes1} />
                        </div> 
                        <div className="personal-details-1">
                            <div className="personal-content-1">
                                <h2 className="artist-font">
                                    Elyes Tayeb Lamine <br/>
                                    <span className="description-font">
                                        Artiste Paintre et Proffesseur
                                    </span>
                                </h2>
                                    <ul>
                                        <li><a style={{backgroundColor:"#3b5995"}} href="#">Fb</a></li>
                                        <li><a style={{backgroundColor:"#55acee"}}href="#">Tw</a></li>
                                        <li><a style={{backgroundColor:"#b31217"}} href="#">pin</a></li>
                                        <li><a style={{backgroundColor:"#0077b5"}} href="#">Yt</a></li>
                                        <li><a style={{backgroundColor:"#3b5995"}} href="#">in</a></li>
                                    </ul>
                                    <a href="#">
                                        Read More
                                    </a>
                                 
                            </div>
                        </div>
                   </div>
               </div>
               <div className="last-projects">
                   <h3>
                       Dernieres Ouvrres
                   </h3>
                   <div style={{width:1000}}>
                   <Swiper {...params}>
                   {
                        data.map((item,index) =>{
                            return(
                                <Paper key={index} className="project-item-swip" >
                                    <div>
                                        <img src={item.image} className="project-image-swip"/>
                                    </div>
                                    <h3 className="artist-font project-title-swip">
                                        {item.title}
                                    </h3>
                                    {/* <p className="description-font project-description-swip">
                                        {item.description.substring(0,50)}...
                                    </p>
                                    <div>
                                        <Button variant="outlined" style={{fontFamily:"Source Sans Pro, Sans-Serif",fontWeight:"600",fontSize:14}}>
                                            View Details
                                        </Button>
                                    </div> */}
                            </Paper>

                        )
                        })
                    }
                    </Swiper>

                   </div>
                    <div className="link-projects artist-font">
                        <Link  className={"navbar-item-link"}  to="/projects">
                                voir tous les Oeuvres
                        </Link>
                    </div>
               </div>
               <div className="about-artist">
                    <h3>
                       A props d'elyes
                   </h3>
                    <div className="about-content">
                        <div className="artist-circle artist-circle-2">
                            <img src={elyes3} />
                        </div>
                        <p className="about-artist-text description-font">
                            <b>l'artist dit souvent : </b><br/>
                            <i class="fa fa-quote-left" aria-hidden="true" style={{marginRight:15}}></i>
                            A ce que la nature du beau presente mon regard, la dexterite de mes mains, essaye toujours d'en preserver I'esthetique. 
                            C'est ainsi, qu'au detour d'une rue, une atmosphere, un paysage, Alger, Paris et sa banlieue, que mes choix sont delimites, parceque chaque lieu, chaque endroit est particulier, et temoigne d'une vie.<i style={{marginLeft:15}} class="fa fa-quote-right" aria-hidden="true"></i>
                        </p>
                    </div>
               </div>
            </div>
        )
    }
}
