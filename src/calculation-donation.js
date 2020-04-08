import React, {useContext} from 'react'
import * as bs from 'react-bootstrap'
import { useHistory } from "react-router-dom"
import { Formik, Form, Field} from 'formik'
import AppContext from './context'  
import axios from 'axios'


function Donations(props) {
    return (
            <CheckoutController />
    )
}
export default Donations


const CheckoutController = props => {
    const state = useContext(AppContext)
    const axios = require('axios')
    let Prediction = 0   
    return (
        <Formik
            initialValues={{
                facebook: false,
                beneficiary: false,
                charity: false,
                charityValidated: false,
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validate={values => {
                const errors = {}

                if (!values.currency) {
                    errors.name = 'Currency Is Required';
                }
                if (!values.goal) {
                    errors.goal = 'Goal Is Required';
                }
                if (!values.catID) {
                    errors.catID = 'catID Is Required';
                }
                // if (!values.state) {
                //     errors.state = 'State Is Required';
                // }
                // if (!values.zipcode) {
                //     errors.zipcode = 'Zip Code Is Required'; 
                // }
                
                // console.log('validating', values)
                return errors
            }}
            onSubmit={async (values, actions) => {
                let resp = ''
                console.log('entered here')
                // UNCOMMENT THE CODE BELOW FOR THE API POST CALL
                try {
                    resp = await axios.post('http://localhost:8000/api/calc-donation/',{
                        "FacebookAuto": values.facebook,
                        "CatId": values.catID,
                        "Currency": values.currency,
                        "Goal": values.goal,
                        "Beneficiary": values.beneficiary,
                        "Charity": values.charity,
                        "CharityValidated": values.charityValidated,

                    })
                } catch(err) {
                    console.log(err)
                }
                Prediction = resp.data.Prediction
                // console.log('resp.data: ',resp.data)
                
            }}
        >{form => (
            <PaymentForm form={form} state={state} prediciton={Prediction} />
        )}</Formik>
    )
}


/**
 * The form layout/html.
 * This component needs finishing.
 */
const PaymentForm = props => (
    <Form id="form">
        <bs.Container>
            <bs.Row>
                <bs.Col className="px-3 py-4" style={{color:"white",backgroundColor: "royalBlue"}}>
                    <h2>Donator Success Predictions:</h2>
                </bs.Col>
            </bs.Row>
                <bs.Col md="12" className="px-3 py-4 border-right" style={{backgroundColor: "white"}}>
                        <Input title="Will you automatically the campaign to Facebook?:" name="facebook" type="checkbox" disabled={props.form.isSubmitting} />
                        <Input title="Category ID:" name="catID" type="number" disabled={props.form.isSubmitting}/>
                        <Input title="Currency Code:" name="currency" type="text" disabled={props.form.isSubmitting}/>
                        <Input title="Donation Goal:" name="goal" type="number" disabled={props.form.isSubmitting}/>
                        <Input title="Do you have a beneficiary?:" name="beneficiary" type="checkbox" disabled={props.form.isSubmitting}/>
                        <Input title="Are you a charity?:" name="charity" type="checkbox" disabled={props.form.isSubmitting}/>
                        <Input title="Is your charity validated by GoFundMe?:" name="charityValidated" type="checkbox" disabled={props.form.isSubmitting}/>
                        <div hidden={props.prediciton === 0}>Predicted Average Donation: {parseInt(props.prediciton)}</div>
                </bs.Col>
            <bs.Row>
                <bs.Col className="px-3 py-4" style={{color:"white",backgroundColor: "royalBlue"}}>
                    <bs.Button id="submitButton"  disabled={props.form.isSubmitting} type="submit" variant="warning">
                        <span hidden={!props.form.isSubmitting}>
                        </span>
                        <span hidden={props.form.isSubmitting}>
                            Calculate
                        </span>
                    </bs.Button>
                </bs.Col>
            </bs.Row>
        </bs.Container>
    </Form>
)


/**
 * A form input.
 *   props.title - the title that shows above the input box
 *   props.type - the type of input (see React Bootstrap Form.Control)
 *   props.placeholder - placeholder text in the input.
 * This component is finished and doesn't need additional work.
 */
        
const Input = (props) => (
    <Field name={props.name}>{rProps => (
        <bs.Form.Group>
            {props.title &&
                <bs.Form.Label>{props.title}</bs.Form.Label>
            }
            <bs.Form.Control
                type={props.type}
                placeholder={props.placeholder}
                disabled={props.disabled}
                {...rProps.field}
            />
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>         
)    