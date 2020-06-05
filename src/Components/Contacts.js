import React, { Component } from 'react'
import { underline, top } from '../Images'
import { elyes2, elyes1, demandeMariage, saintLouis2, peniche, pontNapoleon, academie, grandOrsay, saintLouis1, bastille, elyes4, elyes3, artelyesLogo } from '../Images'
import { Paper,Button,Icon, TextField } from '@material-ui/core'
import Swiper from 'react-id-swiper';
import {Link} from 'react-router-dom'
import  './Contact.css'

export default class Contacts extends Component {
    render() {
        return (
            <div>
                <div style={{flex:1,textAlign:"center",marginTop:20}}>
              <img src={top} style={{textAlign:"center"}} width={1200} height={150}/>
            </div>
                 <h3 className="profile-section-title">
                    contacts<br/>
                    <img src={underline}  style={{marginTop:-10}} width={350} height={50}/>
                </h3>
                <div className="contacts-landing">
                    <h3>
                      contacts
                   </h3>
                    <div className="contacts-paper">
                    <div className="contacts-paper-info">
                        <h3>
                            Contact us
                        </h3>
                        <div className="artist-circle artist-circle-3">
                            <img src={elyes1} />
                        </div>
                            <div className="contacts-paper-info-item description-font">
                                <span><i className="fa fa-phone"></i></span>
                                <span>0800 123 121 90</span>
                            </div>
                            <div className="contacts-paper-info-item description-font">
                                <span>
                                     <i className="fa fa-envelope-o"></i>
                                </span>
                                <span>
                                    adsd@mail.com
                                </span>
                            </div>
                            <div className="contacts-paper-info-item description-font">
                                <span>
                                    <i className="fa fa-home"></i>
                                </span>
                                <span>
                                    Cite 3000 logement ilot 14 b11 Bouinana Blida Algerie

                                </span>
                            </div>
                            <div className="social-menu">
                            <ul>
                                <li className="facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li className="instagram"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li className="linkedin"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li className="pinterest"><a href="#"><i className="fa fa-pinterest"></i></a></li>
                            </ul>
                        </div>
                        </div>
                       
                        <div className="contacts-paper-form">
                        <h3>
                            Contact form
                        </h3>
                        <div style={{margin:20}}>
                                <TextField 
                                    id="outlined-basic" 
                                    className="input-contact"
                                    label="Full Name" 
                                    variant="outlined" />
                            </div>
                            <div style={{margin:20}}>
                                <TextField 
                                    id="outlined-basic" 
                                    className="input-contact"
                                    label="Email" 
                                    variant="outlined" />
                            </div>
                            <div style={{margin:20}}>
                                <TextField 
                                    className="input-contact"
                                    id="outlined-basic" 
                                    label="Sujet" 
                                    variant="outlined" />
                            </div>
                            <div style={{margin:20}}>
                                <TextField
                                    className="input-contact"
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                />
                            </div>
                            <div style={{margin:20}}>
                                {/* <Button variant="outlined" primary>
                                        Envoyer
                                        <Icon style={{marginLeft:5}}>
                                            send
                                        </Icon>
                                </Button> */}
                                <a className="readmore" href="#" style={{marginTop:10}}>
                                        Envoyer un message
                                    </a>
                            </div>

                        </div>

                    </div>
               </div>
            </div>
        )
    }
}
