import React from 'react';
import {PropTypes} from 'prop-types';

import {View, Text, TextInput} from 'react-native';

import {styles} from './styles';

const LabelledInput = ({label, placeholder, value, onChangeText, secureTextEntry, autoCapitalize}) => (
  <View style={styles.wrapper}>
    <Text style={styles.label}>
      {label.toUpperCase()}
    </Text>

    <TextInput
      autoCorrect={false}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize}
      style={styles.input}
    >
    </TextInput>
  </View>
)

LabelledInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool,
  autoCapitalize: PropTypes.string
}

export default LabelledInput;
