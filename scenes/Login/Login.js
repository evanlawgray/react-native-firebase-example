import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import {styles} from './styles';

import {View, TouchableOpacity, ActivityIndicator} from 'react-native';

import TextInput from '../../components/LabelledTextInput';
import CommonButton from '../../components/CommonButton';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  render() {
    const {error, isLoading, loginUser} = this.props;

    return (
      <View style={styles.wrapper}>
        <TextInput
          label='Email Address'
          placeholder='example@gmail.com'
          value={this.state.email}
          onChangeText={email => this.setState({email})}
          secureTextEntry={false}
          autoCapitalize={'none'}
        />

        <TextInput
          label='Password'
          placeholder='enter password'
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          secureTextEntry={true}
        />
        {
          isLoading ?
            <ActivityIndicator
              size='large'
              color='#0F5340'
              style={{marginBottom: 80}}
            /> :
            <CommonButton
              onPress={() => loginUser(this.state.email, this.state.password)}
              buttonText={error || 'Sign In'}
            />
        }
      </View>
    )
  }
}

Login.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  loginUser: PropTypes.func
}

export default Login;
