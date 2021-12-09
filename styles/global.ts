import { StyleSheet, Dimensions } from 'react-native';


const dimensions = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  defaultColor: {
    color: '#947c7b',
  },
  scrollContainer: {
    flex: 1,
    display: 'flex',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    height: 50,
    maxHeight: 50,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonContainerGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonText: {
    color: '#947c7b',
    fontSize: (dimensions.height / 100) * 2,
    fontFamily: 'Ubuntu_700Bold',
  },
  buttonBottom: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  viewBottom: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  containerPageBar: {
    textAlign: 'left',
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: '100%',
    padding: 18,
    borderBottomWidth: 1,
    borderColor: 'rgba(206,9,1,0.3)',
  },
  fontSlim: {
    fontFamily: 'Ubuntu_300Light',
  },
  fontMedium: {
    fontFamily: 'Ubuntu_500Medium',
  },
  fontBold: {
    fontFamily: 'Ubuntu_700Bold',
  },
  textPageBar: {
    fontSize: (dimensions.height / 100) * 2.7,
    fontFamily: 'Ubuntu_700Bold',
  },
  h1Text: {
    fontSize: (dimensions.height / 100) * 4.7,
    fontFamily: 'Ubuntu_700Bold',
  },
  h2Text: {
    fontSize: (dimensions.height / 100) * 3.5,
    fontFamily: 'Ubuntu_500Medium',
  },
  h3Text: {
    fontSize: (dimensions.height / 100) * 2.3,
    fontFamily: 'Ubuntu_300Light',
  },
  cardTittle: {
    fontSize: (dimensions.height / 100) * 2,
    fontFamily: 'Ubuntu_500Medium',
    textAlign: 'center',
  },
  cardResult: {
    fontSize: (dimensions.height / 100) * 3,
    fontFamily: 'Ubuntu_700Bold',
    textAlign: 'center',
    marginTop: 8,
    color: '#ce0901',
  },
  scrollContainerNavigation: {
    flex: 1,
    padding: 5,
    width: '100%',
  },
  floatingButtonActions: {
    fontSize: (dimensions.height / 100) * 2.3,
    marginTop: 0,
    marginRight: -15,
    paddingVertical: 3,
    paddingHorizontal: 8,
    fontFamily: 'Ubuntu_700Bold',
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
