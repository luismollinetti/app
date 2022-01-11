import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  spacing: {
    height: Dimensions.get('window').width * 0.5,
  },
  image: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.3,
  },
  title: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
  subtitle: {
    marginTop: 10,
    width: Dimensions.get('window').width * 0.8,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: '#FFFFFF',
  },
});
