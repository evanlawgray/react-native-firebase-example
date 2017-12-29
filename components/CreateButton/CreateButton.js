import React from 'react';
import {PropTypes} from 'prop-types';

import {TouchableOpacity, Text} from 'react-native';

import {styles} from './styles';

const CreateButton = ({onPressButton}) => (
  <TouchableOpacity
    style={styles.createButton}
    activeOpacity={0.5}
    onPress={onPressButton}
  >
    <Text style={styles.buttonText}>
      CREATE NEW
    </Text>
  </TouchableOpacity>
)

CreateButton.propTypes = {
  onPressButton: PropTypes.func
}

export default CreateButton;
