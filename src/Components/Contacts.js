import React, { Component } from 'react'
import { underline, top } from '../Images'

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
            </div>
        )
    }
}
