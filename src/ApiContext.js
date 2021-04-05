import React from 'react'

const ApiContext = React.createContext({
    accomplishments: [],
    addAccomplishment: () => {},
    deleteAccomplishment: () => {}
})

export default ApiContext