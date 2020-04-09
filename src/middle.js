import React from 'react';
import * as bs from 'react-bootstrap'
import {Link, } from 'react-router-dom'
import Img1 from './media/your-logo-2.png'
import Img2 from './media/your-logo-3.png'
import Img3 from './media/your-logo-4.png'

function Middle() {
    return (
        <bs.Container>
          <bs.Carousel >
            <bs.Carousel.Item style={{backgroundColor: "white"}}>
              <br/>
              <br/>
              <br/>
              <br/>
              <bs.Row>
                <bs.Col className="px-3 py-4" style={{color:"white",backgroundColor: "royalBlue"}}>
                    <h2 className='px-3 text-center'>Welcome to COVID-19 Campaign Analytics</h2>
                </bs.Col>
            </bs.Row>
            <br/>
            <br/>
            <p className='text-center font-italic'>Providing you resources to create the highest-quality GoFundMe campaigns.</p>
            <br/>
            <center><Link to='/about/'><bs.Button type="submit" className='w-25 success'  md='6'>Learn more</bs.Button></Link><span>        </span>
            <Link to='/testimonials/'><bs.Button type="submit" className='w-25 success'  md='6'>Testimonials</bs.Button></Link></center><br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </bs.Carousel.Item>
            <bs.Carousel.Item style={{backgroundColor: "white"}}>
              <center>
              <img
                className="d-block w-75"
                src={Img1}
                alt="Second slide"
              />
              <br/>
              <center><Link to='/all-campaigns/'><bs.Button type="submit" className='w-50 success' block md='12'>View Campaigns</bs.Button></Link></center><br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              </center>
            </bs.Carousel.Item>
            <bs.Carousel.Item style={{backgroundColor: "white"}}>
              <center>
              <br/>
              <br/>
              <img
                className="ml-5 d-block w-130"
                src={Img2}
                alt="Third slide"
              />
              <br/>
              <center><Link to='/calculations/'><bs.Button type="submit" className='w-50 success' block md='12'>Predict Number of Donators</bs.Button></Link></center><br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              </center>
            </bs.Carousel.Item>
          </bs.Carousel>
        </bs.Container>
    )  
}

export default Middle;