// import React, {useContext} from 'react'
import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from "react-router-dom"
// import AppContext from './context'



export default function Left() {
  return (
    <bs.Container fluid className="p-4">
      <bs.Row className="p-0">
      <Link to="/allCampaigns"  className='pb-2' style={{color: "black"}}>All Campaigns</Link><br/>
      <Link to="/predictor" className='pb-2' style={{color: "black"}}>Campaign Creators</Link><br/>
      <Link to="/gofundme-analysts" className='pb-2' style={{color: "black"}}>GoFundMe Analysts</Link><br/>
      <Link to="/testimonials" className='pb-2' style={{color: "black"}}>Testimonials</Link>
      <Link to="/covid-data" className="pb-2" style={{color: "black"}}>COVID-19 Visualization</Link>
      </bs.Row>
    </bs.Container>    
    )
  }


    
    
