import React from 'react'
import * as bs from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import {Link} from "react-router-dom"
import Logo from './media/fund.png'
// import AppContext from './context'


function Top() {
    return (
        <div>
            <Navbar expand="lg">
                <Link to="/">
                    <Navbar.Brand>
                    <img
                        alt="NW Labs"
                        src={Logo}
                        width="100"
                        height="50"
                    />{' '}
                    </Navbar.Brand>
                    <i class="fas fa-sun"></i>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <bs.Nav className="mr-auto">
                        <Link to="/" className="nav-link" style={{color: "white"}}>Home</Link>
                        <Link to="/about" className="nav-link" style={{color: "white"}}>About</Link>
                        <Link to="/resources" className="nav-link" style={{color: "white"}}>Resources</Link>
                        <Link to="/login" className="nav-link" style={{color: "white"}}>Log In</Link>
                    </bs.Nav>
                    <bs.Form inline>
                    <bs.FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <bs.Button variant="outline-success" className="fa fa-search search-icon"></bs.Button>
                    </bs.Form>
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