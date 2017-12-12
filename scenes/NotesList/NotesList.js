import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import {View, ScrollView, Text, SectionList} from 'react-native';

import ListItem from '../../components/ListItem';
import ListSectionHeader from '../../components/ListSectionHeader';

const mockList = [{
  date: 'Dec. 9 2017', data: [
    {title: 'meeting notes', text: 'note1'}, {title: 'React Native meetup', text: 'note2'}
    ]},
    {date: 'Dec. 10 2017', data: [
      {title: 'Groceries', text: 'note1'}, {title: 'to dos', text: 'note2'}
    ]},
    {date: 'Dec. 11 2017', data: [
      {title: 'a note', text: 'note1'}, {title: 'another note', text: 'note2'}, {title: 'some note', text: 'note3'}
    ]}];

import {styles} from './styles';

class NotesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: mockList
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.notes}
          renderItem={({item}) => <ListItem itemData={item} />}
          renderSectionHeader={({section}) => <ListSectionHeader title={section.date} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    )
  }
}



export default NotesList;
