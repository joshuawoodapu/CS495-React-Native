import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
