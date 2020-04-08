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
                <p>According to the World Health Organization (WHO) 
                    <span className='font-italic'>"Coronaviruses are a large family of viruses which may cause illness in animals or humans.  In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19."</span>
                </p>
                <p>
                    The following are resources with current updates and information about the coronavirus. 
                </p>
                <ul>
                    <li><a href="https://ourworldindata.org/coronavirus">Our World in Data</a> - Coronavirus statistics and research</li>
                    <li><a href="https://coronavirus.jhu.edu/map.html">John's Hopkins University of Medicine</a> - World map with case reports and death tolls</li>
                    <li><a href="https://www.domo.com/coronavirus-tracking">DOMO</a> - Coronavirus data visualizations</li>
                    <li><a href="https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd">World Health Organization</a> - World map with case reports and death tolls</li>
                    <li><a href="https://www.charitywatch.org/charity-donating-articles/crowdfunding-popularity-continues-to-soar-despite-risks-to-donors">Charity Watch</a> - Information about avoiding farudulent coronavirus campaigns</li>

                </ul>
                
           </bs.Col>
        </bs.Container>
    )  
}

export default Help