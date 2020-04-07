import React from 'react'
import * as bs from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import {Link} from "react-router-dom"
import Logo from './media/fund.png'
// import AppContext from './context'


function Top() {
    return (
        <div>
            <Navbar className="top-bg" expand="lg">
                <Link to="/">
                    <Navbar.Brand>
                    <img
                        alt="NW Labs"
                        src={Logo}
                        width="100"
                        height="50"
                        // className="d-inline-block align-top"
                    />{' '}
                        Intex 2
                    </Navbar.Brand>
                    <i class="fas fa-sun"></i>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <bs.Nav className="mr-auto">
                        <Link to="/" className="nav-link" style={{color: "white"}}>Home</Link>
                        <Link to="/about" className="nav-link" style={{color: "white"}}>About</Link>
                        <Link to="/predictor" className="nav-link" style={{color: "white"}}>Score Campaign</Link>
                        <Link to="/help" className="nav-link" style={{color: "white"}}>Help</Link>
                        <Link to="/covidData" className="nav-link" style={{color: "white"}}>Covid</Link>
                        <Link to="/login" className="nav-link" style={{color: "white"}}>Log In</Link>
                        <Link to="/calculations" className="nav-link" style={{color: "white"}}>Calculus 2</Link>
                    </bs.Nav>
                    <bs.Form inline>
                    <bs.FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <bs.Button variant="outline-success" class="fas fa-search">search</bs.Button>
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