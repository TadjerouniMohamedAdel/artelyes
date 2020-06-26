import React from 'react'
import { underline } from '../Images'
import './TitleSection.css'
export default function TitleSection({title}) {
    return (
        
        <h3 className="title-section">{title}
            <br/>
            <img  className="img-underline" src={underline} style={{marginTop:-10}} alt="underline decoration"/>
        </h3>
    )
}
