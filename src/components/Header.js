import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'
import { MenuNavigator } from './MenuNavigator'

export const Header = () => {

    const { showMenu, hideMenu, menuStatus } = useContext(SearchContext);


    return (

        <>
            <nav className="navbar navbar-dark brand-style">
                <div className="container">
                    <a className="navbar-brand " href="/">
                        <img src="https://negocioexitoso.online/wp-content/uploads/2021/04/logo-blanco.png"
                            width="30" height="30"
                            className="d-inline-block align-top mr-3"
                            alt="this is the description" />
                    Negocio Exitoso Online

                    </a>
                    <div className="showOrHide">
                        <i style={{
                            color: 'white',
                            transition:'ease'
                        }}
                            className={`${menuStatus ? 'fas fa-times' : 'fas fa-bars'}`}
                            onClick={menuStatus ? hideMenu : showMenu}
                        ></i>
                    </div>

                </div>
            </nav>

            <MenuNavigator />

        </>
    )
}
