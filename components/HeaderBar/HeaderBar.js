import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import {View, Text, StyleSheet, Dimensions} from 'react-native';

const HeaderBar = () => (
  <View style={styles.headerBar}>
    <Text style={styles.headerText}>
      NOTES
    </Text>
  </View>
)

const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: '#0F5340',
    height: 80,
    width: Dimensions.get('window').width,
    position: 'absolute',
    top: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default HeaderBar;
