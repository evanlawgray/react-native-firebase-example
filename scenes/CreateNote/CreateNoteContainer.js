import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import {styles} from './styles';

import {View, Text, TextInput, Modal, TouchableOpacity} from 'react-native';

class CreateNoteContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noteTitle: '',
      noteText: ''
    }
  }

  render() {
    const props = this.props;

    return (
      <View
        style={styles.wrapper}
      >
        <Text style={styles.mainHeading}>Add a New Note</Text>
        <TextInput
          style={styles.titleInput}
          placeholder='Give it a title...'
          placeholderTextColor='#0F5340'
          onChangeText={({text}) => this.setState({noteTitle: text})}
          value={this.state.noteTitle}
        >
        </TextInput>

        <TextInput
          style={styles.textInput}
          placeholder='Enter text here...'
          placeholderTextColor='#0F5340'
          multiline={true}
          onChangeText={({text}) => this.setState({noteText: text})}
          value={this.state.noteText}
        >
        </TextInput>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.buttonText}>
            SAVE
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default CreateNoteContainer;
