import {FETCH_COLLECTIONS} from './types';

const myheaders = {
    "user-key": "53f3bb50c5de30569dc9ef4bc83ca347"
}

export const fetchCollections = () => dispatch => {
    fetch("https://developers.zomato.com/api/v2.1/collections?city_id=280&count=9",{
        method: 'GET',
        credentials: "same-origin",
        headers: myheaders
    })
    .then(resp => resp.json())
    .then(data => dispatch({
        type: FETCH_COLLECTIONS,
        collections: data.collections
    }))
}