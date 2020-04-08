// import React, {useContext} from 'react'
// import * as bs from 'react-bootstrap'
// import {Link, useParams} from 'react-router-dom'
// import AppContext from "./context";


// function allCampaigns() {
//   const context = useContext(AppContext)
//   const camp = Object.values(context.campaign);
//   //console.log(camp)
//     return (
//         <bs.Container fluid className="p-4">
          
// <bs.Table striped bordered hover>
//   <thead>
//     <tr>
//       <th>#</th>
//       <th>Campaign Name</th>
//       <th>Amount Raised</th>
//       <th># of Donors</th>
//       <th>Details</th>
//     </tr>
//   </thead>
  
//     {camp.map(([cid, value]) =>{ 
//         let myCamp = camp.find(camp=>{
//           return camp.campaign_id = cid})
//       return (
//         <div>
//           <tbody>
//           <tr>
//           <td>{camp.campaign_id}</td>
//        <td>{camp.title}</td>
//       <td>{camp.current_amount}</td>
//       <td>{camp.donors}</td>
//       <Link to={"/campaignDetails/" +camp.campaign_id}className="btn btn-secondary" >Details</Link>

//         </tr>
//         </tbody>
//         </div>
//         )}
//     )
//       }
//     {/* <tr>
//       <td>2</td>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <td>3</td>
//       <td colSpan="2">Larry the Bird</td>
//       <td>@twitter</td>
//     </tr> */}
// </bs.Table>
//         </bs.Container>
//     )  
// }

// export default allCampaigns