import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FEFEFE',
    flex: 1,
    width: width,
    marginTop: 80,
    paddingVertical: height / 25,
    paddingHorizontal: width / 20,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})
