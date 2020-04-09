import React, { Component } from "react"
import {Link} from "react-router-dom"
import axiosInstance from "../axiosApi"


class Signup extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            email:""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    async handleSubmit(event) {
        event.preventDefault()
        try {
            const response = await axiosInstance.post('/user/create/', {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            })
            /////////////////////////""""   ADD AUTOMATIC LOGIN IN HERE """"///////////////////////
            return response
        }  catch (error) {
            console.log(error.stack)
            this.setState({
                errors:error.response.data
            })
        }
    }

    render() {
        return (
            <div className="jumbotron m-5 text-center">
                <h2 className="mb-5">Become a Member</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input className="rounded-lg border" name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                        {/* { this.state.errors.username ? this.state.errors.username : null} */}
                    </label>
                    <br/>
                    <label>
                        Email:
                        <input className="rounded-lg border" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                        {/* { this.state.errors.email ? this.state.errors.email : null} */}
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input className="rounded-lg border" name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                        {/* { this.state.errors.password ? this.state.errors.password : null} */}
                    </label>
                    <br/>
                    <input className="btn btn-success" type="submit" value="Submit"/>
                </form>
                <p className="mt-5">Already a member? No problem, just click <Link to="/login">here</Link> to log in</p>
            </div>
        )
    }
}
export default Signup