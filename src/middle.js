// import React, {useContext} from 'react'
import React from 'react'
import * as bs from 'react-bootstrap'
// import { useRouteMatch } from 'react-router-dom'
// import AppContext from './context'

function Middle() {
    return (
        <bs.Container fluid className="p-4">
            <bs.Row className="p-0">
                <h1>Middle Section</h1>
            </bs.Row>
        </bs.Container>
    )
}

export default Middle;