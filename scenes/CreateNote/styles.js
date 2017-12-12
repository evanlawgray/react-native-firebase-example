import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FEFEFE',
    flex: 1,
    width: width
  }
})
