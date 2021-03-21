import { types } from "../types/types"

const reducer = (state, action) => {

    switch (action.type) {
        case types.getCards:
            return {
                ...state,
                cards_s: action.payload
            }
        case types.search:
            return {
                ...state,
                cards_s: action.payload
            }

        default:
            return state
    }
}

export default reducer;