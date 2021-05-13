import React from 'react';

import SearchState from './context/searchState';
import { MainPage } from './pages/MainPage';


const SearchContext = ({ children }) => {
  return (
    <SearchState>
      {children}
    </SearchState>
  )
}

const App = () => {
  return (
    <SearchContext>
      <MainPage />
    </SearchContext>
  );
}


export default App;