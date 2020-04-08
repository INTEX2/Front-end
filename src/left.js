// import React, {useContext} from 'react'
import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from "react-router-dom"
// import AppContext from './context'



export default function Left() {
  return (
    <bs.Container fluid className="p-4">
      <bs.Row className="p-0">
      <h1>Hacks for more money</h1>
      <Link to="/Search" className="nav-link" style={{color: "dark"}}>All Campaigns</Link>
      <Link to="/Tips" className="nav-link" style={{color: "dark"}}>Tips for a succesful Campaign</Link>
        <li>Get married</li>
        <li>Take out life insurance </li>
        <li>Own lots of tigers</li>
        <li><Link to="/Tips" className="nav-link" style={{color: "dark"}}>Testimonials</Link></li>
      </bs.Row>
    </bs.Container>    
    )
  }


    
    
