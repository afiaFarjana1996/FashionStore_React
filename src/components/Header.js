"use strict"

import React from 'react'
import { Button, Navbar, Nav,NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Header = () => (
  <Navbar bg="dark" variant="dark" sticky="top">
    <Navbar.Brand>    <Link to="/" >
      <img width="140px" height="120px" src="images/logo.png" /></Link>
    </Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className="mr-auto">
        <Nav.Link href="#/" >Home</Nav.Link>
        <NavDropdown title="Category" id="basic-nav-dropdown" >
          <NavDropdown.Item><Link to="/menshirt" replace>Men Shirt</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to="/menshoe" replace>Men Shoe</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to="/womenshoe" replace>Women Shoe</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to="/menjacket" replace>Men Jacket</Link></NavDropdown.Item>
        </NavDropdown>
        </Nav>
        </Navbar.Collapse>
         <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="#/login">Log in</Nav.Link>
        <Nav.Link href="#/register">Register</Nav.Link>
        <Nav.Link href="#/cart"><Button className="btn btn-info btn-md"><i className="fa fa-shopping-cart" aria-hidden="true"></i>
          Cart</Button></Nav.Link>
          </Navbar.Collapse>
      
    

  </Navbar>
)

