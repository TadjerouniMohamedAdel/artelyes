import React from 'react'
import { Paper } from '@material-ui/core'
import Swiper from 'react-id-swiper';
import {Link} from 'react-router-dom'
import { demandeMariage, saintLouis2, notreDame,terrasse,neige,casbah6,casbah7,casbah8,casbah9,peniche, pontNapoleon, academie, grandOrsay, saintLouis1, bastille } from '../Images'
import './LatestProjects.css'
const data=[
    {title:"Les Terrasses",image:terrasse,price:"1100",dimentions:"80x60",description:""},
    {title:"Femmes au hayek",image:casbah6,price:"590",dimentions:"40x50",description:""},
    {title:"La rue Kléber",image:casbah7,price:"1100",dimentions:"60x80",description:""},
    {title:"Vue sur la mer",image:casbah8,price:"1190",dimentions:"80x60",description:""},
    {title:"Ruelle de la Casbah",image:casbah9,price:"395",dimentions:"40x50",description:""},
    {title:"La péniche du pont-neuf",image:peniche,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Notre Dame",image:notreDame,price:"550",dimentions:"46x38",description:"Le sujet ici : L'Eglise de Notre Dame, dès le lever du jour, présente à tout instants, veille sur la cité encore endormie, lorsque personne ne veille sur elle. Les marches des deux cotés des quais de seine qui y mènent sont une ascension vers ce joyau architectural que l'usure du temps défit et qui malgré tout demeure, majestueux et debout."},
    {title:"Vercruysse la descente",image:neige,description:"Toile tendue Peinture a l’huile. ",price:"1290",dimentions:"80x60"},
]

const params = {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
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

export default function LatestProjects() {
    return (
        <div className="last-projects">
                   <h3>
                   les Dernières œuvres
                   </h3>
                   <div className="swip-container">
                   <Swiper {...params}>
                   {
                        data.map((item,index) =>{
                            return(
                                <Paper key={index} className="project-item-swip" >
                                    <div>
                                        <img src={item.image} className="project-image-swip" alt={"Oeuvre d'Elyes Taib Lamine "+item.title}/>
                                    </div>
                                    <h3 className="artist-font project-title-swip">
                                        {item.title}
                                    </h3>
                            </Paper>

                        )
                        })
                    }
                    </Swiper>

                   </div>
                    <div className="link-projects artist-font">
                        <Link  to="/projects" >
                        Voir tous les oeuvres
                        </Link>
                    </div>
               </div>
    )
}
