"use strict"

import React from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Header = () => (
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <ul className="list-inline">
                <li className="list-inline-item">
                    <Link to="/" className="navbar-brand">
                        <img width="170px" height="140px" src="images/logo.png" />
                    </Link>
                </li>
                <li className="list-inline-item"><Link to="/menshirt" replace>Men Shirt</Link></li>
                <li className="list-inline-item"><Link to="/menshoe" replace>Men Shoe</Link></li>
                <li className="list-inline-item"><Link to="/womenshoe" replace>Women Shoe</Link></li>
                <li className="list-inline-item"><Link to="/menjacket" replace>Men Jacket</Link></li>
                
            </ul>
                
            <ul className="list-inline">
            <li className="list-inline-item"><Link to="/login" replace>Log in</Link></li>
            <li className="list-inline-item"><Link to="/register" replace>Register</Link></li>
            <li className="list-inline-item"> <Link to="/cart"><Button className="btn btn-info btn-md"><i className="fa fa-shopping-cart" aria-hidden="true"></i>
             Cart</Button> </Link></li>
            </ul>
        </div>
    </nav>
)

