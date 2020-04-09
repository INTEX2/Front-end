import React, {useState} from 'react'
import * as bs from 'react-bootstrap'
import AppContext from './context'
import {Link, } from 'react-router-dom'
import CampaignRow from "./campaign-row"
import Pages from './pageNavigation'

// render(){
//     let fileteredCampaign = context.campaign.filter(
//         (campaign)=>{
//             return campaign.name.indexOf(context.state.search) !== -1;
//         })
//    }

function Search(props){
    const context = React.useContext(AppContext)
    let[state, setState] = useState(context.search)
    console.log(state)
    // const item = context.campaign.find(p => p.id === parseInt(props.campaign));
    return (
        <bs.Container fluid className="p-4">
        <bs.Row className="p-0">
        <h1 className="text-center">Find Campaign </h1>
        <bs.InputGroup className="mb-3">
                <bs.FormControl
                placeholder= {state}
                aria-label="Campaign"
                aria-describedby="basic-addon2"
                onChange={(state)=> setState({search: context.updateSearch.bind(state)})
                }
                />
                <bs.InputGroup.Append>
                <bs.Button variant="success" className="fa fa-search search-icon"></bs.Button>
                {/* <Link to={"/searchDetails/"}className="btn btn-light">Search</Link> */}
                </bs.InputGroup.Append>
            </bs.InputGroup>
        </bs.Row>
            <bs.Row noGutters className="rounded-bottom" style={{backgroundColor: 'white'}}>
            {Object.values(context.campaign).map(n =>{
                      return (
                      <li>{n.title}</li>
                    //   <CampaignRow key={n.id} campaign={n.id}/>
                      )
                  })}
            <Pages></Pages>
            </bs.Row>
            
        </bs.Container>

    )  
}

export default Search