import React from 'react';
import * as bs from 'react-bootstrap'
//import {Link, } from 'react-router-dom'

function About() {
    return (
        <bs.Container className='text-left'>
            <bs.Row>
                <bs.Col className="px-3 py-4" style={{color:"white",backgroundColor: "royalBlue"}}>
                    <h2>Improve your GoFundME Campaign</h2>
                </bs.Col>
            </bs.Row>
            <bs.Col md="12" className="px-3 py-4 border-right" style={{backgroundColor: "white"}}>
                <p>Help your campaign stand out from the crowd and raise money for a good cause. This website helps teach you about creating effective coronavirus campaigns to raise money for your cause. Our two primary objectives are:</p>
                <ol>
                    <li>
                        Assist campaign creators in knowing what word combinations and campaign characteristics to include in their fund.
                    </li>
                    <li>
                        Demonstrate to GoFundMe analyists what makes a campaign profitable and quality
                    </li>
                </ol>
                <p>We hope that by providing these things, as well as references to other coronavirus resources, that those truly in need of assistance will have their needs met. For many, this is a time of great trial as health declines and people lose their jobs, so we aim to assist as many people as need help.</p>
                <p>For more information, contact us as (123) 456-7890 or help@noreply.com</p>
           </bs.Col>
        </bs.Container>
    )  
}

export default About