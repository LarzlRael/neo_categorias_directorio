import React, { useReducer } from 'react';
import { cardData } from '../data/card-info';
import { types } from '../types/types';
import { SearchContext } from './SearchContext';

//? context

import searchReducer from './SearchReducer';

const initialState = {
    cards_s: [],
    card_search: [],
}

const SearchState = (props) => {

    //? crear  el distpach y el state
    const [state, dispatch] = useReducer(searchReducer, initialState);

    const searchByTitle = (query = "", statusCheck = {}) => {

        console.log(statusCheck)

        if (query === '') {

            dispatch({
                type: types.getCards,
                payload: cardData
            })
        };

        query = query.toLowerCase();

        const cardFilter = cardData.filter(card =>
            (card.title.toLowerCase().includes(query)) ||
            (card.content.toLowerCase().includes(query)) ||
            (card.benefits[0].toLowerCase().includes(query))
        );


        dispatch({
            type: types.search,
            payload: cardFilter
        })

    }
    const getCards = () => {

        dispatch({
            type: types.getCards,
            payload: cardData
        })

    }


    return (
        <SearchContext.Provider
            value={{
                //? states
                cards_s: state.cards_s,

                //* funciones
                searchByTitle,
                getCards

            }}
        >
            {props.children}
        </SearchContext.Provider>
    )

}


export default SearchState;
