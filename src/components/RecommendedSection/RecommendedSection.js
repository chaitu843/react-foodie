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
                  <span id="myBtn" title="favorites" onClick={this.clickHandler} style={{
                    fontSize: "36px",
                    float: "right"
                }}> &#9829;</span>
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
    collections: state.collections
})
export default connect(mapStateToProps, {fetchCollectionsInCity, })(RecommendedSection);
