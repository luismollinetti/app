import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home  from '../pages/Home';
import Clientes from '../pages/Clientes';
import Produtos from '../pages/Produtos';
import Login from '../pages/Login';
import Welcome from '../pages/Welcome';

const stackRoutes = createStackNavigator();

export default function AppRoutes() {
  return (
    <stackRoutes.Navigator
     
    screenOptions={{ cardStyle: { backgroundColor: 'white' } }}
    initialRouteName="Welcome">
    <stackRoutes.Screen name="Welcome" component={Welcome} />        
    <stackRoutes.Screen name="Login" component={Login} />
    <stackRoutes.Screen name="Home" component={Home} />
    <stackRoutes.Screen name="Produtos" component={Produtos} />
    <stackRoutes.Screen name="Clientes" component={Clientes} />
  </stackRoutes.Navigator>
  );
}


