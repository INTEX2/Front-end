import React from 'react'
import * as bs from 'react-bootstrap'
import {Link, } from 'react-router-dom'

function Help() {
    return (
        <bs.Container fluid className="p-4">
            <bs.Row noGutters className="rounded-top" style={{backgroundColor: 'white'}}>
                <bs.Col>
                    <h1>Help</h1>
                </bs.Col>
            </bs.Row>
            <bs.Row noGutters className="rounded-bottom" style={{backgroundColor: 'white'}}>
                <bs.Col>
                <p>
                    Lorem ipsum dolor sit amet, vis ex assum dicta comprehensam, unum eius incorrupte ei nec. Qui ei lorem fierent sapientem. Qui quis ferri nusquam eu. Eu eos labore invenire maiestatis, eum alii probatus an, at est vivendo reprimique reprehendunt. Qui an aeque prodesset. Est movet suscipit at, modus appareat facilisis te eum, quo invidunt electram expetenda te.
                </p>
                <a href="https://ourworldindata.org/coronavirus">Click here to learn more about COVID-19 Data</a>
                </bs.Col>
            </bs.Row>
        </bs.Container>
    )  
}

export default Help