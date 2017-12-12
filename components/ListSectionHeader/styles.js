import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  itemHeader: {
    backgroundColor: '#FAFAFA',
    padding: 15,
    borderRadius: 5
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F74A4D',
  }
})
