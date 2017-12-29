import React from 'react';
import {PropTypes} from 'prop-types';

import {styles} from './styles';

import {Text, TouchableOpacity} from 'react-native';

const CommonButton = ({onPress, buttonText}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.5}
    style={styles.commonButton}
  >
    <Text style={styles.buttonText}>
      {buttonText.toUpperCase()}
    </Text>
  </TouchableOpacity>
)

CommonButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string
}

export default CommonButton;
