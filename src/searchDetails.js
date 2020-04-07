import React from 'react'
import * as bs from 'react-bootstrap'
import {Link} from 'react-router-dom'

function SearchDetails() {
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
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <Link to="/covidData" className="btn-secondary">
        Details
        </Link>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</bs.Table>
        </bs.Container>
    )  
}

export default SearchDetails