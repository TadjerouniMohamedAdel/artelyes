import React, { Component } from 'react'
import './Landing.css'
import { elyes2, elyes1 } from '../Images'
import { Paper } from '@material-ui/core'
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
                                <h2>
                                    Elyes Tayeb Lamine <br/>
                                    <span>
                                        Artiste Paintre et Proffesseur
                                    </span>
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
                                </h2>
                                 
                            </div>
                        </div>
                   </div>
               </div>
            </div>
        )
    }
}
