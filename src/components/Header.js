"use strict"

import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => (
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <ul className="list-inline">
                <li className="list-inline-item">
                    <Link to="/" className="navbar-brand">
                        <img width="90px" height="30px" src="images/logo.png" />
                    </Link>
                </li>
                <li className="list-inline-item"><Link to="/shoes" replace>Shoes</Link></li>
                <li className="list-inline-item"><Link to="/shirts" replace>Shirts</Link></li>
                <li className="list-inline-item"><Link to="/pants" replace>Pants</Link></li>
            </ul>
        </div>
    </nav>
)

