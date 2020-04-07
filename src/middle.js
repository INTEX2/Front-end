import React from 'react';
import * as bs from 'react-bootstrap'
import {Link, } from 'react-router-dom'
import Img1 from './media/your-logo-2.png'
import Img2 from './media/your-logo-3.png'
import Img3 from './media/your-logo-4.png'

function Middle() {
    return (
        <bs.Container>
<bs.Carousel>
  <bs.Carousel.Item>
    <img
      className=""
      src={Img1}
      alt="First slide"
    />
    <Link to={"/search/"}className="btn btn-light">View campaigns</Link>
  </bs.Carousel.Item>
  <bs.Carousel.Item>
    <img
      className="d-block w-100"
      src={Img2}
      alt="Sec slide"
    />
    <Link to={"/predictor/"}className="btn btn-light">Score my campaign</Link>
  </bs.Carousel.Item>
  <bs.Carousel.Item>
    <img
      className="d-block w-100"
      src={Img3}
      alt="Third slide"
    />
    <Link to={"/searchDetails/"}className="btn btn-light">View list of all campaigns</Link>
  </bs.Carousel.Item>
</bs.Carousel>

</bs.Container>
    )  
}

export default Middle;