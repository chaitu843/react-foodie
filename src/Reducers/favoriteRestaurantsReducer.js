import { FETCH_FAVORITE_RESTAURANTS, ADD_FAVORITE_RESTAURANT, DELETE_FAVORITE_RESTAURANT} from '../Actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_FAVORITE_RESTAURANTS:
            return [
                ...state,
                ...action.favoriteRestaurants
            ]
        case ADD_FAVORITE_RESTAURANT:
            return [
                ...state,
                action.favoriteRestaurant
            ]
        case DELETE_FAVORITE_RESTAURANT:
            return state.filter(favorite => favorite.id !== action.id);
        default:
            return state;
    }
}