import React, { Component } from 'react'
import ApiContext from '../ApiContext'

import config from '../config'
import './AddAccomplishment.css'

class AddAccomplishment extends Component {
    static contextType = ApiContext

    static defaultProps = {
        history: {
            push: () => {}
        }
    }

    state = {
        error: null
    }

    handleSubmit = e => {
        e.preventDefault()
        const newAccomplishment = {
            title: e.target['accomplishment'].value,
            description: e.target['description'].value
        }
        fetch(`${config.API_ENDPOINT}/accomplishments`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAccomplishment),
        })
            .then(res => {
                if(!res.ok){
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
            .then(accomplishment => {
                this.context.addAccomplishment(accomplishment)
                this.props.history.push('/accomplishments')
            })
            .catch(error => {
                this.setState({error})
            })
    }

    handleClickCancel = () => {
        this.props.history.push('/accomplishments')
    }

    render() { 
        return (  
            <div className = 'AddAccomplishment'>
                <h2> What did you Achieve? </h2>
                    <form className = 'AddAccomplishment_form' onSubmit = {this.handleSubmit}>
                        <div>
                            <label htmlFor = 'accomplishment'>
                                Accomplishment {' '}
                            </label>
                            <input
                                type = 'textarea'
                                name = 'accomplishment'
                                id = 'accomplishment-input'
                                placeholder = 'Congratulations'
                                required
                            />
                            <label htmlFor = 'author'>
                                Description {' '}
                            </label>
                            <input
                                type = 'textarea'
                                name = 'description'
                                id = 'description-input'
                                placeholder = 'What did you do?'
                                required
                            />
                        </div>
                        <div className='AddAccomplishment_buttons'>
                                <button type='button' onClick={this.handleClickCancel}>
                                    Cancel
                                </button>
                                {' '}
                                <button type='submit'>
                                    Save
                                </button>
                        </div>
                    </form>
            </div>
        )
    }
}
 
export default AddAccomplishment;