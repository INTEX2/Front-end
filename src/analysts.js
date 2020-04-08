import React from 'react'
import * as bs from 'react-bootstrap'
// import { useRouteMatch } from 'react-router-dom'

function Analysts() {
    
    return (
        <bs.Container className='text-left' >
            <bs.Row>
                <bs.Col className="px-3 py-4" style={{color:"white",backgroundColor: "royalBlue"}}>
                    <h2>GoFundMe Management &amp; Analyst Information</h2>
                </bs.Col>
            </bs.Row>
            <bs.Col md="12" className="px-3 py-4 border-right" style={{backgroundColor: "white"}}>
                <p>As campaign creators cannot control features of a campaign such as the number of likes or shares on social media it has, this information for analyzing campaign quality should not be applied to those creating their own campaigns. Rather, they should follow the guidance listed in our Campaign Creators section.</p>
                <p>An in-depth analysis of GoFundMe campaigns was performed to evaluate campaign quality of campaigns related to the coronavirus or similar campaigns. 
                    After exploring the data, we decided to rate the quality of a campaign based on the average donation amount it received. You can view the rated dataset HERE.</p>
            </bs.Col>
        </bs.Container>
    )
}

export default Analysts;