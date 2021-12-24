/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import DrawerHeader from '../components/DrawerHeader';


import Clientes from '../pages/Clientes';

import Produtos from '../pages/Produtos';
import Logout from '../pages/Logout';

import Home from '../pages/Home';


import {
  Dashboard,
  Payment,
  Products as ProductsIcon,
  Request,
  Clients,
  LogOutMenu,
} from '../assets/icons';



const Drawer = createDrawerNavigator();


function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { state } = props;
  const filteredProps = {
    ...props,
    state: {
      ...state,
      routeNames: state.routeNames.filter(
        // To hide single option
        // (routeName) => routeName !== 'HiddenPage1',
        // To hide multiple options you can add & condition
        (routeName) => {
          return routeName !== 'CustomersAdd' && routeName !== 'RequestsAdd';
        },
      ),
      routes: state.routes.filter(
        (route) =>
          route.name !== 'CustomersAdd' && route.name !== 'RequestsAdd',
      ),
    },
  };

  return (
    <DrawerContentScrollView
      style={{ backgroundColor: 'red' }}
      {...filteredProps}
    >
      <DrawerHeader />
      <DrawerItemList {...filteredProps} />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (

    <Drawer.Navigator 
      initialRouteName="Home"

      drawnerStyle={{
        backgroundColor:"#e6e6e6"
      }}
    
    >

       <Drawer.Screen
        name="Home"
        component={Home}
        options={{
        gestureEnabled: true  
         //  drawerIcon: ({ color }) => <Clients style={{ color }} size={18} />
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


