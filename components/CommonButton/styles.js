import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  commonButton: {
    backgroundColor: '#0F5340',
    flex: 0.50,
    width: width * 0.75,
    marginTop: 35,
    marginBottom: 25,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FEFEFE',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
  }
})
