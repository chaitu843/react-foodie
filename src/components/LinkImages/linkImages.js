import React from 'react';
import { Link } from 'react-router-dom';

import './linkImages.css';
import SearchForm from '../SearchForm/SearchForm';

function linkImages() {
    return (
        <div className="mx-5" style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "6rem",
            flexWrap: "wrap"
        }}>
            <div className="linkContainer">
                <Link to="/collections"><img src={require('../../assets/collections.jpg')} className="linkImage" alt="Hand Picked Collections" title="Collections" /></Link>
                <div className="middle">
                    <div style={{
                        fontSize: "28px",
                        fontWeight: "bold",
                        fontVariant: "all-small-caps"
                    }}>Collections</div>
                </div>
            </div>
            <div className="linkContainer">
                <Link to="/restaurants"><img src={require('../../assets/restaurants.jpg')} className="linkImage" alt="Hand Picked Restaurants" title="Collections" /></Link>
                <div className="middle">
                    <div style={{
                        fontSize: "28px",
                        fontWeight: "bold",
                        fontVariant: "all-small-caps",
                    }}>Restaurants</div>
                </div>
            </div>
               <SearchForm />
        </div>
    )
}

export default linkImages
