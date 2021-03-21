import React from 'react'
import logo from '../static/neo_logo.png';
export const Header = () => {
    return (

        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="this is the description" />
                    Logo
            </a>
        </nav>
    )
}
