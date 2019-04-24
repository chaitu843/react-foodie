import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchFavoriteRestaurants} from '../../Actions/actions';
import './FavoriteRestaurantsSection.css';

import RestaurantCard from '../RestaurantCard/RestaurantCard'

class FavoriteRestaurantsSection extends Component {
    render() {
        return (
            <section className="my-5" id="favoritesSection">
                <h2>Favorite Restaurants</h2>
                <hr />
                <div className="row collections" id="favorites">
                  {this.props.favoriteRestaurants.map(resto => 
                      <RestaurantCard key={resto.id} restaurant={resto} favorite={true} />
                  )} 
                </div>
            </section>
        )
    }

    componentDidMount() {
        this.props.fetchFavoriteRestaurants();
    }

}

const mapStateToProps = state => ({
    favoriteRestaurants: state.favoriteRestaurants
})

export default connect(mapStateToProps, {fetchFavoriteRestaurants})(FavoriteRestaurantsSection);
