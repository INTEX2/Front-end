import React from 'react'
import * as bs from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import {Link} from "react-router-dom"
// import Logo from './labLogo.png'
// import AppContext from './context'



function Top() {
    return (
        <div>
            <Navbar variant="dark" expand="lg">
                <Link to="/">
                    <Navbar.Brand>
                    {/* <img
                        alt="NW Labs"
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '} */}
                        Intex 2
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <bs.Nav className="mr-auto">
                        <Link to="/" className="nav-link" style={{color: "white"}}>Home</Link>
                        <Link to="/about" className="nav-link" style={{color: "white"}}>About</Link>
                        <Link to="/help" className="nav-link" style={{color: "white"}}>Help</Link>
                        <Link to="/login" className="nav-link" style={{color: "white"}}>Log In</Link>
                    </bs.Nav>
                    
                    <bs.Nav>
                        <bs.NavDropdown title="Welcome, Dakota" alignRight style={{color: "white"}}>
                            <bs.NavDropdown.Item>My Account</bs.NavDropdown.Item>
                            <bs.NavDropdown.Divider />
                            <bs.NavDropdown.Item href="#action/3.4">Log Out</bs.NavDropdown.Item>
                        </bs.NavDropdown>
                    </bs.Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )  
}

export default Top