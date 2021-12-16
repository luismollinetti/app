/* eslint-disable global-require */
import React, { PureComponent } from 'react';
import { View, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { FloatingAction } from 'react-native-floating-action'; // eslint-disable-line import/no-unresolved

class FloatingActionShadowScreen extends PureComponent {
  static navigationOptions = {
    title: 'Shadow',
  };

  render() {
    const actions = [
      {
        text: 'Accessibility',
        icon: require('../../../assets/logo/wm-shadow.png'),
        name: 'bt_accessibility',
        position: 2,
      },
      {
        text: 'Language',
        icon: require('../../../assets/logo/wm-shadow.png'),
        name: 'bt_language',
        position: 1,
      },
      {
        text: 'Location',
        icon: require('../../../assets/logo/wm-shadow.png'),
        name: 'bt_room',
        position: 3,
      },
      {
        text: 'Video',
        icon: require('../../../assets/logo/wm-shadow.png'),
        name: 'bt_videocam',
        position: 4,
      },
    ];

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
    });

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <FloatingAction
            shadow={{
              shadowOpacity: 0,
              shadowColor: '#FF4B4B',
            }}
            actions={actions}
            position="right"
            onPressItem={(name) => {
              Alert.alert('Icon pressed', `the icon ${name} was pressed`);
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default FloatingActionShadowScreen;
