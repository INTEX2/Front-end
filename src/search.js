import React, {useState} from 'react'
import * as bs from 'react-bootstrap'
import AppContext from './context'
import {Link, } from 'react-router-dom'
import CampaignRow from "./campaign-row-creator"
import Pages from './pageNavigation'

function Search(props){
    const context = React.useContext(AppContext)

    const [searchWord, setSearchWord] = useState("")
    console.log('searchWord', searchWord)
    console.log('typeof context.campaign',typeof context.campaign)
    let newDict = {}
        if (searchWord !== ""){
            newDict = Object.values(context.campaign).filter(match => match.title.toLowerCase().includes(searchWord))
        }
        else {
            newDict = Object.values(context.campaign)
        }
    return (
        <bs.Container fluid >
        <bs.Row className="p-0">
        <bs.Col className="px-3 py-4" style={{color:"white",backgroundColor: "royalBlue"}}>
            <h2>GoFundMe Management &amp; Analyst Campaign Ratings</h2>
        </bs.Col>
        <bs.InputGroup className="mb-3">
                <bs.FormControl
                type="text"
                value={searchWord}
                onChange={e => {
                  setSearchWord(e.target.value);
                }}
                aria-label="Campaign"
                aria-describedby="basic-addon2"
                />
                <bs.InputGroup.Append>
                <bs.Button variant="success" className="fa fa-search search-icon"></bs.Button>
                </bs.InputGroup.Append>
            </bs.InputGroup>
        </bs.Row>
            <bs.Row noGutters className="rounded-bottom rounded-top pt-2" style={{backgroundColor: 'white'}}>
              <ul>{newDict.map(state =>{
                      return (
                     //<li>{state.title} - {state.url}</li>
                        <CampaignRow key={state.id} campaign={state.id}/>
                      )
                  })}
              </ul>
            <Pages></Pages>
            </bs.Row>
        </bs.Container>
    )  
}
export default Search