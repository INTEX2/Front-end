// import React, {useContext} from 'react'
import React from 'react'
import * as bs from 'react-bootstrap'
import {Link,} from 'react-router-dom'
// import { useRouteMatch } from 'react-router-dom'
// import AppContext from './context'

function Predictor() {
    return (
        <bs.Container fluid className="p-4">
            <bs.Row className="p-0">
            <h1 className="text-center">How successful is your campaign? </h1>
            <bs.InputGroup className="mb-3">
                    <bs.FormControl
                    placeholder="Enter Campaign URL"
                    aria-label="Campaign"
                    aria-describedby="basic-addon2"
                    />
                    <bs.InputGroup.Append>
                    <Link to={"/searchDetails/"}className="btn btn-light">Score</Link>
                    </bs.InputGroup.Append>
                </bs.InputGroup>
            </bs.Row>
        </bs.Container>
    )
}

export default Predictor;