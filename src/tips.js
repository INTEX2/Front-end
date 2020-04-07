// import React, {useContext} from 'react'
import React from 'react'
import * as bs from 'react-bootstrap'
import {Link,} from 'react-router-dom'
// import { useRouteMatch } from 'react-router-dom'
// import AppContext from './context'

function Tips() {
    return (
        <bs.Container fluid className="p-4">
            <bs.Row className="p-0">
            <h1 className="text-center">What Makes a Campaign Successful? </h1>
                <h3>Graphs and stuff can go here </h3>
            <h1>Key words</h1>
                <p>list of nice words</p>
            <h1>Other details</h1>
                <p>Nice details </p>
            </bs.Row>
        </bs.Container>
    )
}

export default Tips;