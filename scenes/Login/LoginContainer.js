import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import firebase from '../../firebase/init';

import {View, TouchableOpacity, ActivityIndicator} from 'react-native';

import {styles} from './styles';

import Login from './Login';
import TextInput from '../../components/LabelledTextInput';
import CommonButton from '../../components/CommonButton';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
      loading: false
    }
  }

  loginUser(email, password) {
    this.setState({error: '', loading: true});

    const navigator = this.props.navigation;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({error: '', loading: false});
        navigator.navigate('Home');
      })
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
          .then(() => {
            this.setState({error: '', loading: false});
            navigator.navigate('Home');
          })
          .catch(error => this.setState({error: 'Sign-in failed', loading: false}))
      });
  }

  render() {
    return (
      <Login
        error={this.state.error}
        isLoading={this.state.loading}
        loginUser={(email, password) => this.loginUser(email, password)}
      />
    )
  }
}

export default LoginContainer;
