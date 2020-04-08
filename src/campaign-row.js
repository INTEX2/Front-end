import React, {  useContext } from 'react'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import AppContext from './context'

export default function CartItem(props) {
    let context = useContext(AppContext)
    const item = context.campaign.find(p => p.id === parseInt(props.campaign));

    return(
        <Row>
            <Col md="4">{item.title}</Col>
            <Col md="2">{item.goal}</Col>
            <Col md="2">{item.current_amount}</Col>
            <Col md="2">{item.donators}</Col>
            <Col md="2"><Button>View Details</Button></Col>
        </Row>
    )
}
