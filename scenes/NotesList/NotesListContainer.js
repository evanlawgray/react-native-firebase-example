import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import firebase from '../../firebase/init';

import {View} from 'react-native';

import {styles} from './styles';

import NotesList from './NotesList';
import CreateNoteModal from '../CreateNote';
import CreateButton from '../../components/CreateButton';

class NotesListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: null,
      showModal: false
    }
  }

  componentDidMount() {
    const currentUser = firebase.auth().currentUser.uid;
    console.log('CURRENT USER:', currentUser)

    this.setState({userId: currentUser});
  }

  showCreateModal() {
    this.setState({showModal: true})
  }

  render() {
    const {userId} = this.state;

    return (
      <View style={styles.contentWrapper}>
        {
          this.state.showModal ?
            <CreateNoteModal userId={userId ? userId : null}/>:
            <View>
              <NotesList />
              <CreateButton onPressButton={() => this.showCreateModal()} />
            </View>
        }
      </View>
    )
  }
}

export default NotesListContainer;
