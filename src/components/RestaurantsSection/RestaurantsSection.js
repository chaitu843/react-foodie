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
                <span id="myBtn" title="favorites" onClick={this.clickHandler} style={{
                    fontSize: "36px",
                    float: "right"
                }}> &#9829;</span>
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
    restaurants: state.restaurants
})
export default connect(mapStateToProps, { fetchRestaurantsInCity, })(RestaurantsSection);