import React, {useContext} from 'react'
import * as bs from 'react-bootstrap'
// import { useRouteMatch } from 'react-router-dom'
import AppContext from './context'
import {Link} from "react-router-dom"
import CampaignRow from './campaign-row'


function Quality() {
    let context = useContext(AppContext) 
    if (!context.isAdmin){
        return(
            <bs.Container className='text-left' >
              <bs.Row>
                  <bs.Col className="px-3 py-4" style={{color:"white",backgroundColor: "royalBlue"}}>
                      <h2>GoFundMe Management &amp; Analyst Campaign Ratings</h2>
                  </bs.Col>
              </bs.Row>
              <bs.Col md="12" className="px-3 py-4 border-right" style={{backgroundColor: "white"}}>
                  <h5>
                      If the page doesn't load after a couple of seconds you might not be logged in or have the right to view it... click <Link to="/login" className="">here</Link> to sign in!
                  </h5>
              </bs.Col> 
          </bs.Container>
        )
    } 
    console.log(context.campaign)  
    return (
        <bs.Container className='text-left' >
            <bs.Row>
                <bs.Col className="px-3 py-4" style={{color:"white",backgroundColor: "royalBlue"}}>
                    <h2>GoFundMe Management &amp; Analyst Campaign Ratings</h2>
                </bs.Col>
            </bs.Row>
            <bs.Col md="12" className="px-3 py-4 border-right" style={{backgroundColor: "white"}}>
                <bs.Row className='mb-3 font-weight-bold'>
                    <bs.Col md="4">Title</bs.Col>
                    <bs.Col md="2">Goal</bs.Col>
                    <bs.Col md="2">Amount Raised</bs.Col>
                    <bs.Col md="2">Quality</bs.Col>
                    <bs.Col md="2">View Details</bs.Col>
                </bs.Row>
                {Object.values(context.campaign).map(n =>{
                    return (
                    <CampaignRow key={n.id} campaign={n.id}/>
                    )
                })}
            </bs.Col>
            
        </bs.Container>
    )
}

export default Quality;