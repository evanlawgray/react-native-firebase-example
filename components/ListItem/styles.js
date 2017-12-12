import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#FEFEFE',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F5340',
    padding: 5,
  },
  text: {
    fontSize: 16,
    color: '#4E5553',
    padding: 5
  }
})
