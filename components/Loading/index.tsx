import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import loadAnimation from '../../src/assets/load.json';
import styles from './styles';

export default function Loading(){
  return (
    <View style={styles.container}>
      <LottieView
        source={loadAnimation}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
};

