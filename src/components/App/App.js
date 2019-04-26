import React, { Component } from 'react';
import { Provider } from 'react-redux';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import store from '../../store';

import './App.css';

import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import RecommendedSection from '../RecommendedSection/RecommendedSection';
import SearchSection from '../SearchSection/SearchSection';
import RestaurantsSection from '../RestaurantsSection/RestaurantsSection';



class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    this.searchRef = React.createRef()
  }
  
  render() {
    return (
      <Provider store={store}>
        <>
          <Header />
          <div className="content">
            <Nav />
            <div className="mx-5">
              <SearchSection style={{display: "none"}}/>
              <RestaurantsSection />
              <RecommendedSection /> 
            </div>
          </div>
        </>
      </Provider>
    );
  }
}

export default App;
