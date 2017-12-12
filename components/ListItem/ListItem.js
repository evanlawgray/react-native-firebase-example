import React from 'react';
import {PropTypes} from 'prop-types';

import {View, Text} from 'react-native';

import {styles} from './styles';

const ListItem = ({itemData}) => (
  <View style={styles.listItem}>
    <Text style={styles.title}>
      {itemData.title}
    </Text>
    <Text style={styles.text}>
      {itemData.text}
    </Text>
  </View>
)

ListItem.propTypes = {
  itemData: PropTypes.object
}

export default ListItem;
