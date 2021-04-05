import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import ApiContext from '../ApiContext'
import AccomplishmentsList from '../AccomplishmentsList/AccomplishmentsList'
import config from '../config'
import './App.css'
import LandingPage from '../LandingPage/LandingPage'
import AddAccomplishment from '../AddAccomplishment/AddAccomplishment'

class App extends Component {
    state = {
        accomplishments: [],
        error: null,
    }

    componentDidMount(){
        fetch(`${config.API_ENDPOINT}/accomplishments`)
            .then(res =>
                !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            )
            .then((accomplishments) => {
                console.log(accomplishments)
                this.setState({ accomplishments })
            })
            .catch(error => {
                console.error({error})
            })
    }

    addAccomplishment = accomplishment => {
        this.setState({
            accomplishments: [ ...this.state.accomplishments, accomplishment]
        })
    }

    deleteAccomplishment = accomplishmentId => {
        this.setState({
            accomplishments: this.state.accomplishments.filter(accomplishment => accomplishment.id !== accomplishmentId)
        })
    }

    render() { 
        const contextValue = {
            accomplishments: this.state.accomplishments,
            addAccomplishment: this.addAccomplishment,
            deleteAccomplishment: this.deleteAccomplishment,
        }
        return (  
            <div className = "App">
                <ApiContext.Provider value = {contextValue}>
                    <Route 
                        exact path = '/'
                        component = {LandingPage}
                    />
                    <Route
                        path = '/accomplishments'
                        component = {AccomplishmentsList}
                    />
                    <Route
                        path = '/add-accomplishment'
                        component = {AddAccomplishment}
                    />
                </ApiContext.Provider>
            </div>
        )
    }
}
 
export default App;