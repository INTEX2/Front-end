import React, { useState, useContext } from 'react'
import './App.scss';
import * as bs from 'react-bootstrap'
import { useParams, Link} from 'react-router-dom'
import AppContext from './context';

function CampaignDetails(props){
    let context = useContext(AppContext)
    let {id} = useParams()
    const item = context.campaign.find(prod => {
        return(prod.id.toString() === id)})

    return (
        <bs.Container className='text-left'>
            <bs.Row>
                <bs.Col className="px-3 py-4" style={{color:"white",backgroundColor: "royalBlue"}}>
                    <h2>{item.title}</h2>
                </bs.Col>
            </bs.Row>
                <bs.Col md="12" className="px-3 py-4 border-right" style={{backgroundColor: "white"}}>
                    <bs.Row>
                        <bs.Col md='6'>
                            <p><span className='font-weight-bold'>Goal:</span> ${item.goal}</p>
                        </bs.Col>
                        <bs.Col md='6'>
                            <p><span className='font-weight-bold'>Current Amount:</span> ${item.current_amount}</p>
                        </bs.Col>
                    </bs.Row>
                    <p><span className='font-weight-bold'>Description:</span> {item.description}</p>
                    <bs.Row>
                        <bs.Col md='6'>
                            <p><span className='font-weight-bold'>Creator:</span> {item.user_first_name} {item.user_last_name}</p>
                            <p><span className='font-weight-bold'>Auto-post to Facebook:</span> {item.auto_fb_post_mode}</p>
                            <p><span className='font-weight-bold'>Charity?</span> {item.is_charity}</p>
                            <p><span className='font-weight-bold'>Charity validated by GoFundMe?</span> {item.charity_valid}</p>
                        </bs.Col>
                        <bs.Col md='6'>
                            <p><span className='font-weight-bold'>Donators:</span> {item.donators}</p>
                            <p><span className='font-weight-bold'>Social Media Shares:</span> {item.social_share_total}</p>
                            <p><span className='font-weight-bold'>Beneficiary?</span> {item.has_beneficiary}</p>
                            <p><span className='font-weight-bold'>Zipcode:</span> {item.location_zip}</p>
                        </bs.Col>
                    </bs.Row>
                    <br/>
                    <center><a href={item.url}><bs.Button type="submit" className='w-50 success' block md='12'>
                            Visit on GoFundMe 
                        </bs.Button></a></center><br/>
                </bs.Col>            
        </bs.Container>    
        )
}

export default CampaignDetails