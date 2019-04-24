import React, { Component } from 'react';
import {connect} from 'react-redux';

import {addFavoriteRestaurant, deleteFavoriteRestaurant} from '../../Actions/actions';

import './restaurantCard.css';

export class RestaurantCard extends Component {

    addToFavorite = () => {
        let duplicate = this.props.favoriteRestaurants.find(fav => fav.id === this.props.restaurant.id)
        if(duplicate === undefined) this.props.addFavoriteRestaurant(this.props.restaurant);
        else{
            console.log("Duplicate");
        }
    }

    deleteFromFavorite = () => {
        this.props.deleteFavoriteRestaurant(this.props.restaurant.id);
    }

    render() {
        let resto = this.props.restaurant,
            button = this.props.favorite ? <button type="button" className="btn btn-danger delete " onClick = {this.deleteFromFavorite}>&#9988;</button>
            : <button type="button" className="btn btn-danger add "  onClick = {this.addToFavorite}>&#9825;</button>
        return (
            <div className="resto card col-xl-2 col-lg-3 col-md-5 col-sm-12 my-4">
                <img className="card-img-top" src="https://b.zmtcdn.com/data/pictures/chains/2/18603822/b285d83b2b27d54d2fb5fc29bbdc2e07.jpg" alt={resto.name} />
                <div className="card-body">
                    <h5 className="card-title" style={{height: "4rem"}}>{resto.name}</h5>
                    <p className="card-text text-muted">{resto.cuisines} <br /><br /> Cost {resto.average_cost_for_two} for two</p>
                    {button}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    favoriteRestaurants: state.favoriteRestaurants
})


export default connect(mapStateToProps, {addFavoriteRestaurant, deleteFavoriteRestaurant })(RestaurantCard);
