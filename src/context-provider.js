import React from 'react'
import axios from 'axios'
import AppContext from './context'
import App from './App'
import axiosInstance from "./axiosApi"
import produce from 'immer'

export default class AppProvider extends React.Component {
    constructor(props) {
        super(props)
        this.actions = {
            LogIn: this.LogIn,
            LogOut: this.LogOut,
            getUserName: this.getUserName,
            setUserName: this.setUserName,
            updateSearch: this.updateSearch,
            filteredSearch: this.filteredSearch,
            searchterm: this.searchTerm

        }
        this.cancel = '';
        this.state = {
            LoggedIn: false,
            userName: null,
            isLogInError: false,
            isAdmin: false,
            campaign: {},
            search: '',
           
        }
    } 
    
    filteredSearch = (campaign) => {
        return campaign.title.toLowerCase().includes(this.state.search.toLowerCase());
        }
    

    updateSearch(state){
        this.setState({search: state.target.value.substr(0,20)})
    }

   
    getUserName() {
        return(this.userName)
    }

    setUserName = name => {
        this.setState(state => produce(state, draft => {
            draft.userName = name
        }))
    }

    LogIn = (name) => {
        this.setState(state => produce(state, draft => {
            console.log(name)
            if (name === 'dakota'){
                draft.userName = name
                draft.LoggedIn = true
                draft.isAdmin = true
            }
            else{
                draft.userName = name
                draft.LoggedIn = true
                draft.isAdmin = false
            }
        }))
    }

    LogOut() {
            this.userName = null
            this.LoggedIn = false
            this.isAdmin = false
    }

    render() {
        return (
            <AppContext.Provider value={{...this.state, ...this.actions}}>
                <App />
            </AppContext.Provider>
        )
    }

    async componentDidMount() {
        const resp = await axios.get('http://localhost:8000/api/campaign')
        try {
            let response = await axiosInstance.get('/hello/')
            // console.log('response from hello', response)
            if (response == null){
                // console.log('entered if')
            } else if (response !== null){
                // console.log('entered else if')
                //############################ ADD ADMINS TO THIS IF STATEMENT ############################\\
                if (response.data.user === 'dakota'){
                    this.setState({...this.state, userName: response.data.user, LoggedIn:true, isAdmin:true, campaign: resp.data})
                } else{
                    this.setState({...this.state, userName: response.data.user, LoggedIn:true, campaign: resp.data})
                }
            } else {
                // console.log('entered else')
            }
            return response
        }catch(error){
            // console.log("Error: ", 'Something is wrong')
            throw(error)
        }
        // const resp = await axios.get('https://dakotasarcticapi.herokuapp.com/category')
        // const resp2 = await axios.get('https://dakotasarcticapi.herokuapp.com/product')
    }
}