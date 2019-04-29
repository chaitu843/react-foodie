import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import store from '../../store';
import '../../assets/123.jpg'

import './App.css';

import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import LinkImages from '../LinkImages/linkImages';

import RecommendedSection from '../RecommendedSection/RecommendedSection';
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
      <Router>
        <Provider store={store}>
          <>
            <Header />
            <div className="content">
              {/* <Nav /> */}
              <Route exact path="/" component={LinkImages} />
              <div className="mx-5">
                <Route exact path="/collections" component={RecommendedSection} />
                <Route exact path="/restaurants" component={RestaurantsSection} />
              </div>
            </div>
          </>
        </Provider>
      </Router>
    );
  }
}

export default App;
