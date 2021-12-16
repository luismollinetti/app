import { StyleSheet, Dimensions } from 'react-native';

const dimensions = Dimensions.get('screen');

const styles = StyleSheet.create({
  updateContainer: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Ubuntu_300Light',
    fontSize: (dimensions.height / 100) * 1.8,
  },
  updateTextBold: {
    fontFamily: 'Ubuntu_500Medium',
  },
  doubleView: {
    flexDirection: 'row',
  },
  cardText: {
    paddingTop: 5,
    textAlign: 'center',
    fontSize: (dimensions.height / 100) * 1.8,
  },
});

export default styles;
