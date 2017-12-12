import React from 'react';
import {PropTypes} from 'prop-types';

import {TouchableOpacity, Text} from 'react-native';

import {styles} from './styles';

const CreateButton = () => (
  <TouchableOpacity
    style={styles.createButton}
    activeOpacity={0.5}
  >
    <Text style={styles.buttonText}>
      CREATE NEW
    </Text>
  </TouchableOpacity>
)

export default CreateButton;
