import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../assets/icons';
import Clientes from '../pages/Clientes';
import Produtos from '../pages/Produtos';

import Login from '../pages/Login';

const StackRoutes = createStackNavigator();

function AppRoutes() {
  return (
    <StackRoutes.Navigator 
      
       screenOptions={{ 
              cardStyle: { backgroundColor: 'white' } ,
              headerShown: false    
       }}
       initialRouteName="Login"
  >        
      <StackRoutes.Screen name="Login" component={Login}  />   
    
      <StackRoutes.Screen name="Produtos" component={Produtos} />    
      <StackRoutes.Screen name="Clientes" component={Clientes} />      
      <StackRoutes.Screen name="Home" component={Home} />    
    </StackRoutes.Navigator>
  );
}

export default AppRoutes;
