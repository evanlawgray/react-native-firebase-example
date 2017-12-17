import { StackNavigator } from 'react-navigation';

import LoginContainer from '../scenes/Login.js';
import NotesListContainer from '../scenes/NotesList';
import HeaderBar from '../components/HeaderBar';

export const RootNavigator = StackNavigator({
  Home: {
    screen: NotesListContainer,
    navigationOptions: {
      header: HeaderBar
    }
  },
  Login: {
    screen: LoginContainer,
    navigationOptions: {
      header: HeaderBar
    }
  }
},{
  initialRouteName: 'Login',
  headerMode: 'float'
});
