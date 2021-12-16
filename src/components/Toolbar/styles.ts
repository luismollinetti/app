import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    height: 60 + Constants.statusBarHeight,
    padding: 10,
    backgroundColor: '#ce0901',
    flexDirection: 'row',
    marginTop: -Constants.statusBarHeight,
    paddingTop: Constants.statusBarHeight,
  },
  touchable: {
    width: Dimensions.get('window').width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCompany: {
    color: '#FFF',
    fontSize: (Dimensions.get('screen').height / 100) * 2.1,
    fontFamily: 'Ubuntu_700Bold',
  },
  textSeller: {
    color: '#FFF',
    fontSize: (Dimensions.get('screen').height / 100) * 1.9,
    fontFamily: 'Ubuntu_300Light',
  },
});
