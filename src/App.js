import React from 'react';

import SearchState from './context/searchState';


import { Cards } from './ui/Cards';
import { Header } from './ui/Header';
import { Search } from './ui/Search';

function App() {
  return (
    <SearchState>
      <div className="App">
        <Header />

        <div className="container">
          <Search />

          <Cards />
        </div>
      </div>
    </SearchState>
  );
}


export default App;