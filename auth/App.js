import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common/index';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyA11J8090m0HeBUnI5_ys55cgbO4bIK2mQ',
        authDomain: 'auth-42204.firebaseapp.com',
        databaseURL: 'https://auth-42204.firebaseio.com',
        projectId: 'auth-42204',
        storageBucket: 'auth-42204.appspot.com',
        messagingSenderId: '433548234975'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;