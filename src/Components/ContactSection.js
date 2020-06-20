import React, { Component } from 'react'
import { Paper,Button,Icon, TextField } from '@material-ui/core'
import './ContactSection.css'
import { elyes1 } from '../Images'
import SocialMenuArtist from './SocialMenuArtist'
export default class ContactSection extends Component {
    render() {
        return (
            <div className="contacts-paper">
                    <div className="contacts-paper-info">
                        <h3>
                        Mes coordonnées
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
                                    Adsd@mail.com
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
                            <div className="contacts-paper-social-menu">
                                <SocialMenuArtist />
                            </div>
                        </div>
                       
                        <div className="contacts-paper-form">
                        <h3>
                        M'envoyer un message
                        </h3>
                        <div>
                                <TextField 
                                    id="outlined-basic" 
                                    className="input-contact"
                                    label="Nom Complet" 
                                    variant="outlined" />
                            </div>
                            <div>
                                <TextField 
                                    id="outlined-basic" 
                                    className="input-contact"
                                    label="Email" 
                                    variant="outlined" />
                            </div>
                            <div>
                                <TextField 
                                    className="input-contact"
                                    id="outlined-basic" 
                                    label="Sujet" 
                                    variant="outlined" />
                            </div>
                            <div>
                                <TextField
                                    className="input-contact"
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                />
                            </div>
                            <div>
                                <a className="readmore" href="#" style={{marginTop:10}}>
                                        Envoyer le message
                                    </a>
                            </div>

                        </div>

                    </div>
        )
    }
}
