import { StackNavigator } from 'react-navigation';

import LoginContainer from '../scenes/Login';
import NotesListContainer from '../scenes/NotesList';
import HeaderBar from '../components/HeaderBar';

export const RootNavigator = StackNavigator({
  Home: {
    screen: NotesListContainer,
    navigationOptions: {
      header: HeaderBar,
      headerTitle: 'Notes'
    }
  },
  Login: {
    screen: LoginContainer,
    navigationOptions: {
      header: HeaderBar,
      headerTitle: 'Login'
    }
  }
},{
  initialRouteName: 'Login',
  headerMode: 'float'
});
