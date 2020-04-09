import React, {useContext} from 'react'
import * as bs from 'react-bootstrap'
import AppContext from './context'  


 function Testimonials () {
    return (
        <bs.Container className='text-left'>
            <bs.Row>
                <bs.Col className="px-3 py-4" style={{color:"white",backgroundColor: "royalBlue"}}>
                    <h2>Testimonials</h2>
                </bs.Col>
            </bs.Row>
                <bs.Col md="12" className="px-3 py-4 border-right" style={{backgroundColor: "white"}}>
                    <p>Please send comments about this website to help@noreply.com.</p>
                    <br/>
                    <p className='font-weight-bold'>Savannah Bird:</p>
                    <p className='font-italic'>"This website is fantastic! I recently used their number of donators predictor to try and make my campaign more popular. I would recommend this website to anyone who is looking to start a GoFundMe campaign whether it's about the coronavirus or not."</p>
                    <p className='font-weight-bold'>Marcus Jin:</p>
                    <p className='font-italic'>"I struggled to know what to put in my campaign title and description to make it appealing on GoFundMe. I tried changing my campaign description a number of times but couldn't get it quite right. When I found this website, I was amazed at all I could find! There are suggested words and word combinations to use in multiple languages. I have seen my donation amount grow as I follow the practices taught on this site."</p>
                    <p className='font-weight-bold'>Dakota Orrock:</p>
                    <p className='font-italic'>"I really wanted to find a coronavirus analytics site that prioritized security, and I found it! By creating an account, I can log in and create a secure connection between the site and me. I also heard that they use Django as a backend, probably using ORM to access their database. This is great because it protects against SQL injection. They also appear to be following requirements as established by GDPR, CCPA, and HIPAA as no information was taken from me without my consent. Wow, what a secure website!"</p>
                    <p className='font-weight-bold'>Taylor Rees:</p>
                    <p className='font-italic'>"I love front-end design and this website is so beautiful. I love the green, blue, and yellow color combination, it looks so happy! I will share this website with all my web design friends to show them how great it is. I hope I can make websites this cool someday!"</p>
                </bs.Col>
        </bs.Container>
    )
}

export default Testimonials
