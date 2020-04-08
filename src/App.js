import React, { useState } from "react"
import * as bs from 'react-bootstrap'
import Top from './top'
import Left from './left'
import Middle from './middle'
import Right from './right'
import Bottom from './bottom'
import About from './About'
import Help from './Help'
import Covid from './covidData'
import Search from './search'
import Predictor from './predictor'
import SearchDetails from './searchDetails'
import Tips from './tips'
import LogIn from './login'
import Calculaitons from './calculations'
import Donations from './calculation-donation'
import Analysts from './analysts'
import Quality from './quality'
import './App.scss'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App() {

  return (
      <Router>
        <bs.Container fluid="true" className='p-0 min-vh-100 d-flex flex-column' style={{backgroundColor: "gray"}}>
          <bs.Row noGutters>
            <bs.Col className="shadow px-3 py-2 pb-4 top-bg" fluid="true">
              <Top/>
            </bs.Col>
          </bs.Row>
          <bs.Row noGutters className="flex-grow-1">
            <bs.Col md="2" className=" left-bg" fluid="true">
              <Left/>
            </bs.Col>
            <bs.Col md="8"  className= " middle-bg" >
              <Switch>
                <Route path="/about" component={About}/>
                <Route path="/resources" component={Help}/>
                <Route path="/search" component={Search}/>
                <Route path="/searchDetails" component={SearchDetails}/>
                <Route path="/predictor" component={Predictor}/>
                <Route path="/covid-data" component={Covid}/>
                <Route path="/login" component={LogIn}/>
                <Route path="/tips" component={Tips}/>
                <Route path="/calculations" component={Calculaitons}/>
                <Route path="/donation-calculation" component={Donations}/>
                <Route path="/gofundme-analysts" component={Analysts}/>
                <Route path="/testimonials" component={Donations}/>
                <Route path="/quality" component={Quality}/>
                <Route path="/" component={Middle}/>
              </Switch> 
            </bs.Col>
            <bs.Col md="2" className="px-3 py-2 right-bg">
              <Right/>
            </bs.Col>
          </bs.Row>
          <bs.Row noGutters className="flex-grow-0 flex-shrink-0">
            <bs.Col className="px-3 py-2 bottom-bg">
              <Bottom/>
            </bs.Col>
          </bs.Row>
        </bs.Container>
      </Router>
  )
}

export default App
