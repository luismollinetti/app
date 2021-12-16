import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Menu, UserReload } from '../../assets/icons';


import styles from './styles';

interface ToolbarProps {
  navigation: any;
  company: string;
  seller: string;
}

export default function Toolbar({ navigation, company, seller }: ToolbarProps) {



  const handlerOpenMenu = () => {
    navigation.openDrawer();
  };
  
  return (
    <LinearGradient
      colors={['#ce0901', '#ce0901', '#8a220b7f']}
      style={styles.container}
    >
      <StatusBar
        translucent
        backgroundColor="#ce0901"
        barStyle="light-content"
      />

      <TouchableOpacity style={styles.touchable} onPress={handlerOpenMenu}>
        <Menu size={25} color="#FFF" />
      </TouchableOpacity>
      <View style={styles.containerText}>
        <Text style={styles.textCompany}>{company}</Text>
        <Text style={styles.textSeller}>{seller}</Text>
      </View>
      <TouchableOpacity style={styles.touchable} >
        <UserReload size={25} color="#FFF" />
      </TouchableOpacity>
    </LinearGradient>
  );
}
