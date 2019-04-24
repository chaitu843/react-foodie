import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchCollectionsInCity} from '../../Actions/actions';
import './RecommendedSection.css';

import CollectionCard from '../CollectionCard/CollectionCard'

class RecommendedSection extends Component {
    render() {
        return (
            <section className="my-5" id="RecommendedSection">
                <h2>Recommended Collections</h2>
                <hr />
                <div className="row collections" id="RecommendedSection">
                  {this.props.collections.map(card => 
                      <CollectionCard key={card.collection.collection_id} collection={card.collection} favorite={false} />
                  )} 
                </div>
            </section>
        )
    }

    componentDidMount() {
        this.props.fetchCollectionsInCity();
    }

}

const mapStateToProps = state => ({
    collections: state.collections
})
export default connect(mapStateToProps, {fetchCollectionsInCity, })(RecommendedSection);
