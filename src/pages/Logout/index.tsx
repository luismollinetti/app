import * as React from 'react';
import { BackHandler } from 'react-native';


type LogoutType = {
  navigation: any;
};
export default function Logout(){

  BackHandler.exitApp();

  return <></>;
};


