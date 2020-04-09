import React from 'react'
import * as bs from 'react-bootstrap'
import {Link} from "react-router-dom"
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
                    After exploring the data, we decided to rate the quality of a campaign based on the average donation amount it received. The campaigns were given a quality rating of Low, Mid-Low, Mid-High, or High. Summaries of these groups of campaigns can be found below.</p><br/>
                <center><Link to='/quality'><bs.Button type="submit" className='w-50 success' block md='12'>
                    View Rated Campaigns
                </bs.Button></Link></center><br/>
                <br/><h2>Rating Averages</h2><br/>
                <bs.Row>
                    <bs.Col md='6'>
                        <bs.Card >
                            <bs.Card.Header className='text-left font-weight-bold'>High</bs.Card.Header>
                            <bs.Card.Body>
                                <bs.Row><bs.Col md='7'>Goal:</bs.Col><bs.Col md='5'>$86,144.50</bs.Col></bs.Row>
                                <bs.Row><bs.Col md='7'>Current Amount:</bs.Col><bs.Col md='5'>$5,647.04</bs.Col></bs.Row>
                                <bs.Row><bs.Col md='7'>Social Media Shares:</bs.Col><bs.Col md='5'>142.51</bs.Col></bs.Row>
                                <bs.Row><bs.Col md='7'>Number of Donators:</bs.Col><bs.Col md='5'>35.00</bs.Col></bs.Row>
                                <bs.Row><bs.Col md='7'>Campaign Hearts:</bs.Col><bs.Col md='5'>34.189</bs.Col></bs.Row>
                                <bs.Row><bs.Col md='7'>Days between Creation and Launch:</bs.Col><bs.Col md='5'>0.86</bs.Col></bs.Row>
                            </bs.Card.Body>
                        </bs.Card>
                    </bs.Col>
                    <bs.Col md='6'>
                        <bs.Card >
                            <bs.Card.Header className='text-left font-weight-bold'>Mid-High</bs.Card.Header>
                            <bs.Card.Body>
                                <bs.Row><bs.Col md='7'>Goal:</bs.Col><bs.Col md='5'>$223,341.00</bs.Col></bs.Row>
                                <bs.Row><bs.Col md='7'>Current Amount:</bs.Col><bs.Col md='5'>$2,886.32</bs.Col></bs.Row>
                                <bs.Row><bs.Col md='7'>Social Media Shares:</bs.Col><bs.Col md='5'>225.43</bs.Col></bs.Row>
                                <bs.Row><bs.Col md='7'>Number of Donators:</bs.Col><bs.Col md='5'>51.24</bs.Col></bs.Row>
                                <bs.Row><bs.Col md='7'>Campaign Hearts:</bs.Col><bs.Col md='5'>50.0145</bs.Col></bs.Row>
                                <bs.Row><bs.Col md='7'>Days between Creation and Launch:</bs.Col><bs.Col md='5'>0.84</bs.Col></bs.Row>
                            </bs.Card.Body>
                        </bs.Card>
                    </bs.Col>
                </bs.Row>
                <br/>
                <bs.Row>
                    <bs.Col md='6'>
                        <bs.Card >
                            <bs.Card.Header className='text-left font-weight-bold'>Mid-Low</bs.Card.Header>
                            <bs.Card.Body>
                                <bs.Row><bs.Col md='7'>Goal:</bs.Col><bs.Col md='5'>$59,160.80</bs.Col></bs.Row>
                                <bs.Row><bs.Col md='7'>Current Amount:</bs.Col><bs.Col md='5'>$2,862.46</bs.Col></bs.Row>
                                <bs.Row><bs.Col md='7'>Social Media Shares:</bs.Col><bs.Col md='5'>303.56</bs.Col></bs.Row>
                                <bs.Row><bs.Col md='7'>Number of Donators:</bs.Col><bs.Col md='5'>84.27</bs.Col></bs.Row>
                                <bs.Row><bs.Col md='7'>Campaign Hearts:</bs.Col><bs.Col md='5'>82.53</bs.Col></bs.Row>
                                <bs.Row><bs.Col md='7'>Days between Creation and Launch:</bs.Col><bs.Col md='5'>0.74</bs.Col></bs.Row>
                            </bs.Card.Body>
                        </bs.Card>
                    </bs.Col>
                    <bs.Col md='6'>
                        <bs.Card >
                            <bs.Card.Header className='text-left font-weight-bold'>Low</bs.Card.Header>
                            <bs.Card.Body>
                                <bs.Row><bs.Col md='7'>Goal:</bs.Col><bs.Col md='5'>$4,180,637.02</bs.Col></bs.Row>
                                <bs.Row><bs.Col md='7'>Current Amount:</bs.Col><bs.Col md='5'>$544.55</bs.Col></bs.Row>
                                <bs.Row><bs.Col md='7'>Social Media Shares:</bs.Col><bs.Col md='5'>74.30</bs.Col></bs.Row>
                                <bs.Row><bs.Col md='7'>Number of Donators:</bs.Col><bs.Col md='5'>27.61</bs.Col></bs.Row>
                                <bs.Row><bs.Col md='7'>Campaign Hearts:</bs.Col><bs.Col md='5'>27.17</bs.Col></bs.Row>
                                <bs.Row><bs.Col md='7'>Days between Creation and Launch:</bs.Col><bs.Col md='5'>1.67</bs.Col></bs.Row>
                            </bs.Card.Body>
                        </bs.Card>
                    </bs.Col>
                </bs.Row>
            </bs.Col>
        </bs.Container>
    )
}

export default Analysts;