import React from 'react';
import {PropTypes} from 'prop-types';

import {View, Text} from 'react-native';

import {styles} from './styles';

const ListItem = ({itemData: {title, text}}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  )
}

ListItem.propTypes = {
  itemData: PropTypes.objectOf(PropTypes.string)
}

export default ListItem;
