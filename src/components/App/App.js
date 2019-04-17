import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../../store';

import './App.css';


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {/* Add your components */}
        </div>
      </Provider>
    );
  }
}

export default App;
