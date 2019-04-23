import React, { Component } from 'react';
import { Provider } from 'react-redux';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import store from '../../store';

import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import TopRatedSection from '../TopRatedSection/TopRatedSection';

import './App.css';


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <>
          <Header />
          <div className="content">
            <Nav />
            <div className="mx-5">
              <TopRatedSection />
            </div>
          </div>
        </>
      </Provider>
    );
  }
}

export default App;
