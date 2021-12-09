
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Signin from './src/pages/Signin';
import AppLoading from 'expo-app-loading';
import 'reflect-metadata';

import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';




export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  

  return (
     <Signin />
  );
}


