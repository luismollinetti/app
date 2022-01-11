import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { ImageBackground, Text, Image, View } from 'react-native';

import globals from '../../../styles/global';
import styles from './styles';
import logo from '../../assets/logo/wm-shadow.png';
import imgBackground from '../../assets/intro/bg-intro.png';
import Button from '../../components/Button';

import Loading from '../../components/Loading';


export default function Welcome() {  
  
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  async function handleSignIn() {
    setIsLoading(true);


      navigation.navigate('Login');
 


  }
  

  if (isLoading) return <Loading />;

  return (
    <View style={globals.container}>
      <ImageBackground source={imgBackground} style={globals.imageBackground}>
        <View style={globals.wrapperContainer}>
          <Image source={logo} style={styles.image} resizeMode="contain" />

          <Text style={styles.title}>
            <Text style={globals.h1Text}>Windel Mobile</Text>
          </Text>

          <Text style={styles.subtitle}>
            <Text style={globals.h3Text}>
              Esteja sempre conectado a sua empresa de forma rápida e fácil!
            </Text>
          </Text>

          <Text style={styles.title}>
            <Text style={globals.h2Text}>...</Text>
          </Text>
        </View>

        <View style={globals.buttonBottom}>
          <Button title="COMEÇAR" onPress={handleSignIn} />
        </View>
      </ImageBackground>
    </View>
  );
};

