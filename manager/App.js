import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyARI5u6x4YSfdhOeY3ZSiKKQPYDewdxS78',
      authDomain: 'manager-93a97.firebaseapp.com',
      databaseURL: 'https://manager-93a97.firebaseio.com',
      projectId: 'manager-93a97',
      storageBucket: 'manager-93a97.appspot.com',
      messagingSenderId: '956565035715'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
