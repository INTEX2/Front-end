import React, {useContext} from 'react'
import * as bs from 'react-bootstrap'
// import { useRouteMatch } from 'react-router-dom'
import AppContext from './context'
import CampaignRow from './campaign-row'

function Quality() {
    let context = useContext(AppContext)    
    return (
        <bs.Container className='text-left' >
            <bs.Row>
                <bs.Col className="px-3 py-4" style={{color:"white",backgroundColor: "royalBlue"}}>
                    <h2>GoFundMe Management &amp; Analyst Campaign Ratings</h2>
                </bs.Col>
            </bs.Row>
            <bs.Row className='mb-3 font-weight-bold'>
                <bs.Col md="4">Campaign Title</bs.Col>
                <bs.Col md="2">Goal</bs.Col>
                <bs.Col md="2">Amount Raised</bs.Col>
                <bs.Col md="2">Donators</bs.Col>
                <bs.Col md="2">View Details</bs.Col>
            </bs.Row>
            {Object.values(context.campaign).map((id) =>{
                return (
                   <CampaignRow key={id} campaign={id}/>
                )
            })}
            
        </bs.Container>
    )
}

export default Quality;