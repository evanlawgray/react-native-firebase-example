import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#EFEFEF',
    width: width,
    paddingVertical: height / 20,
    paddingHorizontal: width / 20,
    flex: 1,
    alignItems: 'center'
  },
  mainHeading: {
    fontSize: 22,
    color: '#0F5340'
  },
  titleInput: {
    backgroundColor: '#FFF',
    height: 45,
    width: width * 0.8,
    padding: 10,
    marginVertical: 25,
    borderRadius: 5,
    fontSize: 20,
  },
  textInput: {
    backgroundColor: '#FFF',
    height: 150,
    width: width * 0.8,
    padding: 10,
    borderRadius: 5,
    fontSize: 16
  },
  saveButton: {
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
  },
  errorText: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#F74A4D'
  }
})
