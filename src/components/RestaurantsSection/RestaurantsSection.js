import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fetchRestaurantsInCity } from '../../Actions/actions';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import Modal from '../Modal/Modal';
import FavoriteRestaurantsSection from '../FavoriteRestaurantsSection/FavoriteRestaurantsSection';

class RestaurantsSection extends Component {
    constructor(props) {
        super(props)
      
        this.modalRef = React.createRef();
      }
      clickHandler = (e) =>{
          e.preventDefault();
          this.modalRef.current.openModal();
      }

    render() {
        return (
            <section className="my-5" id="restaurantsSection">
                <h2 style={{
                    display: "inline"
                }}>Restaurants around you</h2>
               <p style={{
                      margin: "0px",
                      float: "right",
                      position: "relative"
                  }}>
                  <span id="myBtn" title="favorites" onClick={this.clickHandler} style={{
                    fontSize: "36px",
                }}> &#9829;</span>
                <span style={{
                        fontSize: "14px",
                        bottom: "0.25rem",
                        left: "1.1rem",
                        position: "absolute",
                        color: "red",
                        fontWeight: "bold"
                }}>{this.props.count}</span>
                  </p>
                <Modal ref={this.modalRef}>
                    <FavoriteRestaurantsSection />
                </Modal>
                <hr />
                <div className="row collections" id="restaurantsSection" style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}>
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
    restaurants: state.restaurants,
    count: state.favoriteRestaurants.length
})
export default connect(mapStateToProps, { fetchRestaurantsInCity, })(RestaurantsSection);