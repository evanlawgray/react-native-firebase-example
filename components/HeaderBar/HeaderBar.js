import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import {styles} from './styles';

import {View, Text, StyleSheet, Dimensions} from 'react-native';

const HeaderBar = ({scene}) => (
  <View style={styles.headerBar}>
    <Text style={styles.headerText}>
      {scene.route.routeName.toUpperCase()}
    </Text>
  </View>
)

HeaderBar.propTypes = {
  scene: PropTypes.object
}

export default HeaderBar;
