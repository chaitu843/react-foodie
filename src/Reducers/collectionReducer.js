import { FETCH_COLLECTIONS } from '../Actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_COLLECTIONS:
            return [
                ...state,
                ...action.collections
            ]
        default:
            return state;
    }
}