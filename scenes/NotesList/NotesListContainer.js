import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import firebase, {db} from '../../firebase/init';

import {View, ActivityIndicator} from 'react-native';

import {styles} from './styles';

import NotesList from './NotesList';
import CreateNoteModal from '../CreateNote';
import CreateButton from '../../components/CreateButton';

class NotesListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notesList: null,
      userId: null,
      showModal: false
    }
  }

  componentDidMount() {
    const currentUserId = firebase.auth().currentUser.uid;
    const notesRef = db.ref(`notes/${currentUserId}`);

    notesRef.on('value', snapshot => {
      const collection = snapshot.val();

      // If the user has notes stored in the database (collection is not null), get the keys of the
      // firebase JSON object and reduce over them to get an array of notes grouped and sorted
      // by creation date. const notesList has the shape: [{date: <string>, data: [array]}]
      if(collection) {
        const keys = Object.keys(collection);
        const notesList = keys.reduceRight((acc, key) => {
          const note = collection[key];

          if(acc.filter(item => item.date === note.date).length === 0) {
            acc.push({date: note.date, data: [note]});
          } else {
            acc.forEach(item => {
              if(item.date === note.date) item.data.push(note);
            });
          }
          return acc;
        }, []);

        this.setState({userId: currentUserId, notesList: notesList});
      }  else { this.setState({userId: currentUserId, notesList: []}) }
    });
  }

  showCreateModal() {
    this.setState({showModal: true});
  }

  hideCreateModal() {
    this.setState({showModal: false});
  }

  render() {
    const {userId, notesList} = this.state;

    return (
      <View style={styles.contentWrapper}>
        {
          this.state.showModal ?
            <CreateNoteModal
              userId={userId}
              hideSelf={() => this.hideCreateModal()}
            /> :
            <View>
              {
                notesList ?
                  <View>
                    <NotesList notes={notesList} />
                    <CreateButton onPressButton={() => this.showCreateModal()} />
                  </View> :
                  <ActivityIndicator
                    size='large'
                    color='#0F5340'
                    style={{marginTop: 100}}
                  />
              }
            </View>
        }
      </View>
    )
  }
}

export default NotesListContainer;
