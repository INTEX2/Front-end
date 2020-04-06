import React from 'react'
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
import SearchDetails from './searchDetails'
import './App.scss'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <bs.Container fluid className="p-0 min-vh-100 d-flex flex-column" style={{backgroundColor: "gray"}}>
          <bs.Row noGutters className="">
            <bs.Col className="px-3 py-2 top-bg">
              <Top/>
            </bs.Col>
          </bs.Row>
          <bs.Row noGutters className="flex-grow-1">
            <bs.Col md="2" className=" left-bg">
              <Left/>
            </bs.Col>
            <bs.Col md="8"  className= " middle-bg" >
              <Switch>
                <Route path="/about" component={About}/>
                <Route path="/help" component={Help}/>
                <Route path="/search" component={Search}/>
                <Route path="/searchDetails" component={SearchDetails}/>
                <Route path="/covidData" component={Covid}/>
                <Route path="/" component={Middle}/>
              </Switch> 
            </bs.Col>
            <bs.Col md="2" className="px-3 py-2 right-bg">
              <Right/>
            </bs.Col>
          </bs.Row>
          <bs.Row noGutters className="flex-grow-0 flex-shrink-0 pt-1">
            <bs.Col className="px-3 py-2 bottom-bg">
              <Bottom/>
            </bs.Col>
          </bs.Row>
        </bs.Container>
      </Router>
    </div>
  )
}

export default App
