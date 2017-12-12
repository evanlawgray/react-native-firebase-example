/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import HeaderBar from './components/HeaderBar';
import NotesList from './scenes/NotesList';
import CreateButton from './components/CreateButton';
import CreateNoteModal from './scenes/CreateNote';

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

  render() {
    return (
      <View style={styles.container}>
        <HeaderBar />
          {
            this.state.showModal ?
              <View style={styles.contentWrapper}>
                <CreateNoteModal />
              </View> :
              <View style={styles.contentWrapper}>
                <NotesList />
                <CreateButton />
              </View>
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  contentWrapper: {
    marginTop: 80,
  }
});
