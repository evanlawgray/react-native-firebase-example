import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  contentWrapper: {
    marginTop: 80,
    height: height - 80,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  notesListWrapper: {
    flex: 0.8,
    width: width,
    backgroundColor: '#FFF',
    paddingTop: height * 0.03,
    paddingHorizontal: height * 0.03,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  separator: {
    height: 0,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#D1D0D8'
  },
  notesPlaceholder: {
    color: '#EFEFEF',
    fontSize: 22,
    fontStyle: 'italic'
  }
})
