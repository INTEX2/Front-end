import React, { useState, useContext } from 'react'
import './App.scss';
import * as bs from 'react-bootstrap'
import { useParams, } from 'react-router-dom'
import AppContext from './context';

function CampaignDetails(props){
    let context = useContext(AppContext)
    let {id} = useParams()
    const item = context.campaign.find(prod => {
        return(prod.id.toString() === id)})
    console.log(item)
    // if(!camp){
    //     return(<h2>Campaign does not exist</h2>)
    // }
    // else{
    return (
        <bs.Container >
            <div>
                <h1>{item.title}</h1>
                <h3 className="float-left">${item.goal}</h3>
                <div className="float-right" >
                    {/* <bs.Image  variant="top" src= {require('./camps/'+ camp.filename +'.png') } className="img-thumbnail" style={{height:"300px" , width:"300px", top:0}} alt="camp"/> */}
                </div>
                <p className="float-bottom">{item.description}</p>
            </div>
            
        </bs.Container>    
        )
    }
//}

export default CampaignDetails