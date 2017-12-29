import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import {db} from '../../firebase/init';

import {styles} from './styles';

import {View, Text, TextInput, Modal, TouchableOpacity} from 'react-native';

import CommonButton from '../../components/CommonButton';

// DATE HELPER FUNCTIONS

function zeroFill(num) {
  return(num < 10 ? '0' : '') + num;
}

function getDateString() {
  const date = new Date();

  return date.getFullYear() + '-' +
    zeroFill(date.getMonth() + 1) + '-' +
    zeroFill(date.getDate());
}

// COMPONENT

class CreateNoteContainer extends Component {
  constructor(props) {
    super(props);

    const userId = this.props.userId || null;

    this.state = {
      noteTitle: '',
      noteText: '',
      errorMessage: '',
      userId: this.props.userId
    }
  }

  saveNote() {
    const userId = this.state.userId;
    const noteId = Date.now() + userId.toString();
    const dateString = getDateString();
    const noteTitle = this.state.noteTitle;
    const noteText = this.state.noteText;

    try {
      if(userId) {
        db.ref(`notes/${userId}/${noteId}`).set({
          title: noteTitle,
          text: noteText,
          date: dateString
        })
        .then(() => this.props.hideSelf())
        .catch(e => { throw new Error(e) })
      }
    } catch(e) {
      this.setState({errorMessage: 'Sorry, this note couldn\'t be saved :' + e.message});
    }
  }

  render() {

    return (
      <View
        style={styles.wrapper}
      >
        <Text style={styles.mainHeading}>Add a New Note</Text>

        <TextInput
          style={styles.titleInput}
          placeholder='Give it a title...'
          placeholderTextColor='#0F5340'
          onChangeText={text => this.setState({noteTitle: text})}
          value={this.state.noteTitle}
        />

        <TextInput
          style={styles.textInput}
          placeholder='Enter note text here...'
          placeholderTextColor='#0F5340'
          multiline={true}
          onChangeText={text => this.setState({noteText: text})}
          value={this.state.noteText}
        />

        {
          this.state.errorMessage ?
            <Text style={styles.errorText}>{this.state.errorMessage}</Text> : null
        }

        <CommonButton
          onPress={() => this.saveNote()}
          buttonText={'save'.toUpperCase()}
        />
      </View>
    )
  }
}

CreateNoteContainer.propTypes = {
  userId: PropTypes.string,
  hideSelf: PropTypes.func
}

export default CreateNoteContainer;
