/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions,
  Text,
  View,
  StatusBar
} from 'react-native';

import firebase from 'firebase';

import LoginContainer from './scenes/Login.js';
import NotesListContainer from './scenes/NotesList';
import HeaderBar from './components/HeaderBar';

import { StackNavigator } from 'react-navigation';

const RootNavigator = StackNavigator({
  Home: {
    screen: NotesListContainer,
    navigationOptions: {
      header: HeaderBar
    }
  },
  Login: {
    screen: LoginContainer,
    navigationOptions: {
      header: HeaderBar
    }
  }
},{
  initialRouteName: 'Login',
  headerMode: 'float'
});

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor() {
    super();

    this.state = {
      showModal: false,
      notes: []
    }
  }

  componentDidMount() {
    /**
     * Initialize firebase app
     */

    const config = {
        apiKey: "AIzaSyBueWU4tsKsT2pxvWYSkblJUBhI0cksqNU",
        authDomain: "notes-app-afcb4.firebaseapp.com",
        databaseURL: "https://notes-app-afcb4.firebaseio.com",
        projectId: "notes-app-afcb4",
        storageBucket: "notes-app-afcb4.appspot.com",
        messagingSenderId: "218040939865"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <RootNavigator />
      </View>
    );
  }
}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  contentWrapper: {
    marginTop: 80,
  }
});
