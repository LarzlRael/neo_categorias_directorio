import React from 'react';

import { Cards } from '../components/Cards';
import { Header } from '../components/Header';
import { Search } from '../components/Search';


export const MainPage = () => {
    return (

        <div className="App">
            <Header />

            <div className="container">
                <Search />

                <Cards />
            </div>
        </div>

    );
}


