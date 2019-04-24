import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {addFavoriteCollection, deleteFavoriteCollection} from '../../Actions/actions';

import './collectionCard.css';

class CollectionCard extends Component {

    addToFavorite = () => {
        let duplicate = this.props.favoriteCollections.find(fav => fav.collection_id === this.props.collection.collection_id)
        if(duplicate === undefined) this.props.addFavoriteCollection(this.props.collection);
        else{
            console.log("Duplicate");
        }
    }

    deleteFromFavorite = () => {
        this.props.deleteFavoriteCollection(this.props.collection.id);
    }

    render() {

        let collection = this.props.collection,
            button = this.props.favorite ? <button type="button" className="btn btn-danger delete " onClick = {this.deleteFromFavorite}>&#9988;</button>
                                         : <button type="button" className="btn btn-danger add "  onClick = {this.addToFavorite}>&#9825;</button>

        return (
            <div className="collection card col-xl-2 col-lg-3 col-md-5 col-sm-12 my-4" >
                <img className="card-img-top" alt={collection.title} src={collection.image_url} />
                <div className="card-body">
                    <h5 className="card-title">{collection.title}</h5>
                    <p className="card-text">{collection.description}</p>
                    {button}
                </div>
            </div>
        )
    }
}

CollectionCard.propTypes = {
    favorite: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    favoriteCollections: state.favoriteCollections
})

export default connect(mapStateToProps, {addFavoriteCollection, deleteFavoriteCollection })(CollectionCard);
