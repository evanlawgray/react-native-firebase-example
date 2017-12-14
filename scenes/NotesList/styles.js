import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    width: width,
    backgroundColor: '#FFF',
    paddingTop: height / 25,
    paddingHorizontal: width / 20
  },
  separator: {
    height: 0,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#D1D0D8'
  }
})
