import { FETCH_FAVORITE_COLLECTIONS, ADD_FAVORITE_COLLECTION, DELETE_FAVORITE_COLLECTION } from '../Actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_FAVORITE_COLLECTIONS:
            return [
                ...state,
                ...action.favoriteCollections
            ]
        case ADD_FAVORITE_COLLECTION:
            return [
                ...state,
                action.favorite
            ]
        case DELETE_FAVORITE_COLLECTION:
            return state.filter(favorite => favorite._id !== action.id);
        default:
            return state;
    }
}