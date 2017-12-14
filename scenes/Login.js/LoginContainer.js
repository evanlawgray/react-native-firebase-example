import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import firebase from 'firebase';

import {View, TouchableOpacity, ActivityIndicator} from 'react-native';

import {styles} from './styles';

import TextInput from '../../components/LabelledTextInput';
import CommonButton from '../../components/CommonButton';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    }
  }

  loginUser() {
    this.setState({error: '', loading: true});

    const{email, password} = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => this.setState({error: '', loading: false}))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
          .then(() => this.setState({error: '', loading: false}))
          .catch(() => this.setState({error: 'Authentication failed', loading: false}))
      })
  }

  render() {
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
          this.state.loading ?
            <ActivityIndicator
              size='large'
              color='#0F5340'
              style={{marginBottom: 60}}
            /> :
            <CommonButton
              onPress={() => this.loginUser()}
              buttonText='Sign Up'
            />
        }
      </View>
    )
  }
}

export default LoginContainer;
