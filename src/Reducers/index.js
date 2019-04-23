import {combineReducers} from 'redux';
import collectionReducer from './collectionReducer';


export default combineReducers({
   collections: collectionReducer,
})