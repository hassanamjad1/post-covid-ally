import React from 'react'
// import {auth} from '../firebase.js'
import {Button} from '@material-ui/core'
import './form.css'
function Account() {
    return (
        
        <div className="form-container">
            <div className="form">
                <div className="form-group">
                    <label htmlFor="username">Change Username</label>
                    <input type="text" name="username" placeholder="Username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Change Password</label>
                    <input type="password" name="password" placeholder="Password"/>
                </div>
            </div>
            <div className="footer">
                <Button type="button" className="btn">
                    Save
                </Button>
            </div>
        </div>
    )
}

export default Account