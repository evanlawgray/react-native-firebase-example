import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import {View} from 'react-native';

import {styles} from './styles';

import NotesList from './NotesList';
import CreateNoteModal from '../CreateNote';
import CreateButton from '../../components/CreateButton';

class NotesListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }
  }

  showCreateModal() {
    this.setState({showModal: true})
  }

  render() {
    return (
      <View style={styles.contentWrapper}>
        {
          this.state.showModal ?
            <CreateNoteModal />:
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
