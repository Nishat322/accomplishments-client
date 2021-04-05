import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './LandingPage.css'
class LandingPage extends Component {
    render() { 
        return (  
            <div className = 'LandingPage'>
                <h1>Welcome to Thoughtful Thoughts</h1>
                    <h3> This application was build to collect your thoughts. Simple one-liners about anything.</h3>
                    <h3> You can enter to see the list by clicking the link below. Once you enter you will see a list of compiled thoughts from every visitor that came before you.
                         Take your time to read all their thoughts or go right ahead and add your own. Recently added thoughts will be found at the bottom of the list.
                    </h3>
                    <h3> If you're feeling chaotic today you can delete any of the thoughts you see. Just click the remove button at the bottom right corner of every thought. </h3>
                    <h3> Enjoy using this application. Hope you leave inspired and galvanized </h3>
                <div className = 'LandingPage_enter'>
                    <h2><Link to = '/accomplishments'> Enter Thoughtful </Link> </h2>
                </div>
            </div>
        )
    }
}
 
export default LandingPage