import React from 'react'
import { top } from '../Images'
import './HeaderDeco.css'
export default function HeaderDeco() {
    return (
        <div style={{textAlign:"center",marginTop:20}}>
              <img className="header-deco" src={top} />
        </div>
    )
}
