import React, { Component } from "react"
import {Link, Redirect} from "react-router-dom"
import AppContext from '../context'
import axiosInstance from "../axiosApi"
import * as bs from 'react-bootstrap'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {message:"",username: "", password: "", redirect: false}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    static contextType = AppContext

    setRedirect = () => {
        this.setState({
          redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }
    

    async handleSubmit(event) {
        event.preventDefault()
        try {
            const response = await axiosInstance.post('/token/obtain/', {
                username: this.state.username,
                password: this.state.password
            })
            // console.log(response)
            axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access
            localStorage.setItem('access_token', response.data.access)
            localStorage.setItem('refresh_token', response.data.refresh)
            this.context.LogIn(this.state.username)
            // console.log('contextType',this.context)
            this.setRedirect()
            return response.data
        } catch (error) {
            this.setState({
                message: 'It appears that your username or password is incorrect',
            }) 
        }
    }

    componentDidMount() {
        // console.log('contextType',this.context)
    }
    
    

    render() {        
        return (
            <div className="jumbotron m-5">
                {this.renderRedirect()}
                <h6 style={{color:'red'}}>{this.state.message}</h6>
                <h2 className="mb-5">Sign In</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <span>Username:</span>
                        <span>
                            <input className="rounded-lg border" name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                        </span>
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input className="rounded-lg border" name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <input className="btn btn-success" type="submit" value="Submit"/>
                </form>
                <p className="mt-5">Not a member yet? No problem, just click <Link to="/signup">here</Link> to sign up</p>
            </div>
        )
    }
}
export default Login