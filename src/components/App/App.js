import React, { Component } from 'react';
import { Provider } from 'react-redux';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import store from '../../store';

import './App.css';

import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import RecommendedSection from '../RecommendedSection/RecommendedSection';
import FavoritesSection from '../FavoritesSection/FavoritesSection';
import SearchSection from '../SearchSection/SearchSection';
import RestaurantsSection from '../RestaurantsSection/RestaurantsSection';
import FavoriteRestaurantsSection from '../FavoriteRestaurantsSection/FavoriteRestaurantsSection';

import Modal from '../Modal/Modal';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <>
          <Header />
          <div className="content">
            <Nav />
            <div className="mx-5">
              <RestaurantsSection />
              {/* {<RecommendedSection /> }
              <FavoritesSection /> */}
              {/* <FavoriteRestaurantsSection /> */}
              {/* <SearchSection /> */}
              {/* <Modal /> */}
            </div>
          </div>
        </>
      </Provider>
    );
  }
}

export default App;
