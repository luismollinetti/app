import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.16,
      },
      android: {
        elevation: 8,
      },
    }),
    justifyContent: 'center',
  },
});
