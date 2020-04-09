import React, {useContext} from 'react'
import * as bs from 'react-bootstrap'
import { Link } from "react-router-dom"
import AppContext from './context'

export default function Left() {
  const context = useContext(AppContext)
  return (
    <bs.Container fluid >
      <bs.Row className="pt-3 pr-3">
        <ul>
          <li className='pb-2' hidden={!context.LoggedIn}><Link to="/all-campaigns" className='pb-2' style={{color: "black"}}>View Campaigns</Link></li>
          <li className='pb-2' hidden={!context.LoggedIn}><Link to="/tips" className='pb-2' style={{color: "black"}}>Campaign Creators</Link></li>
          <li className='pb-2' hidden={!context.isAdmin}><Link to="/gofundme-analysts" className='pb-2' style={{color: "black"}}>GoFundMe Analysts</Link></li>
          <li className='pb-2'><Link to="/testimonials" className='pb-2' style={{color: "black"}}>Testimonials</Link></li>
          <li className='pb-2'><Link to="/covid-data" className="pb-2" style={{color: "black"}}>COVID-19 Visualization</Link></li>
        </ul>
      
      </bs.Row>
    </bs.Container>    
    )
  }


    
    
