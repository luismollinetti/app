
import React from 'react';
import 'reflect-metadata';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading'


import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';


import { RootSiblingParent } from 'react-native-root-siblings';
import Routes from './src/Rotas';




export default function App() {

  const [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
 
  });
 
  if (!fontsLoaded) 
  return(<AppLoading/>)  


  
  return (
    <NavigationContainer>
        <RootSiblingParent>
            <Routes />
        </RootSiblingParent>
    </NavigationContainer>
        );


}




  


  //if (!fontsLoaded) return <AppLoading />;

 // return (
  //  <NavigationContainer>
 //       <MyStack />
////    </NavigationContainer>
//  );

 // return (
    //  <Login />
//  );
//}


