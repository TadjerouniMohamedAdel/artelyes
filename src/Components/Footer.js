import React, { Component } from 'react'
import { artelyesLogo, adel } from '../Images'
import  './Footer.css'
export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-section">
                    <div className="logo-footer-section"> 
                        <img src={artelyesLogo} className="logo-footer" alt="artelyes"/>
                    </div>
                    <div className="dev-content">
                        <h3 className="artist-font">À propos du site :</h3>
                        <p className="description-font" style={{color:'#777',marginTop:-5}}>
                        Artelyes est un site web dédié à la présentation et la publication des oeuvres d'art de Mr Elyes Tayeb Lamine
                        </p>
                    </div>
                </div>
                <div className="footer-section">
                <div className="artist-footer-circle artist-footer-circle-2">
                            <img src={adel} alt="Adel Mohamed Tadjerouni (Full Stack Developer)"/>
                        </div>
                    <div className="dev-content">
                        <h3 className="artist-font">Ce site est créé par :</h3>
                            <div>
                                <span className="dev-name artist-font">
                                    Adel Mohamed Tadjerouni
                                </span>
                                <span className="description-font dev">
                                       Full Stack web & mobile developer
                                    </span>
                            </div>
                        <div className="social-dev">
                            <ul>
                                <li className="linkedin"><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/adel-mohamed-tadjerouni-147546164/"><i className="fa fa-linkedin"></i></a></li>
                                <li className="github"><a rel="noopener noreferrer" target="_blank" href="https://github.com/TadjerouniMohamedAdel"><i className="fa fa-github"></i></a></li>
                                <li className="facebook"><a rel="noopener noreferrer" target="_blank" href="https://web.facebook.com/adelnagato.tadj"><i className="fa fa-facebook"></i></a></li>
                                <li className="skype"><a rel="noopener noreferrer" target="_blank" href="https://join.skype.com/invite/afq6nmhgxMgr"><i className="fa fa-skype"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </footer>
        )
    }
}
