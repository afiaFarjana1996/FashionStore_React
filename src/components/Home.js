"use strict"

import React from 'react'
import { Link } from 'react-router-dom'

const divStyle ={
    width:'100vw',
    height:'auto',
    maxHeight:'100%'
}

export const Home = () => (
         <div className="wrapper1" >
          <li className="list-inline-item">
                    <Link to="/" className="wrapper2" >
                        <img style={divStyle} className="wrapper" src="images/home.png" align="center"/>
                    </Link>
                </li>

         </div>

         
)