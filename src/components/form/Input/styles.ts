import { StyleSheet, Dimensions } from 'react-native';

const dimensions = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#c1c1c1',
  },
  input: {
    color: '#000',
    fontFamily: 'Ubuntu_500Medium',
    fontSize: (dimensions.height / 100) * 2.3,
    paddingVertical: 10,
  },
  accessories: {
    color: '#c1c1c1',
    fontSize: (dimensions.height / 100) * 3,
    paddingHorizontal: 10,
    paddingTop: 14,
  },
  label: {
    fontSize: (dimensions.height / 100) * 1.4,
    lineHeight: (dimensions.height / 100) * 2,
    color: '#c1c1c1',
    fontFamily: 'Ubuntu_500Medium',
  },
  error: {
    fontSize: (dimensions.height / 100) * 1.4,
    lineHeight: (dimensions.height / 100) * 2,
    color: '#ce0901',
    fontFamily: 'Ubuntu_500Medium',
  },
});

export default styles;
