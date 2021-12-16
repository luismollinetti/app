import React from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import globals from '../../../styles/global';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  gradient?: string[];
  styleText?: StyleProp<TextStyle>;
  AccessoryLeft?: React.ComponentType<any>;
  AccessoryRight?: React.ComponentType<any>;
}

function Button({
  title,
  gradient = ['#db340e', '#ce0901'],
  AccessoryLeft,
  AccessoryRight,
  style,
  styleText,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[globals.buttonContainer, style]}
      activeOpacity={0.7}
      {...rest}
    >
      <LinearGradient colors={gradient} style={globals.buttonContainerGradient}>
        {AccessoryLeft && <AccessoryLeft />}
        <Text style={[globals.buttonText, styleText]}> {title} </Text>
        {AccessoryRight && <AccessoryRight />}
      </LinearGradient>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  gradient: ['#db340e', '#ce0901'],
  AccessoryLeft: null,
  AccessoryRight: null,
  styleText: null,
};

export default Button;
