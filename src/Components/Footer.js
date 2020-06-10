import React, { Component } from 'react'
import { artelyesLogo, adel } from '../Images'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-section">
                    <div className="logo-footer-section"> 
                        <img src={artelyesLogo} className="logo-footer"/>
                    </div>
                    <div>
                        <h3 className="artist-font">A props du site :</h3>
                        <p className="description-font" style={{color:'#777'}}>
                            Ce site est dedie ou  ouevres d'art de Mr Elyes Taib Lamine
                        </p>
                    </div>
                </div>
                <div className="footer-section">
                <div className="artist-footer-circle artist-footer-circle-2">
                            <img src={adel} />
                        </div>
                    <div className="dev-content">
                        <h3 className="artist-font">Ce site est cree par:</h3>
                            <div>
                                <span className="dev-name artist-font">
                                    Adel Mohamed Tadjerouni
                                </span>
                                <span className="description-font dev">
                                       Full Stack web & mobile developer
                                    </span>
                            </div>
                        {/* <ul className="social-dev">
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-skype"></i></a></li>
                            <li><a href="#"><i className="fa fa-github"></i></a></li>
                        </ul> */}
                        <div className="social-dev">
                            <ul>
                                <li className="linkedin"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li className="github"><a href="#"><i className="fa fa-github"></i></a></li>
                                <li className="facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li className="skype"><a href="#"><i className="fa fa-skype"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </footer>
        )
    }
}
