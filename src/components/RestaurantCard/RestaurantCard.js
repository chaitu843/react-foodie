import React, { Component } from 'react'
import './restaurantCard.css';

export class RestaurantCard extends Component {
    render() {
        let resto = this.props.restaurant;
        return (
            <div className="resto card col-lg-2 col-md-5 col-sm-12 my-4">
                <img className="card-img-top" src="https://b.zmtcdn.com/data/pictures/chains/2/18603822/b285d83b2b27d54d2fb5fc29bbdc2e07.jpg" alt={resto.name} />
                <div className="card-body">
                    <h5 className="card-title">{resto.name}</h5>
                    <p className="card-text text-muted">{resto.cuisines} <br /> Cost {resto.average_cost_for_two} for two</p>
                    <button type="button" className="btn btn-danger add " id="18603822" data-toggle="modal"
                        data-target="#collectionModal">♡</button>
                </div>
            </div>
        )
    }
}

export default RestaurantCard
