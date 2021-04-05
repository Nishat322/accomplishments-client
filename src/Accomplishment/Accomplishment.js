import React, { Component } from 'react'
import config from '../config'
import ApiContext from '../ApiContext'
import Description from '../Description/Description'

import './Accomplishment.css'

class Accomplishment extends Component {
    static defaultProps = {
        onDeleteAccomplishment: () => {},
    }

    static contextType = ApiContext

    state = {
        displayDescription: false
    }

    handleClickDelete = e => {
        e.preventDefault()
        const accomplishmentId = this.props.id

        fetch(`${config.API_ENDPOINT}/accomplishments/${accomplishmentId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                if(!res.ok){
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
            .then(()=> {
                this.context.deleteAccomplishment(accomplishmentId)
                this.props.onDeleteAccomplishment(accomplishmentId)
            })
            .catch(error => {
                console.log({error})
            })
    }

    displayDescription = () => {
        this.setState({
            displayDescription: !this.state.displayDescription
        })
    }

    render() { 
        const {title, description, date_added} = this.props
        return ( 
                <div className = 'Accomplishment'>
                    <h2 className = 'Accomplishment_line'>
                        {`"${title}"`}
                    </h2>
                    <button className = 'Accomplishment_delete' type = 'button' onClick={this.handleClickDelete}>
                        Remove
                    </button>
                    <div className = 'Accomplishment_date'>
                        Date Added {' '}
                        <span className = 'Accomplishment_date-format'>
                            {date_added}
                        </span>
                    </div>
                        <button className = 'Accomplishment_see-more' onClick = {this.displayDescription}> 
                            {!this.state.displayDescription ? 'See More': 'Close'} 
                        </button>
                        {this.state.displayDescription ? <Description description = {description}/> : '' }
                </div>
        )
    }
}
 
export default Accomplishment
