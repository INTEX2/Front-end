// import React, {useContext} from 'react'
import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from "react-router-dom"
// import AppContext from './context'



export default function Left() {
  return (
    <bs.Container fluid className="p-4">
      <bs.Row className="p-0">
      <Link to="/search"  className='pb-2' style={{color: "dark"}}>All Campaigns</Link><br/>
      <Link to="/predictor" className='pb-2' style={{color: "dark"}}>Campaign Creators</Link><br/>
      <Link to="/gofundme-analysts" className='pb-2' style={{color: "dark"}}>GoFundMe Analysts</Link><br/>
      <Link to="/testimonials" className='pb-2' style={{color: "dark"}}>Testimonials</Link>
      </bs.Row>
    </bs.Container>    
    )
  }


    
    
