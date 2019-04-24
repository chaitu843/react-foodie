import {combineReducers} from 'redux';
import collectionReducer from './collectionReducer';
import favoriteCollectionsReducer from './favoriteCollectionsReducer';
import searchReducer from './searchReducer';
import restaurantReducer from './restaurantReducer';
import favoriteRestaurantsReducer from './favoriteRestaurantsReducer';

export default combineReducers({
   collections: collectionReducer,
   restaurants: restaurantReducer,
   favoriteCollections: favoriteCollectionsReducer,
   favoriteRestaurants: favoriteRestaurantsReducer,
   searchResults: searchReducer
})
