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
          return routeName !== '' && routeName !== '';
        },
      ),
      routes: state.routes.filter(
        (route) =>
          route.name !== '' && route.name !== '',
      ),
    },
  };

  return (
    <DrawerContentScrollView
      style={{ backgroundColor: 'silver' }}
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
      hideStatusBar={false}
      screenOptions={{ 
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

      drawerContent={CustomDrawerContent} 
    >

       <Drawer.Screen
        name="Home"
        component={Home}
        
        options={{
          headerShown:false,
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


