import React, {useContext} from 'react'
import * as bs from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'
import AppContext from "./context";
import CampaignRowCreator from "./campaign-row-creator"


function AllCampaigns() {
      let context = useContext(AppContext) 
       
      console.log(context.campaign)  
      return (
          <bs.Container className='text-left' >
              <bs.Row>
                  <bs.Col className="px-3 py-4" style={{color:"white",backgroundColor: "royalBlue"}}>
                      <h2>All Campaigns</h2>
                  </bs.Col>
              </bs.Row>
              <bs.Col md="12" className="px-3 py-4 border-right" style={{backgroundColor: "white"}}>
                  <bs.Row className='mb-3 font-weight-bold'>
                      <bs.Col md="4">Title</bs.Col>
                      <bs.Col md="2">Goal</bs.Col>
                      <bs.Col md="2">Amount Raised</bs.Col>
                      <bs.Col md="2">Donators</bs.Col>
                      <bs.Col md="2">View Details</bs.Col>
                  </bs.Row>
                  {Object.values(context.campaign).map(n =>{
                      return (
                      <CampaignRowCreator key={n.id} campaign={n.id}/>
                      )
                  })}
              </bs.Col>
              
          </bs.Container>
      )
  }

export default AllCampaigns