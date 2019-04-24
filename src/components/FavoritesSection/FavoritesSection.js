import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchFavoriteCollections} from '../../Actions/actions';
import './favoritesSection.css';

import CollectionCard from '../CollectionCard/CollectionCard'

class FavoritesSection extends Component {
    render() {
        return (
            <section className="my-5" id="favoritesSection">
                <h2>Favorite Collections</h2>
                <hr />
                <div className="row collections" id="favorites">
                  {this.props.favoriteCollections.map(card => 
                      <CollectionCard key={card.collection_id} collection={card} favorite={true} />
                  )} 
                </div>
            </section>
        )
    }

    componentDidMount() {
        this.props.fetchFavoriteCollections();
    }

}

const mapStateToProps = state => ({
    favoriteCollections: state.favoriteCollections
})

export default connect(mapStateToProps, {fetchFavoriteCollections})(FavoritesSection);
