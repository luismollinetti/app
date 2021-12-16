import { StyleSheet, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight(),
    marginBottom: 15,
  },
  tittleContainer: {
    padding: 15,
    height: 70,
    justifyContent: 'center',
  },
  tittleText: {
    color: '#666666',
    fontSize: (Dimensions.get('screen').height / 100) * 2.7,
    fontFamily: 'Ubuntu_500Medium',
  },
  messageContainer: {
    flex: 1,
    padding: 15,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#e4e4e4',
    flexDirection: 'row',
  },
  messageText: {
    color: '#666666',
    fontSize: (Dimensions.get('screen').height / 100) * 2.1,
    fontFamily: 'Ubuntu_500Medium',
    flex: 1,
  },
});

export default styles;
