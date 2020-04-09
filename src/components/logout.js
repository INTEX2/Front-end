import React, { Component } from "react"
import AppContext from '../context'
import {Link} from "react-router-dom"
import axiosInstance from "../axiosApi"

class Logout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message:"",
        }
    }

    static contextType = AppContext

    async getLogout(){
        try {
            const response = await axiosInstance.post('/blacklist/', {
                "refresh_token": localStorage.getItem("refresh_token")
            })
            axiosInstance.defaults.headers['Authorization'] = null
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            this.context.LogOut()
            // console.log('contextType',this.context)
            // window.location.reload(false)
            return response
        }
        catch (e) {
            console.log(e)
        }
    }

    componentDidMount(){
        this.getLogout()
    }

    render(){
        return (
            <div className='jumbotron' style={{fontWeight:'bold'}}>
                <h4>Your Logout was successful, hope to see you again soon</h4>
                <p>Refresh to log in again</p>
                <p>Click <u><Link to="/">here</Link></u> to go back to the homepage</p>
            </div>
        )
    }
}

export default Logout