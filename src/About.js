import React from 'react';
import * as bs from 'react-bootstrap'
import {Link, } from 'react-router-dom'
import Img1 from './media/your-logo-2.png'
import Img2 from './media/your-logo-3.png'
import Img3 from './media/your-logo-4.png'

function About() {
    return (
        <bs.Container>
<bs.Carousel>
  <bs.Carousel.Item>
    <img
      className=""
      src={Img1}
      alt="First slide"
    />
  </bs.Carousel.Item>
  <bs.Carousel.Item>
    <img
      className="d-block w-100"
      src={Img2}
      alt="Sec slide"
    />
  </bs.Carousel.Item>
  <bs.Carousel.Item>
    <img
      className="d-block w-100"
      src={Img3}
      alt="Third slide"
    />
  </bs.Carousel.Item>
</bs.Carousel>
<Link to={"/search/"}className="btn btn-light">How can I improve my campaign?</Link>
</bs.Container>
    )  
}

export default About