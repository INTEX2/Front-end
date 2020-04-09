import React, {useContext} from 'react'
// import React from 'react'
import * as bs from 'react-bootstrap'
import { useRouteMatch, Link } from 'react-router-dom'
import AppContext from './context'

function Tips() {
    let context = useContext(AppContext) 
    if (!context.LoggedIn){
        return(
            <bs.Container className='text-left' >
              <bs.Row>
                  <bs.Col className="px-3 py-4" style={{color:"white",backgroundColor: "royalBlue"}}>
                      <h2>Tips for Campaign Creators</h2>
                  </bs.Col>
              </bs.Row>
              <bs.Col md="12" className="px-3 py-4 border-right" style={{backgroundColor: "white"}}>
                  <h5>
                      If the page doesn't load after a couple of seconds you might need to log in... click <Link to="/login" className="">here</Link> to sign in!
                  </h5>
              </bs.Col> 
          </bs.Container>
        )
    }
    return (
        <bs.Container  style={{fontFamily: "helvetica"}}>
           <bs.Row>
                <bs.Col className="px-3 py-4" style={{color:"white",backgroundColor: "royalBlue"}}>
                    <h2>Tips for Campaign Creators</h2>
                </bs.Col>
            </bs.Row>
            <bs.Col md="12" className="px-3 py-4 border-right" style={{backgroundColor: "white"}}>
            <br/>
            <h1 className='text-center'>Predict Campaign Success</h1>
            <p>Want to see how your campaign compares with others? Predict your campaign's number of donators or average donation amount.</p>
            <center><Link to='/calculations/'><bs.Button type="submit" className='w-40 success'  md='6'>Predict Donators</bs.Button></Link><span>        </span>
            <Link to='/donation-calculation/'><bs.Button type="submit" className='w-40 success'  md='6'>Predict Average Donation</bs.Button></Link></center><br/>
            <br/><br/>
            <h1 className='text-center'>Use the Right Words</h1>
                <p>
                    Help your campaign stand out from the noise with powerful text analytics.
                    Our research using thousands of GoFundMe campaigns has helped us discover key words and word combinations that lead to successful campaigns. By clicking your language of choice below, you will see what words you should include in your coronavirus campaign.
                </p>
                <br/>
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
                                <li>Überlebender &amp; Überlebende</li>
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
                    <center><Link to="./all-campaigns" className="btn btn-primary w-50"  block md='12'>View all campaigns</Link></center>
                </p>

            
            <br/><br/>
            <h1 className='text-center'>Tell a Story in the Description</h1>
            <p className='font-italic'>Grab your reader's attention by telling a story. By doing so, the donator will feel an emotional connection with your cause and a greater desire to help out. To do so...</p>
            <h3>Break it up</h3>
                <ul>
                    <li>Have a clear introduction of who or what you are raising money for.</li>
                    <li>A clear explanation of your cause</li>
                    <li>The rundown on how the money will be spent</li>
                    <li>Make sure to write the importance of the cause to you</li>
                    <li>Express your appreciation for any potential donations</li>
                </ul>
            <h3>Use underline, bold, italic headlines</h3>
                <ul>
                    <li>Highlight the words with underline, bold, italic headline to drive your most important points home.</li>
                    <li>Use headlines like “The Costs”, “How You Can Help”, “The Backstory”, etc. You can use ‘control’ key + ‘b’ for bold letters, ‘control’ key + ‘u’ for underlined letters, and ‘control’ key + ‘i’ for italic letters.</li>
                </ul>
            <h3>Add photos or videos</h3>
                <ul>
                    <li>Use images or videos that are clear and bright to help you tell the story</li>
                    <li>You can add images or videos in ‘Edit,’ and place your cursor where you want
                        the image or video to appear. Then, press the "Photo/Video" button.</li>
                </ul>
            <h3>Proofread what you write</h3>
                <ul>
                    <li>It is possible to make a typo here and there. Having a typo-free post promotes legitimacy of the campaign hence it will help building credibility of the campaign</li>
                </ul>
            <br/><br/>
            <h1 className='text-center'>Other Tips for Success</h1>
            <ul>
                <li>Post your campaign on Facebook and other social media accounts.</li>
                <li>Share your post with friends and family on Facebook. (GoFundMe promotes campaigns
                    that have a quick take off. The earlier and more you share on social media, the more traffic your campaigns attract, in return, GoFundMe algorithms would help accelerate your campaign)</li>
                <li>More personal the outreaches are, more likely the people you are asking would donate. Using email templates to make the most out of your outreach</li>
                <li>Make sure to post frequent updates. Donators appreciate receiving updates from fundraiser. It is the best way to continue engaging the people who want to help you on GoFundMe.</li>
            </ul>
            </bs.Col>
       </bs.Container>
    )
}

export default Tips;