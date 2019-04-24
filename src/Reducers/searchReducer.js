import { SEARCH_COLLECTIONS } from '../Actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case SEARCH_COLLECTIONS:
            return [
                ...state,
                ...action.searchResults
            ]
       
        default:
            return state;
    }
}