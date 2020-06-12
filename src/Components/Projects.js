import React, { Component } from 'react'
import { Paper, Typography, Button } from '@material-ui/core'
import './Projects.css'
import { academie,orsay_de_loin, avenue_fleurs,plateau2,pont1,neige,vieux_pont,casbah1,casbah2,casbah3,casbah4,casbah5,entreCopines, bastille, demandeMariage, peniche, pontNapoleon, grandOrsay, saintLouis1, saintLouis2, solitaire, notreDame, pontsAmours, promeneur, pecheur, fleursSous, juleVer, plateau, underline, top, alger1,alger2 } from '../Images'
import {Spring} from 'react-spring/renderprops'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import HeaderDeco from './HeaderDeco'
import TitleSection from './TitleSection'

const data=[
    {title:"La demande en mariage",image:demandeMariage,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"Saint-Louis-en-île",image:saintLouis2,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"La péniche du pont-neuf",image:peniche,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"Le pont-Napoléon",image:pontNapoleon,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"L'académie",image:academie,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"Le grand Orsay",image:grandOrsay,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"L'ile saint louis",image:saintLouis1,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"Bastille",image:bastille,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"Le solitaire",image:solitaire,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"Notre Dame",image:notreDame,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"Le pont des amours",image:pontsAmours,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"Le promeneur",image:promeneur,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"Le pêcheur",image:pecheur,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"Entre copines",image:entreCopines,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"L'avenue du plateau sous la neige",image:plateau,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"La rue Jules Vercruysse la montée",image:juleVer,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"L'avenue des fleurs sous la neige",image:fleursSous,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"Le phare de la baie d'Alger (ka3ssour)",image:alger1,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"Le Bastion",image:alger2,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"Ruelle de la Casbah",image:casbah1,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"Ruelle de la Casbah",image:casbah2,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"Ruelle de la Casbah",image:casbah3,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"Ruelle de la Casbah",image:casbah4,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"Pont Iconnue",image:pont1,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"Vercruysse la descente",image:neige,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"Le vieux pont de Chatou",image:vieux_pont,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"Orsay au loin",image:orsay_de_loin,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"L'avenue des fleurs en automne",image:avenue_fleurs,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"L'avenue du plateau sous la neige",image:plateau2,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    {title:"Ruelle de la Casbah",image:casbah5,description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    // {title:"Lorem ipsum",image:"https://via.placeholder.com/280x233.png",description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    // {title:"Lorem ipsum",image:"https://via.placeholder.com/280x233.png",description:"Sint qui sit id irure ipsum qui consectetur nostrud. "},
    


]


export default class Projects extends Component {

    constructor(props){
        super(props);
        this.state = {
            image: null,
            isOpen: false,
          };
    }

    zommImage = (item)=>{
        console.log(item)
        this.setState({
            isOpen:true,
            image:item.image,
            title:item.title,
            caption:item.description
        })
    }

    shareProject = (item)=>{
        console.log(item)
    }
    

    render() {
        return (
            
            <div style={{flex:1}}>
                 {this.state.isOpen && (
          <Lightbox
            mainSrc={this.state.image}
            // nextSrc={images[(photoIndex + 1) % images.length]}
            // prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            imageTitle={this.state.title}
            imageCaption={this.state.caption}
          />
        )}
                <HeaderDeco/>
                <TitleSection title="Les dernieres oeuvres" />
                <div className="projects-container">
                    {
                        data.map((item,index) =>{
                            
                            return(
                                // <Spring
                                //     key={index}
                                //     from={{ transform:'scale(0)' }}
                                //     // delay={2000+index*600}
                                //     to={{ transform:'scale(1)' }}>
                                //     {props =>
                                <Paper key={index} className="project-item" >
                                    <div>
                                        <img src={item.image} className="project-image"/>
                                    </div>
                                    <h3 className="artist-font project-title">
                                        {item.title}
                                    </h3>
                                    <p className="description-font project-description">
                                        {item.description}
                                    </p>
                                    <div>
                                        <Button onClick={()=>this.zommImage(item)} variant="outlined" style={{fontFamily:"Source Sans Pro, Sans-Serif",fontWeight:"600",fontSize:14}}>
                                            Agrendir <i className="fa fa-external-link zomm-icon"></i>
                                        </Button>
                                    </div>
                                    <div className="share-menu">
                                        <ul>
                                            <li className="facebook"><a href="#" onClick={()=>this.shareProject(item)}><i className="fa fa-facebook"></i></a></li>
                                            <li className="twitter"><a href="#" onClick={()=>this.shareProject(item)}><i className="fa fa-twitter"></i></a></li>
                                            <li className="instagram"><a href="#" onClick={()=>this.shareProject(item)}><i className="fa fa-instagram"></i></a></li>
                                            <li className="linkedin"><a href="#" onClick={()=>this.shareProject(item)}><i className="fa fa-linkedin"></i></a></li>
                                            <li className="pinterest"><a href="#" onClick={()=>this.shareProject(item)}><i className="fa fa-pinterest"></i></a></li>
                                        </ul>
                                    </div>
                            </Paper>
                            //         }
                            // </Spring>

                        )
                        })
                    }
                </div>
            </div>
        )
    }
}
