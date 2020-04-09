import React, {useContext} from 'react'
import * as bs from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import {Link} from "react-router-dom"
import Logo from './media/fund.png'
import AppContext from './context'


function Top() {
    const state = useContext(AppContext)
    // console.log('state', state) 

    let greeting = ''
    if (!state.userName){
        greeting = 'Login'
    }else if(state.isAdmin){
        greeting = 'Welcome, '+ state.userName+' Admin '
    }else{
        greeting = 'Welcome, '+ state.userName
    }
    // console.log('greeting', greeting)
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
                    <i className="fas fa-sun"></i>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <bs.Nav className="mr-auto">
                        <Link to="/" className="nav-link" style={{color: "white"}}>Home</Link>
                        <Link to="/about" className="nav-link" style={{color: "white"}}>About</Link>
                        <Link to="/resources" className="nav-link" style={{color: "white"}}>Resources</Link>
                    </bs.Nav>
                    <bs.Form inline>
                    <bs.FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <bs.Button variant="success" className="fa fa-search search-icon"></bs.Button>
                    </bs.Form>
                    <bs.Nav>
                        <bs.NavDropdown title={greeting} alignRight style={{color: "white"}}>
                            <bs.NavDropdown.Item hidden={state.LoggedIn}>
                                <Link to="/login" className="btn">Log In</Link>
                            </bs.NavDropdown.Item >
                            <bs.NavDropdown.Divider hidden={state.LoggedIn} />
                            <bs.NavDropdown.Item>
                                <Link to="/signup" className="btn">Sign Up</Link>
                            </bs.NavDropdown.Item>
                            <bs.NavDropdown.Divider hidden={!state.LoggedIn} />
                            <bs.NavDropdown.Item hidden={!state.LoggedIn}>
                                <Link to="/logout" className="btn">Log Out</Link>
                            </bs.NavDropdown.Item>
                        </bs.NavDropdown>
                    </bs.Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )  
}

export default Top