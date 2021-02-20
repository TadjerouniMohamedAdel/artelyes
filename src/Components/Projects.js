import React, { Component } from 'react'
import { Paper, Button } from '@material-ui/core'
import './Projects.css'
import { academie,orsay_de_loin,terrasse,casbah6,casbah7,casbah8,casbah9, avenue_fleurs,pont1,neige,vieux_pont,casbah1,casbah2,casbah3,casbah4,casbah5,entreCopines, bastille, demandeMariage, peniche, pontNapoleon, grandOrsay, saintLouis1, saintLouis2, solitaire, notreDame, pontsAmours, promeneur, pecheur, fleursSous, juleVer, plateau,  alger1,alger2 } from '../Images'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import HeaderDeco from './HeaderDeco'
import TitleSection from './TitleSection'

const data=[
    {title:"Les Terrasses",image:terrasse,price:"1100",dimentions:"80x60",description:""},
    {title:"Femmes au hayek",image:casbah6,price:"590",dimentions:"40x50",description:""},
    {title:"La rue Kléber",image:casbah7,price:"1100",dimentions:"60x80",description:""},
    {title:"Vue sur la mer",image:casbah8,price:"1190",dimentions:"80x60",description:""},
    {title:"Ruelle de la Casbah",image:casbah9,price:"395",dimentions:"40x50",description:""},
    {title:"La demande en mariage",image:demandeMariage,price:"600",dimentions:"38x46",description:"Ce tableau est réalisé vers la mi-juin, jour de fraîcheur matinale où la lumière et les tons sont d'un gris bleuté et frais. Les touches successives et colorées viennent donner le mouvement de l'eau et le bruit des flots."},
    {title:"Saint-Louis-en-île",image:saintLouis2,price:"695",dimentions:"38x46",description:"Tout indique le personnage au premier plan, baigné d'ombre et de lumière qui donne à ce tableau sa profondeur. "},
    {title:"La péniche du pont-neuf",image:peniche,price:"795",dimentions:"38x46",description:"Ici, la couleur jaune d'or du sujet en contraste avec l’amarrage des Pompiers de la seine en rouge donne toute la profondeur et un attrait particulier aux détails qui ne cessent de balader l’œil du spectateur d'un bout de la toile à l'autre..."},
    {title:"Le pont-Napoléon",image:pontNapoleon,price:"550",dimentions:"46x38",description:"L'accent est donné sur les points de fuites et la convergence des lignes de construction donnant cette impression d'un assez long parcourt..."},
    {title:"L'académie",image:academie,price:"795",dimentions:"",description:"Non loin de là, un bistro fréquenté par les artistes des quais Malaquais : \"Les Deux Académies\". Le sujet sur cette oeuvre, c'est l'élément des sites observées dans le lointain pour leur donner l'illusion du détail."},
    {title:"Le grand Orsay",image:grandOrsay,price:"1790",dimentions:"65x92",description:"Si le musée d'Orsay est le titre, c'est cet arbre imposant et feuillu qui dans cette oeuvre en est la vedette, amusé et serein a écouter l'eau venir s'échouer au pied de ses racines..."},
    {title:"L'ile saint louis",image:saintLouis1,price:"550",dimentions:"38x46",description:"Lieu tranquille et insolite, endroit de mystère et controverses, que fréquentaient jadis écrivains, poètes et artistes en tous genres en quête d’inspiration. Les touches colorées qui se succèdent ajoutent au mouvement de l'eau d'avantage de tumulte au va et vient incessant des bateaux-mouches venant troubler le calme de l'Île."},
    {title:"Bastille",image:bastille,price:"795",dimentions:"73x50",description:"Une vue d’ensemble des Ecluses du bassin de l'Arsenal ou péniches et bateaux de plaisance sont amarrés pour un départ proche vers des lieux encore incertains... Dont le sujet principal est cet ange doré sous un ciel automnal et menaçant."},
    {title:"Le solitaire",image:solitaire,price:"450",dimentions:"38x46",description:"Un homme seul assis sur un banc le long d'un quai de seine, spectateur silencieux et imperturbable du jeu des flots de l'eau."},
    {title:"Notre Dame",image:notreDame,price:"550",dimentions:"46x38",description:"Le sujet ici : L'Eglise de Notre Dame, dès le lever du jour, présente à tout instants, veille sur la cité encore endormie, lorsque personne ne veille sur elle. Les marches des deux cotés des quais de seine qui y mènent sont une ascension vers ce joyau architectural que l'usure du temps défit et qui malgré tout demeure, majestueux et debout."},
    {title:"Le pont des amours",image:pontsAmours,price:"550",dimentions:"38x46",description:"Sur ce pont tous les pavés gaiement colorés chacun d'eux semble être un joyau, ainsi reprenant les mêmes jeux de touches colorés de l'eau sur un sol dur ou l'on perd pied."},
    {title:"Le promeneur",image:promeneur,price:"695",dimentions:"38x46",description:"Ici, le sujet, c'est les promeneurs, tandis que la masse verdâtre du pont métallique et la rangée d'arbres de chaque côté de l'oeuvre permettent à la lumière de décider des plans..."},
    {title:"Le pêcheur",image:pecheur,price:"450",dimentions:"61x46.5",description:"Cette même technique toujours et encore vient perturber la solitude du moment par ces jeux de mouvements que permettent touches colorées laissant pourtant silencieuse l'atmosphère de la toile."},
    {title:"Entre copines",image:entreCopines,price:"695",dimentions:"46x38",description:"Le premier plan de personnages n'a de mystérieux que le jeu des ombres et de lumières sur elles projetées de la même manière sur les pavés et l'eau, semblant les animer."},
    {title:"L'avenue du plateau sous la neige",price:"795",dimentions:"70x50",image:plateau,description:"Peinture à l'huile L'avenue du plateau sous la neige pour décoration."},
    {title:"La rue Jules Vercruysse la montée",price:"1290",dimentions:"80x60",image:juleVer,description:"dimentions: 80x60 prix:1190"},
    {title:"L'avenue des fleurs sous la neige",image:fleursSous,description:"dimentions 50x70 prix: 795"},
    {title:"Le phare de la baie d'Alger (ka3ssour)",price:"895",dimentions:"80x60",image:alger1,description:"Le phare de la baie d'Alger Ka3ssour Peinture a l'hulile"},
    {title:"Le Bastion",image:alger2,price:"395",dimentions:"46.5x38",description:"Le Bastion Peinture a l'hulile"},
    {title:"Ruelle de la Casbah",image:casbah1,price:"195",dimentions:"46.5x38",description:"Ruelle de la Casbah Peinture a l'hluile"},
    {title:"Ruelle de la Casbah",image:casbah2,price:"195",dimmentions:"46.5x38",description:"Ruelle de la Casbah Peinture a l'hulile"},
    {title:"Ruelle de la Casbah",image:casbah3,price:"195",dimentions:"46.5x38",description:"Ruelle de la Casbah Peinture a l'hulile",},
    {title:"Ruelle de la Casbah",image:casbah4,price:"195",dimentions:"46.5x38",description:"Ruelle de la Casbah Peinture a l'hulile"},
    {title:"Vercruysse la descente",image:neige,description:"Toile tendue Peinture a l’huile. ",price:"1290",dimentions:"80x60"},
    {title:"Le vieux pont de Chatou",image:vieux_pont,price:"350",dimentions:"",description:"Peinture à l'huile Le vieux pont de Chatou pour décoration"},
    {title:"Orsay au loin",image:orsay_de_loin,price:"550",dimentions:"38x46",description:"Cette composition linéaire et horizontale confère à cette oeuvre incroyable quiétude dont seuls les clapotais de l'eau résonnent encore."},
    {title:"L'avenue des fleurs en automne",price:"990",dimentions:"73x50",image:avenue_fleurs,description:"dimentions 73x50 prix 795"},
    {title:"Ruelle de la Casbah",image:casbah5,description:"Ruelle de la Casbah Peinture a l'hulile. ",price:"195",dimentions:"46.5x38"}
]


export default class Projects extends Component {

    constructor(props){
        super(props);
        this.props.updatelinkActive(2)
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

    shareProject = (item,type)=>{
        console.log(item)
        switch (type) {
            case "facebook":
                     
                break;
            case "linkedin":
                    
                break;
            case "twitter":
                
                break;
            case "instagram":
                    
                break;
            case "pinterest":
                
                break;

        
            default:
                break;
        }
    }
    

    render() {
        return (
            
            <div style={{flex:1}}>
                 {this.state.isOpen && (
          <Lightbox
            mainSrc={this.state.image}
            onCloseRequest={() => this.setState({ isOpen: false })}
            imageTitle={this.state.title}
            imageCaption={this.state.caption}
          />
        )}
                <HeaderDeco/>
                <TitleSection title="les Dernières œuvres" />
                <div className="projects-container">
                    {
                        data.map((item,index) =>{
                            
                            return(
                              
                                <Paper key={index} className="project-item" >
                                    <div>
                                        <img src={item.image} className="project-image" alt={"Oeuvre d'Elyes Taib Lamine "+item.title}/>
                                    </div>
                                    <h3 className="artist-font project-title">
                                        {item.title}
                                    </h3>
                                    <p className="description-font project-description">
                                        Dimentions : {item.dimentions}<br/>
                                        Prix : {item.price}<i className="fa fa-euro" style={{marginLeft:5,fontWeight:"normal",position:"relative",top:1}}></i>
                                    </p>
                                    <div>
                                        <Button onClick={()=>this.zommImage(item)} variant="outlined" style={{fontFamily:"Source Sans Pro, Sans-Serif",fontWeight:"600",fontSize:14}}>
                                            Agrendir <i className="fa fa-external-link zomm-icon"></i>
                                        </Button>
                                    </div>
                                    <div className="share-menu">
                                        <ul>
                                            <li className="facebook"><a href="javascript:void(0)" onClick={()=>this.shareProject(item,"facebook")}><i className="fa fa-facebook"></i></a></li>
                                            <li className="twitter"><a href="javascript:void(0)" onClick={()=>this.shareProject(item,"twitter")}><i className="fa fa-twitter"></i></a></li>
                                            <li className="instagram"><a href="javascript:void(0)" onClick={()=>this.shareProject(item,"instagram")}><i className="fa fa-instagram"></i></a></li>
                                            <li className="linkedin"><a href="javascript:void(0)" onClick={()=>this.shareProject(item,"linkedin")}><i className="fa fa-linkedin"></i></a></li>
                                            <li className="pinterest"><a href="javascript:void(0)" onClick={()=>this.shareProject(item,"pinterest")}><i className="fa fa-pinterest"></i></a></li>
                                        </ul>
                                    </div>
                            </Paper>
                        )
                        })
                    }
                </div>
            </div>
        )
    }
}
