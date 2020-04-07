import React, { useState } from "react"
import * as bs from 'react-bootstrap'
import Top from './top'
import Left from './left'
import Middle from './middle'
import Right from './right'
import Bottom from './bottom'
import About from './About'
import Help from './Help'
import LogIn from './login'
import './App.scss'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App() {

  return (
    <div className="App">
        <Router>
          <bs.Container fluid className="p-0 min-vh-100 d-flex flex-column" style={{backgroundColor: "gray"}}>
            <bs.Row noGutters className="flex-grow-0 flex-shrink-0 shadow pb-1">
              <bs.Col className="px-3 py-2" style={{ backgroundColor: "black"}}>
                <Top/>
              </bs.Col>
            </bs.Row>
            <bs.Row noGutters className="flex-grow-1">
              <bs.Col md="2" className="px-3 py-4 shadow" style={{backgroundColor: "white"}}>
                <Left/>
              </bs.Col>
              <bs.Col md="8"  className= "border-left border-right border-dark" style={{backgroundColor: '#D3D3D3'}}>
                <Switch>
                  <Route path="/about" component={About}/>
                  <Route path="/help" component={Help}/>
                  <Route path="/login" component={LogIn}/>
                  <Route path="/" component={Middle}/>
                </Switch> 
              </bs.Col>
              <bs.Col md="2" className="px-3 py-2" style={{ backgroundColor: "white"}}>
                <Right/>
              </bs.Col>
            </bs.Row>
            <bs.Row noGutters className="flex-grow-0 flex-shrink-0 pt-1">
              <bs.Col className="px-3 py-2" style={{ backgroundColor: "black"}}>
                <Bottom/>
              </bs.Col>
            </bs.Row>
          </bs.Container>
        </Router>
    </div>
  )
}

export default App
