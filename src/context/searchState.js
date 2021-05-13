

import React, { useReducer } from 'react';
import { cardData } from '../data/card-info';
import { getCardsByCategory } from '../helpers/searchCardByTitle';
import { types } from '../types/types';
import { SearchContext } from './SearchContext';

//? context



import searchReducer from './SearchReducer';

const initialState = {
    cards_s: [],
    card_search: [],
    menuStatus: false
}

const SearchState = (props) => {

    //? crear  el distpach y el state
    const [state, dispatch] = useReducer(searchReducer, initialState);

    const searchByTitle = (query = "") => {


        if (query === '') {

            dispatch({
                type: types.getCards,
                payload: cardData
            })
        };

        query = query.toLowerCase();
        let cardFilter = [];


        cardFilter = cardData.filter(card =>
            (card.title.toLowerCase().includes(query)) ||
            (card.content.toLowerCase().includes(query)) ||
            (card.benefits[0].toLowerCase().includes(query))
        )

        dispatch({
            type: types.search,
            payload: cardFilter
        })

    }

    const searchByCategory = (category) => {

        let items;

        if (category.golden !== undefined
            || category.silver !== undefined
            || category.bronze !== undefined) {



            if (category.golden) {
                items = getCardsByCategory('golden')
            }
            if (category.silver) {
                items = getCardsByCategory('silver')
            }
            if (category.bronze) {
                items = getCardsByCategory('bronze')
            }

            if (category.golden && category.silver) {
                items = getCardsByCategory('golden', 'silver')
            }
            if (category.golden && category.bronze) {
                items = getCardsByCategory('golden', 'bronze')
            }
            if (category.silver && category.bronze) {
                items = getCardsByCategory('silver', 'bronze')
            }
            if (category.silver && category.bronze && category.golden) {
                items = getCardsByCategory('silver', 'bronze', 'golden')
            }
        }


        if (items !== undefined) {

            dispatch({
                type: types.search,
                payload: items
            })
        }

    }
    const getCards = () => {

        dispatch({
            type: types.getCards,
            payload: cardData
        })

    }

    const showMenu = () => {

        dispatch({
            type: types.showMenu,
        })
    }
    const hideMenu = () => {

        dispatch({
            type: types.hideMenu,
        })
    }
    return (
        <SearchContext.Provider
            value={{
                //? states
                ...state,

                //* funciones
                searchByTitle,
                getCards,
                searchByCategory,
                showMenu,
                hideMenu,
            }}
        >
            {props.children}
        </SearchContext.Provider>
    )

}


export default SearchState;
