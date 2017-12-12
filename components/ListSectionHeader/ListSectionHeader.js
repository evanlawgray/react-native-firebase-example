import React from 'react';
import {PropTypes} from 'prop-types';

import {View, Text} from 'react-native';

import {styles} from './styles';

const ListSectionHeader = ({title}) => (
  <View style={styles.itemHeader}>
    <Text style={styles.headerText}>
      {title}
    </Text>
  </View>
)

ListSectionHeader.propTypes = {
  title: PropTypes.string
}

export default ListSectionHeader;
