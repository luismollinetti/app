/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions } from 'react-native';


import Clientes from '../Clientes';

import Produtos from '../Produtos';
import Logout from '../Logout';

import Home from '../Home';
import styles from './styles';

import {
  Dashboard,
  Payment,
  Products as ProductsIcon,
  Request,
  Clients,
  LogOutMenu,
} from '../../assets/icons';



const Drawer = createDrawerNavigator();

export default function Principal() {
  return (

    <Drawer.Navigator
        initialRouteName="Home"
        options={{headerShown: false}}
        drawerContentOptions={{
          itemStyle: {
            marginLeft: 0,
            paddingLeft: 8,
            flexDirection: 'column',
            width: '90%',
            borderTopStartRadius: 0,
            borderBottomStartRadius: 0,
            borderBottomEndRadius: 25,
            borderTopEndRadius: 25,
          },
          activeTintColor: '#FFF',
          activeBackgroundColor: '#ce0901',
          contentContainerStyle: {
            paddingTop: 0,
            marginTop: 0,
          },
          labelStyle: {
            fontFamily: 'Ubuntu_500Medium',
            fontSize: (Dimensions.get('screen').height / 100) * 2.1,
            marginLeft: -15,
            width: '125%',
          },
          style: {},
        }}
      >

       <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({ color }) => <Clients style={{ color }} size={18} />,
        }}
      />

     <Drawer.Screen
        name="Clientes"
        component={Clientes}
        options={{
          drawerLabel: 'Clientes',
          drawerIcon: ({ color }) => <Clients style={{ color }} size={18} />,
        }}
      />
     <Drawer.Screen
        name="Produtos"
        component={Produtos}
        options={{
          drawerLabel: 'Produtos',
          drawerIcon: ({ color }) => (
            <ProductsIcon style={{ color }} size={23} />
          ),
        }}
     />
     <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          drawerLabel: 'Sair',
          drawerIcon: ({ color }) => <LogOutMenu style={{ color }} size={23} />,
        }}
     />
   

  </Drawer.Navigator>

  )
}


