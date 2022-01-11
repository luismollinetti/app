import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home  from '../pages/Home';
import Clientes from '../pages/Clientes';
import Produtos from '../pages/Produtos';
import Login from '../pages/Login';
import { View, TouchableOpacity, Image } from 'react-native';


const stackRoutes = createStackNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({ navigation }) {
  return (
    <stackRoutes.Navigator initialRouteName="FirstPage">
      <stackRoutes.Screen
        name="FirstPage"
        component={Home}
        options={{
          title: 'First Page', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </stackRoutes.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <stackRoutes.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <stackRoutes.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'Second Page', //Set Header Title
        }}
      />
      <stackRoutes.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: 'Third Page', //Set Header Title
        }}
      />
    </stackRoutes.Navigator>
  );
}


export default function AppRoutes() {
  return (
    <stackRoutes.Navigator
     
    screenOptions={{ cardStyle: { backgroundColor: 'white' } }}
    initialRouteName="Login">
        
    <stackRoutes.Screen name="Login" component={Login} />
    <stackRoutes.Screen name="Home" component={Home} />
    <stackRoutes.Screen name="Produtos" component={Produtos} />
    <stackRoutes.Screen name="Clientes" component={Clientes} />
  </stackRoutes.Navigator>
  );
}


