import React, { Component } from 'react'
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import './searchSection.css';

import { connect } from 'react-redux';

class SearchSection extends Component {
    render() {
        return (
            <section className="my-5 searchSection" id="searchSection">
                <h2>Search Results</h2>
                <hr />
                <div className="row searchResults" id="searchResults" style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}>
                    {this.props.searchResults.map(resto =>
                        <RestaurantCard key={resto.restaurant.id} restaurant={resto.restaurant} favorite={false} />
                    )}
                </div>
            </section>
        )
    }
}
const mapStateToProps = state => ({
    searchResults: state.searchResults
})

export default connect(mapStateToProps, {})(SearchSection);
