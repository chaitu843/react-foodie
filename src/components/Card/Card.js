import React, { Component } from 'react'

import './card.css';

class Card extends Component {
    render() {

        let collection = this.props.collection;

        return (
            <div className="collection card col-lg-2 offset-lg-1 col-md-5 offset-md-1 col-sm-12 my-3">
                <img className="card-img-top" alt={collection.title} src={collection.image_url} />
                <div className="card-body">
                    <h5 className="card-title">{collection.title}</h5>
                    <p className="card-text">{collection.description}</p>
                    <button type="button" className="btn btn-danger add " id="1" data-toggle="modal" data-target="#collectionModal">♡</button>
                </div>
            </div>
        )
    }
}

export default Card
