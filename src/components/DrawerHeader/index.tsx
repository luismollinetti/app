import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function DrawerHeader () {
  const userName = 'Luis';

  return (
    <View style={styles.container}>
      <View style={styles.tittleContainer}>
        <Text style={styles.tittleText}>Olá, {userName}</Text>
      </View>
    </View>
  );
};


