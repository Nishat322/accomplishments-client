import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import AccomplishmentsList from './AccomplishmentsList'

it('renders wihtout crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><AccomplishmentsList/></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})