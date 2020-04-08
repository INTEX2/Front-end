import React from 'react'
import * as bs from 'react-bootstrap'
import {Link} from 'react-router-dom'
import AppContext from "./context";
import CAMP from './data_frontend'

function SearchDetails() {
  let CampArray = Object.values(CAMP)
  const context = React.useContext(AppContext);
  let camp = CampArray
    return (
        <bs.Container fluid className="p-4">
          
<bs.Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Campaign Name</th>
      <th>Amount Raised</th>
      <th># of Donors</th>
      <th>Details</th>
    </tr>
  </thead>
  
    {camp.map(camp =>{  
      return (
        <div>
          <tbody>
          <tr>
          <td>{camp.campaign_id}</td>
       <td>{camp.title}</td>
      <td>{camp.current_amount}  </td>
      <td>{camp.donors}</td>
      
      <Link to="/covidData" className="btn-secondary">
        Details
        </Link>
        </tr>
        </tbody>
        </div>
        )}
    )
      }
    {/* <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
</bs.Table>
        </bs.Container>
    )  
}

export default SearchDetails