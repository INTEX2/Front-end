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
    // let filteredCampaign = context.campaign.filter(
    //     (campaign) => {
    //       //Use includes looks cleaner and should be easier to remember.
    //       //return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    //       return campaign.name.toLowerCase().includes(state.search.toLowerCase());
    //     }
    //   );
    const [searchWord, setSearchWord] = useState("")
    console.log('searchWord', searchWord)
    console.log('typeof context.campaign',typeof context.campaign)
    // console.log('Object.values(state.products)',Object.values(context.campaign))
    let newDict = {}
        if (searchWord !== ""){
            newDict = Object.values(context.campaign).filter(match => match.title.toLowerCase().includes(searchWord))
        }
        else {
            newDict = Object.values(context.campaign)
        }
    // const item = context.campaign.find(p => p.id === parseInt(props.campaign));
    return (
        <bs.Container fluid className="p-4">
        <bs.Row className="p-0">
        <h1 className="text-center">Find Campaign </h1>
        <bs.InputGroup className="mb-3">
                <bs.FormControl
                type="text"
                value={searchWord}
                onChange={e => {
                  setSearchWord(e.target.value);
                }}
                aria-label="Campaign"
                aria-describedby="basic-addon2"
                // onChange={(state)=> setState({search: context.updateSearch.bind(state)})}
                />
                <bs.InputGroup.Append>
                <bs.Button variant="success" className="fa fa-search search-icon"></bs.Button>
                {/* <Link to={"/searchDetails/"}className="btn btn-light">Search</Link> */}
                </bs.InputGroup.Append>
            </bs.InputGroup>
        </bs.Row>
            <bs.Row noGutters className="rounded-bottom" style={{backgroundColor: 'white'}}>
              <ul>{newDict.map(state =>{
                      return (
                     <li>{state.title} - {state.url}</li>
                    //   <CampaignRow key={n.id} campaign={n.id}/>
                      )
                  })}
              </ul>
            <Pages></Pages>
            </bs.Row>
        </bs.Container>
    )  
}
export default Search