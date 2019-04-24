import { FETCH_RESTAURANTS } from '../Actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_RESTAURANTS:
            return [
                ...state,
                ...action.restaurants,
            ]
        default:
            return state;
    }
}