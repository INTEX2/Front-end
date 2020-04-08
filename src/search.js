import React from 'react'
import * as bs from 'react-bootstrap'
import AppContext from './context'
import {Link, } from 'react-router-dom'
import CampaignRow from "./campaign-row"

function Search(props){
    const context = React.useContext(AppContext)
    let fileteredCampaign = context.state.campaign.filter(
        (campaign)=> {
            return campaign.title.indexOf(context.state.search) !== -1;
        })
   // const item = context.campaign.find(p => p.id === parseInt(props.campaign));
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
                    {fileteredCampaign.map((campaign)=>{
                        return <CampaignRow campaign={campaign}
                        key={campaign.campaign_id}
                        ></CampaignRow>
                    })}
                    </ul>
                </div>
                
                </bs.Col>
            </bs.Row>
        </bs.Container>
    )  
}

export default Search