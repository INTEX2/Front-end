// import React, {useContext} from 'react'
import React from 'react'
import * as bs from 'react-bootstrap'
import { useRouteMatch, Link } from 'react-router-dom'
// import AppContext from './context'

function Tips() {
    return (
        <bs.Container className="p-4" style={{fontFamily: "helvetica", fontWeight:"bold"}}>
           
           <bs.Jumbotron>
                <h1 >Help your campaign stand out from the noise</h1>
                <p>
                    Our team has run powerful data analytics on thousands of GoFundMe campaigns.
                    Our research has helped us discover metrics that define successful 
                </p>
                <bs.Accordion>
                    <bs.Card>
                        <bs.Card.Header>
                        <bs.Accordion.Toggle as={bs.Button} variant="link" eventKey="0">
                            English Speaking Countries
                        </bs.Accordion.Toggle>
                        </bs.Card.Header>
                        <bs.Accordion.Collapse eventKey="0">
                        <bs.Card.Body>
                            <h5>Key words</h5>
                            <ul>
                                <li>Coronavirus</li> 
                                <li>Covid-19</li>
                                <li>Conquering</li>
                                <li> Relief</li>
                                <li>Support</li>
                                <li>Help</li>
                                <li>Relief</li>
                                <li>Fund</li>
                                <li>Survivor</li>
                                <li>Save</li>
                                <li>Battle</li>
                                <li>HelpingHands</li>
                            </ul>
                            <h5>Successful Campaigns</h5>
                            <ul>
                            <li><a href="https://www.gofundme.com/f/xpcwgy-conquering-covid19">Conquering Covid19</a></li>
                            <li><a href="https://www.gofundme.com/f/for-artists">For Artists</a></li>
                            <li><a href="https://www.gofundme.com/f/helpinghands-for-covid19">HelpingHands for Covid19</a></li>
                            </ul>
                        </bs.Card.Body>
                        </bs.Accordion.Collapse>
                    </bs.Card>
                    <bs.Card>
                        <bs.Card.Header>
                        <bs.Accordion.Toggle as={bs.Button} variant="link" eventKey="1">
                            Italian speaking countries 
                        </bs.Accordion.Toggle>
                        </bs.Card.Header>
                        <bs.Accordion.Collapse eventKey="1">
                        <bs.Card.Body>
                            <h5>Key words</h5>
                            <ul>
                                <li>Covid-19</li> 
                                <li>sosteniamo</li>
                                <li>Supporto</li>
                                <li>Aiuto</li>
                                <li>Diamo</li>
                                <li>Emergenza</li>
                            </ul>
                            <h5>Successful Campaigns</h5>
                            <ul>
                            <li><a href="https://www.gofundme.com/f/raccolta-fondi-per-il-cotugno-di-napolicovid19">Raccolta fondi per il cotugno di napolicovid19s</a></li>
                            <li><a href="https://www.gofundme.com/f/aiutiamo-ospedale-niguarda-covid19">Aiutiamo ospedale niguarda Covid19</a></li>
                            </ul>
                        </bs.Card.Body>
                        </bs.Accordion.Collapse>
                    </bs.Card>
                    <bs.Card>
                        <bs.Card.Header>
                        <bs.Accordion.Toggle as={bs.Button} variant="link" eventKey="2">
                            German Speaking Countries
                        </bs.Accordion.Toggle>
                        </bs.Card.Header>
                        <bs.Accordion.Collapse eventKey="2">
                        <bs.Card.Body>
                            <h5>Key words</h5>
                            <ul>
                                <li>Soforthilfe</li> 
                                <li>Corona Virus</li>
                                <li>Unterstützung</li>
                                <li> Hilfe</li>
                                <li>Überlebender & Überlebende</li>
                                <li>erobern</li>
                            </ul>
                            <h5>Successful Campaigns</h5>
                            <ul>
                            <li><a href="https://www.gofundme.com/f/DCGCoronaVirusSoforthilfeWuhan">DCGCoronaVirusSoforthilfeWuhan</a></li>
                            </ul>
                        </bs.Card.Body>
                        </bs.Accordion.Collapse>
                    </bs.Card>
                </bs.Accordion>
                <br></br>
                <p>
                    <Link to="./allCampaigns" className="btn btn-primary">See full list of campaigns</Link>
                </p>
            </bs.Jumbotron>
            <bs.Row>
            <bs.Col className="p4">
            <bs.Row>
            <h1>Suggestion on how to write a successful story in the description</h1>
            <bs.Row>
            <h3>Break it up</h3>
            <bs.Row>
                <ul>
                    <li>Have a clear introduction of who or what you are raising money for.</li>
                    <li>A clear explanation of your cause</li>
                    <li>The rundown on how the money will be spent</li>
                    <li>Make sure to write the importance of the cause to you</li>
                    <li>Express your appreciation for any potential donations</li>
                </ul>
            </bs.Row>
            </bs.Row>
            <h3>Use underline, bold, italic headlines</h3>
            <bs.Row>
                <ul>
                    <li>Highlight the words with underline, bold, italic headline to drive your most important points home.</li>
                    <li>Use headlines like “The Costs”, “How You Can Help”, “The Backstory”, etc. You can use ‘control’ key + ‘b’ for bold letters, ‘control’ key + ‘u’ for underlined letters, and ‘control’ key + ‘i’ for italic letters.</li>
                </ul>
            </bs.Row>
            <h3>Add photos or videos throughout your story</h3>
            <bs.Row>
                <ul>
                    <li>Use images or videos that are clear and bright to help you tell the story</li>
                    <li>You can add images or videos in ‘Edit,’ and place your cursor where you want
                        the image or video to appear. Then, press the "Photo/Video" button.</li>
                </ul>
            </bs.Row>
            <h3>Proofread everything you write</h3>
            <bs.Row>
                <ul>
                    <li>It is possible to make a typo here and there. However, having a typo-free post promotes legitimacy of the campaign hence it will help building credibility of the campaign</li>
                </ul>
            </bs.Row>
            </bs.Row>
            </bs.Col>
            <bs.Col md="4" p="2">
            <bs.Row>
            <h1>What else can I do to make my campaign more successful?</h1>
            <ul>
                <li>Post your campaign on Facebook and other social media accounts.</li>
                <li>Share your post with friends and family on Facebook. (GoFundMe promotes campaigns
                    that have a quick take off. The earlier and more you share on social media, the more traffic your campaigns attract, in return, GoFundMe algorithms would help accelerate your campaign)</li>
                <li>More personal the outreaches are, more likely the people you are asking would donate. Using email templates to make the most out of your outreach</li>
                <li>Make sure to post frequent updates. Donators appreciate receiving updates from fundraiser. It is the best way to continue engaging the people who want to help you on GoFundMe.</li>
            </ul>
            </bs.Row>
            </bs.Col>
            </bs.Row>
        </bs.Container>
    )
}

export default Tips;