import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import ApiContext from '../ApiContext'
import Accomplishment from '../Accomplishment/Accomplishment' 

import './AccomplishmentsList.css'

class AccomplishmentsList extends Component {
    static defaultProps = {
        accomplishments: []
    }

    static contextType = ApiContext

    render() { 
        const {accomplishments} = this.context
        return (  
            <div className = 'AccomplishmentsList'>
                <div className = 'AccomplishmentsList_button-container'>
                    <header> <h2>Your Achievements</h2></header>
                </div>
                <div className = 'AccomplishmentsList_headline'>
                    <Link to = '/'> Back to Home Page </Link>
                    <Link to = '/add-accomplishment'> Add an Accomplishment </Link>
                    <span className = 'ThoughtList_total'>
                        Total Accomplishments Currently: {accomplishments.length}
                    </span>
                </div>
                
                <ul className = 'Accomplishments_list'>
                    {accomplishments.map(accomplishment =>
                        <li key = {accomplishment.id}>
                            <Accomplishment
                                id = {accomplishment.id}
                                title = {accomplishment.title}
                                description = {accomplishment.description}
                                date_added = {accomplishment.date_added}
                            />
                            <br/>
                        </li>    
                    )}
                </ul>
            </div>
        )
    }
}
 
export default AccomplishmentsList