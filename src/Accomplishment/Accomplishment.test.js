import React from 'react'
import ReactDOM from 'react-dom'
import Accomplishment from './Accomplishment'

it('renders wihtout crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Accomplishment/>, div)
    ReactDOM.unmountComponentAtNode(div)
})