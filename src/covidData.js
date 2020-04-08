// import React, {useContext} from 'react'
import React from 'react'
import * as bs from 'react-bootstrap'
// import { useRouteMatch } from 'react-router-dom'
// import AppContext from './context'

function Covid() {
    return (
        <bs.Container >
            <bs.Row>
                <bs.Col className="px-3 py-4" style={{color:"white",backgroundColor: "royalBlue"}}>
                    <h2>DOMO Coronavirus Visualizations</h2>
                </bs.Col>
            </bs.Row>
            <bs.Row >
                <bs.Col className="p-4">
                    <iframe src="https://public.domo.com/embed/pages/bYzKp" width="100%" height="750" marginheight="0" marginwidth="0" frameborder="0">data</iframe>
                </bs.Col>
                
            </bs.Row>
        </bs.Container>
    )
}

export default Covid;