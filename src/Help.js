import React from 'react'
import * as bs from 'react-bootstrap'

function Help() {
    return (
        <bs.Container className='text-left'>
            <bs.Row>
                <bs.Col className="px-3 py-4" style={{color:"white",backgroundColor: "royalBlue"}}>
                    <h2>Coronavirus Resources</h2>
                </bs.Col>
            </bs.Row>
            <bs.Col md="12" className="px-3 py-4 border-right" style={{backgroundColor: "white"}}>
            <a href="https://ourworldindata.org/coronavirus">Click here to learn more about COVID-19 Data</a>
           </bs.Col>
        </bs.Container>
    )  
}

export default Help