import {FETCH_COLLECTIONS, FETCH_FAVORITE_COLLECTIONS, ADD_FAVORITE_COLLECTION, DELETE_FAVORITE_COLLECTION, FETCH_RESTAURANTS, FETCH_FAVORITE_RESTAURANTS, ADD_FAVORITE_RESTAURANT, DELETE_FAVORITE_RESTAURANT, SEARCH_COLLECTIONS} from './types';

const myheaders = {
    "user-key": "53f3bb50c5de30569dc9ef4bc83ca347"
}

export const fetchCollectionsInCity = () => dispatch => {
    fetch("https://developers.zomato.com/api/v2.1/collections?city_id=4&count=8",{
        method: 'GET',
        credentials: "same-origin",
        headers: myheaders
    })
    .then(resp => resp.json())
    .then(data => dispatch({
        type: FETCH_COLLECTIONS,
        collections: data.collections
    }))
}                             // Giving city_id as 4 --> bangalore  --> HardCoding

export const fetchFavoriteCollections = () => dispatch => {
    fetch("/favoriteCollection",{
        method: 'GET',
        credentials: "same-origin",
    })
    .then(resp => resp.json())
    .then(data => dispatch({
        type: FETCH_FAVORITE_COLLECTIONS,
        favoriteCollections: data
    }))
}

export const addFavoriteCollection = (data) => dispatch => {
    fetch("/favoriteCollection",{
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(resp => resp.json())
    .then(data => dispatch({
        type: ADD_FAVORITE_COLLECTION,
        favorite: data
    }))
}

export const deleteFavoriteCollection = (id) => dispatch => {
    fetch(`/favoriteCollection/${id}`,{
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
    })
    .then( () =>  dispatch({
        type: DELETE_FAVORITE_COLLECTION,
        id: id
    }))
  
}

export const fetchRestaurantsInCity = () => dispatch => {
    fetch("https://developers.zomato.com/api/v2.1/search?entity_id=4&entity_type=city&count=8",{
        method: 'GET',
        credentials: "same-origin",
        headers: myheaders
    })
    .then(resp => resp.json())
    .then(data => dispatch({
        type: FETCH_RESTAURANTS,
        restaurants: data.restaurants
    }))
}                         // Entity_id as 4 --> bangalore --> HardCoded

export const fetchFavoriteRestaurants = () => dispatch => {
    fetch("/favoriteRestaurant",{
        method: 'GET',
        credentials: "same-origin",
    })
    .then(resp => resp.json())
    .then(data => dispatch({
        type: FETCH_FAVORITE_RESTAURANTS,
        favoriteRestaurants: data
    }))
}

export const addFavoriteRestaurant = (data) => dispatch => {
    fetch("/favoriteRestaurant",{
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(resp => resp.json())
    .then(data => dispatch({
        type: ADD_FAVORITE_RESTAURANT,
        favoriteRestaurant: data
    }))
}

export const deleteFavoriteRestaurant = (id) => dispatch => {
    fetch(`/favoriteRestaurant/${id}`,{
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
    })
    .then(resp =>  dispatch({
        type: DELETE_FAVORITE_RESTAURANT,
        id: id
    }))
}

export const searchCollections = (name) => dispatch => {
    fetch(`https://developers.zomato.com/api/v2.1/search?q=${name}&count=8`,{
        method: 'GET',
        credentials: "same-origin",
        headers: myheaders
    })
    .then(resp => resp.json())
    .then(data =>  dispatch({
        type: SEARCH_COLLECTIONS,
        searchResults: data.restaurants,
    }))
}