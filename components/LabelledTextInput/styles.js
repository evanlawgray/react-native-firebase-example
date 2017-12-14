import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: 25,
    flex: 0.8,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  label: {
    fontSize: 22,
    color: '#0F5340',
    marginBottom: 10,
  },
  input: {
    height: 30,
    width: width * 0.5,
    textAlign: 'center'
  }
})
