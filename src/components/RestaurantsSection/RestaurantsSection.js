import React, { Component } from 'react'
import {connect} from 'react-redux';

import {fetchRestaurantsInCity} from '../../Actions/actions';
import RestaurantCard from '../RestaurantCard/RestaurantCard';

class RestaurantsSection extends Component {
    render() {
        return (
            <section className="my-5" id="restaurantsSection">
                <h2>Restaurants around you</h2>
                <hr />
                <div className="row collections" id="restaurantsSection">
                  {this.props.restaurants.map(resto => 
                      <RestaurantCard key={resto.restaurant.id} restaurant={resto.restaurant} favorite={false} />
                  )} 
                </div>
            </section>
        )
    }

    componentDidMount() {
        this.props.fetchRestaurantsInCity();
    }
}


const mapStateToProps = state => ({
    restaurants: state.restaurants
})
export default connect(mapStateToProps, {fetchRestaurantsInCity, })(RestaurantsSection);