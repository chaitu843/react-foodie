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
            <div className="resto card my-4">
                <img className="card-img-top" src={resto.thumb} alt={resto.name} height="187px" />
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
