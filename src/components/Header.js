"use strict"

import React from 'react'
import { Button, Navbar, Nav,NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import cookie from 'react-cookies'

import {LogoutAction, LoginAction} from '../actions/LoginAction'
import PropTypes from 'prop-types'

const CheckLogin = () => {
  var content = '';
  const removeCookie = () => {
       LogoutAction.logOutUser();
  }
  if(!cookie.load('userCookie')){
    content = (
      <Nav.Link href="#/login">Log in</Nav.Link>
    )
  }
  if(cookie.load('userCookie')){
    content = (
      <Navbar.Collapse>
      <Nav.Link href="#/" onClick= {removeCookie}>Log Out</Nav.Link>
      <Nav.Link href="#/profile">Profile</Nav.Link>
      </Navbar.Collapse>
     )
  }
  return(
    <div>
   {content}
   </div>
  );
}
export class Header extends React.Component{
   constructor(props){
     super(props);
   }
  ComponentDidMount(){
       LoginAction.renderLoginForm();
  }
  render(){
  return(
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
        <CheckLogin />
        <Nav.Link href="#/register">Register</Nav.Link>
        <Nav.Link href="#/cart"><Button className="btn btn-info btn-md"><i className="fa fa-shopping-cart" aria-hidden="true"></i>
          Cart</Button></Nav.Link>
          </Navbar.Collapse>

  </Navbar>
);
  }
  }

  Header.propTypes = {
    userSession: PropTypes.object
}

