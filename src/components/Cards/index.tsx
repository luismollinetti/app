import React from 'react';
import { ViewStyle, StyleProp, View } from 'react-native';

import styles from './styles';

interface OrderProps {
  children: Array<any> | any;
  bgColor?: string;
  addStyles?: StyleProp<ViewStyle>;
}

const SingleCard = ({ children, bgColor, addStyles }: OrderProps) => {
  return (
    <View
      style={[
        styles.cardContainer,
        addStyles,
        { backgroundColor: bgColor || '#FFF' },
      ]}
    >
      {children}
    </View>
  );
};

SingleCard.defaultProps = {
  bgColor: '#FFF',
  addStyles: [],
};
export default SingleCard;
