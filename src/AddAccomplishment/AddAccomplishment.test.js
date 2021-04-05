import React from 'react'
import ReactDOM from 'react-dom'
import AddAccomplishment from './AddAccomplishment'

it('renders wihtout crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AddAccomplishment/>, div)
    ReactDOM.unmountComponentAtNode(div)
})