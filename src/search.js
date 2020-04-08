import React from 'react'
import * as bs from 'react-bootstrap'
import AppContext from './context'
import {Link, } from 'react-router-dom'

function Search(){
    const context = React.useContext(AppContext)
    return (
        <bs.Container fluid className="p-4">
            <bs.Row noGutters className="rounded-top" style={{backgroundColor: 'white'}}>
                <bs.Col>
                    <h1>Search</h1>
                </bs.Col>
            </bs.Row>
            <bs.Row noGutters className="rounded-bottom" style={{backgroundColor: 'white'}}>
                <bs.Col>                
                <input className="mb-3" value="search"
                    onChange={context.updateSearch.bind(context)}>
                    <bs.FormControl
                    placeholder="Enter Campaign"
                    aria-label="Campaign"
                    aria-describedby="basic-addon2"
                    />
                    <bs.InputGroup.Append>
                    <Link to={"/searchDetails/"}className="btn btn-light">Campaign Details</Link>
                    </bs.InputGroup.Append>
                </input>
                <div>
                    <ul>
                    {context.campaign.map((campaign)=>{
                        return (
                        <Link key={campaign.campaign_id} to={`/campaign/${campaign.title}`} className="nav-link"></Link>
                            )}
                        )
                     }
                    </ul>
                </div>
                
                </bs.Col>
            </bs.Row>
        </bs.Container>
    )  
}

export default Search