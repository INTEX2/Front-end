import React from 'react'
import axios from 'axios'
import AppContext from './context'
import App from './App'
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

        }
        this.state = {
            LoggedIn: false,
            userName: null,
            isLogInError: false,
            isAdmin: false,
            campaign: {},
            search: 'search',
        }
    } 

    updateSearch(event){
        this.setState({search: event.target.value.substr(0, 20)});
    }

    render(){
        let filteredSearch = this.props.campaign.filter(
            (campaign)=> {
                return campaign.title.toLowerCase().indexOf(
                    this.state.search) !== -1;
            }
        )
    }
    
    getUserName() {
        return(this.userName)
    }

    setUserName = name => {
        this.setState(state => produce(state, draft => {
            draft.userName = name
        }))
    }

    LogIn = (name, pswd) => {
        this.setState(state => produce(state, draft => {
            if (name === 'admin' && pswd === 'admin123'){
                draft.name = name
                draft.LoggedIn = true
                draft.isAdmin = true
                draft.isLogInError = false
            }
            else if (name === 'user' && pswd === 'user123'){
                draft.name = name
                draft.LoggedIn = true
                draft.isAdmin = false
                draft.isLogInError = false
            }
            else{
                draft.isLogInError = true
            }
        }))
    }

    LogOut() {
        this.setState(state => produce(state, draft => {
            draft.name = null
            draft.LoggedIn = false
        }))
    }

    render() {
        return (
            <AppContext.Provider value={{...this.state, ...this.actions}}>
                <App />
            </AppContext.Provider>
        )
    }

    async componentDidMount() {
        // const resp = await axios.get('https://dakotasarcticapi.herokuapp.com/category')
        // const resp2 = await axios.get('https://dakotasarcticapi.herokuapp.com/product')

        // this.setState({...this.state, categories: resp.data, products: resp2.data})
    }
}