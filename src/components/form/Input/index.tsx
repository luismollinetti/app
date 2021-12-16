/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { useField } from '@unform/core';
import styles from './styles';

interface InputProps extends TextInputProps {
  name: string;
  label: string;
  inMaxLength?: number;
  AccessoryLeft?: React.ComponentType<any>;
  AccessoryRight?: React.ComponentType<any>;
  rawText?: string;
  onInitialData?: (data: any) => void;
}

function Input({
  name,
  label,
  inMaxLength,
  onChangeText,
  value,
  style,
  placeholder,
  AccessoryLeft,
  AccessoryRight,
  rawText,
  onInitialData,
  ...rest
}: InputProps) {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, registerField, error } = useField(name);
  const defaultInputValue = value || defaultValue;

  useEffect(() => {
    if (onInitialData) onInitialData(defaultValue);
    // @ts-ignore
    inputRef.current.value = defaultValue;
  }, [defaultValue, onInitialData]);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        if (rawText) return rawText;
        if (ref.current) return ref.current.value;
        return '';
      },
      setValue: (ref, newValue) => {
        ref.current.value = newValue;
      },
      clearValue: (ref) => {
        setIsFilled(false);
        setIsFocused(false);
        ref.current.clear();
      },
    });
  }, [fieldName, rawText, registerField]);

  const handleChangeText = useCallback(
    (text: string) => {
      setIsFilled(!!text);
      // @ts-ignore
      if (inputRef.current) inputRef.current.value = text;
      if (onChangeText) onChangeText(text);
    },
    [onChangeText],
  );

  function handleInputBlur() {
    setIsFocused(false);
  }
  function handleInputFocus() {
    setIsFocused(true);
  }
  const widthInput = 100 - (AccessoryLeft ? 10 : 0) - (AccessoryRight ? 10 : 0);

  return (
    <View style={[styles.container, style]}>
      {label && (isFocused || isFilled) && (
        <Text style={styles.label}>{label}</Text>
      )}
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
        }}
      >
        {AccessoryLeft && (
          <AccessoryLeft
            style={[
              styles.accessories,
              (isFocused || isFilled) && { borderColor: '#FFF' },
            ]}
          />
        )}
        <TextInput
          style={[
            styles.input,
            (isFocused || isFilled) && { borderColor: '#FFF' },
            { width: `${widthInput}%` },
          ]}
          ref={inputRef}
          onChangeText={handleChangeText}
          defaultValue={defaultInputValue}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          placeholder={isFocused || isFilled ? placeholder : label}
          maxLength={inMaxLength || 255}
          {...rest}
        />
        {AccessoryRight && (
          <AccessoryRight
            style={[
              styles.accessories,
              (isFocused || isFilled) && {
                borderColor: '#FFF',
              },
            ]}
          />
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}
Input.defaultProps = {
  inMaxLength: 255,
  AccessoryLeft: null,
  AccessoryRight: null,
  rawText: '',
  onInitialData: null,
};
export default Input;
