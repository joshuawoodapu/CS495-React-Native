import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyDkvHfUre_Wnfab0bU4aA7UeGjeldxXCSs",
      authDomain: "one-time-password-3f614.firebaseapp.com",
      databaseURL: "https://one-time-password-3f614.firebaseio.com",
      projectId: "one-time-password-3f614",
      storageBucket: "one-time-password-3f614.appspot.com",
      messagingSenderId: "917387441052"  
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
