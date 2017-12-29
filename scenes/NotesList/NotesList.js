import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import {styles} from './styles';

import {View, Text, SectionList, ActivityIndicator} from 'react-native';

import ListItem from '../../components/ListItem';
import ListSectionHeader from '../../components/ListSectionHeader';


class NotesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: this.props.notes
    }
  }

  render() {
    const notes = this.state.notes;

    return (
      <View style={styles.notesListWrapper}>
        {
          notes.length ?
            <SectionList
              sections={notes}
              renderItem={({item}) => <ListItem itemData={item} />}
              renderSectionHeader={({section}) => <ListSectionHeader title={section.date} />}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              keyExtractor={(item, index) => item + index}
            /> :
            <Text style={styles.notesPlaceholder}>No notes to display</Text>
        }
      </View>
    )
  }
}

NotesList.propTypes = {
  notes: PropTypes.array
}

export default NotesList;
