import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/components/common/index';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyA11J8090m0HeBUnI5_ys55cgbO4bIK2mQ',
        authDomain: 'auth-42204.firebaseapp.com',
        databaseURL: 'https://auth-42204.firebaseio.com',
        projectId: 'auth-42204',
        storageBucket: 'auth-42204.appspot.com',
        messagingSenderId: '433548234975'
    });

    firebase.auth().onAuthStateChanged((user) => {
      console.log(this.state);
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ flexDirection: 'row', paddingTop: 10 }}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return ( 
          <View style={{ flexDirection: 'row', paddingTop: 10 }}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
