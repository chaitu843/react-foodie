import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchCollectionsInCity} from '../../Actions/actions';
import './RecommendedSection.css';

import CollectionCard from '../CollectionCard/CollectionCard';
import Modal from '../Modal/Modal';
import FavoritesSection from '../FavoritesSection/FavoritesSection';

class RecommendedSection extends Component {
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
            <section className="my-5" id="RecommendedSection">
                <h2 style={{
                    display: "inline"
                }}>Recommended Collections</h2>
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
                    <FavoritesSection />
                </Modal>
                <hr />
                <div className="row collections" id="RecommendedSection" style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}>
                
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
    collections: state.collections,
    count: state.favoriteCollections.length
})
export default connect(mapStateToProps, {fetchCollectionsInCity, })(RecommendedSection);
