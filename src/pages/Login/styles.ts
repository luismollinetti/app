import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  image: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.3,
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    color: '#7a7777',
  },
  subtitle: {
    marginTop: 5,
    width: Dimensions.get('window').width * 0.8,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: '#947c7b',
  },
  formStyle: {
    marginTop: Dimensions.get('window').height * 0.1,
  },
});
