import React, { Component } from 'react'
import { underline } from '../Images'

export default class Contacts extends Component {
    render() {
        return (
            <div>
                 <h3 className="profile-section-title">
                    contacts<br/>
                    <img src={underline}  style={{marginTop:-10}} width={350} height={50}/>
                </h3>
            </div>
        )
    }
}
