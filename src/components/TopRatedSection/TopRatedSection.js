import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchCollections} from '../../Actions/actions';
import './topRatedSection.css';

import Card from '../Card/Card'

class TopRatedSection extends Component {
    render() {
        return (
            <section className="my-5" id="topRatedSection">
                <h2>Top Rated Collections</h2>
                <hr />
                <div className="row collections" id="topRated">
                  {this.props.collections.map(card => 
                      <Card key={card.collection.collection_id} collection={card.collection} />
                  )} 
                </div>
            </section>
        )
    }

    componentDidMount() {
        this.props.fetchCollections();
    }

}

const mapStateToProps = state => ({
    collections: state.collections
})
export default connect(mapStateToProps, {fetchCollections})(TopRatedSection);
