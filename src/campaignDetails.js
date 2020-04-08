import React, { useState, useContext } from 'react'
import './App.scss';
import * as bs from 'react-bootstrap'
import { useParams, } from 'react-router-dom'
import AppContext from './context';

function CampaignDetails(props){
    const context = useContext(AppContext)
    let {id} = useParams()
    const camp = context.campaign.find(camp => {
        return(camp.id.toString() === id)})
    // let[hidden, setHidden] = useState("-1")
    if(!camp){
        return(<h2>Campaign does not exist</h2>)
    }
    else{
    return (
        <bs.Container >
            <div>
                <h1>{camp.title}</h1>
                <h3 className="float-left">${camp.goal}</h3>
                <div className="float-right" >
                    {/* <bs.Image  variant="top" src= {require('./camps/'+ camp.filename +'.png') } className="img-thumbnail" style={{height:"300px" , width:"300px", top:0}} alt="camp"/> */}
                </div>
                <p className="float-bottom">{camp.description}</p>
            </div>
            
        </bs.Container>    
        )
    }
}

export default CampaignDetails