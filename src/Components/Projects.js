import React, { Component } from 'react'
import { Paper, Typography, Button } from '@material-ui/core'
import './Projects.css'
import { academie,orsay_de_loin, avenue_fleurs,plateau2,pont1,neige,vieux_pont,casbah1,casbah2,casbah3,casbah4,casbah5,entreCopines, bastille, demandeMariage, peniche, pontNapoleon, grandOrsay, saintLouis1, saintLouis2, solitaire, notreDame, pontsAmours, promeneur, pecheur, fleursSous, juleVer, plateau, underline, top, alger1,alger2 } from '../Images'
import {Spring} from 'react-spring/renderprops'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const data=[
    {title:"La demande en mariage",image:demandeMariage,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Saint-Louis-en-île",image:saintLouis2,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"La péniche du pont-neuf",image:peniche,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Le pont-Napoléon",image:pontNapoleon,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"L'académie",image:academie,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Le grand Orsay",image:grandOrsay,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"L'ile saint louis",image:saintLouis1,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Bastille",image:bastille,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Le solitaire",image:solitaire,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Notre Dame",image:notreDame,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Le pont des amours",image:pontsAmours,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Le promeneur",image:promeneur,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Le pêcheur",image:pecheur,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Entre copines",image:entreCopines,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"L'avenue du plateau sous la neige",image:plateau,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"La rue Jules Vercruysse la montée",image:juleVer,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"L'avenue des fleurs sous la neige",image:fleursSous,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Le phare de la baie d'Alger (ka3ssour)",image:alger1,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Le Bastion",image:alger2,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Ruelle de la Casbah",image:casbah1,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Ruelle de la Casbah",image:casbah2,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Ruelle de la Casbah",image:casbah3,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Ruelle de la Casbah",image:casbah4,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Pont Iconnue",image:pont1,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Vercruysse la descente",image:neige,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Le vieux pont de Chatou",image:vieux_pont,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Orsay au loin",image:orsay_de_loin,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"L'avenue des fleurs en automne",image:avenue_fleurs,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"L'avenue du plateau sous la neige",image:plateau2,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    {title:"Ruelle de la Casbah",image:casbah5,description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    // {title:"Lorem ipsum",image:"https://via.placeholder.com/280x233.png",description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    // {title:"Lorem ipsum",image:"https://via.placeholder.com/280x233.png",description:"Sint qui sit id irure ipsum qui consectetur nostrud. Tempor aliquip aliquip in veniam commodo deserunt commodo id velit Lorem. Amet cupidatat duis excepteur sunt magna. Consectetur incididunt amet qui anim fugiat sint nulla. Aliqua eiusmod deserunt reprehenderit Lorem excepteur incididunt. Nisi sit reprehenderit ullamco Lorem eiusmod. Anim minim labore minim dolor eu officia."},
    


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
                <div style={{flex:1,textAlign:"center",marginTop:20}}>
              <img src={top} style={{textAlign:"center"}} width={1200} height={150}/>
            </div>
                <h3 className="projects-section-title">Les dernieres oeuvres
                <br/>
                <img  src={underline} style={{marginTop:-10}} width={350} height={50}/>
                </h3>
                <div className="projects-container">
                    {
                        data.map((item,index) =>{
                            return(
                                <Spring
                                    from={{ transform:'scale(0)' }}
                                    delay={2000+index*600}
                                    to={{ transform:'scale(1)' }}>
                                    {props =>
                                <Paper key={index} className="project-item" style={props}>
                                    <div>
                                        <img src={item.image} className="project-image"/>
                                    </div>
                                    <h3 className="artist-font project-title">
                                        {item.title}
                                    </h3>
                                    <p className="description-font project-description">
                                        {item.description.substring(0,50)}...
                                    </p>
                                    <div>
                                        <Button onClick={()=>this.zommImage(item)} variant="outlined" style={{fontFamily:"Source Sans Pro, Sans-Serif",fontWeight:"600",fontSize:14}}>
                                            Agrendir <i className="fa fa-external-link zomm-icon"></i>
                                        </Button>
                                    </div>
                            </Paper>
                                    }
                            </Spring>

                        )
                        })
                    }
                </div>
            </div>
        )
    }
}
