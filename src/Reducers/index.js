import {combineReducers} from 'redux';
import collectionReducer from './collectionReducer';
import favoritesReducer from './favoritesReducer';
import searchReducer from './searchReducer';


export default combineReducers({
   collections: collectionReducer,
   favorites: favoritesReducer,
   searchResults: searchReducer
})
