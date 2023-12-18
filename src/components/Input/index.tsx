import React from 'react';

import {TextInputProps} from 'react-native-paper';

import {Container, TextInput, TextError} from './styles';

type InputProps = {
  errorMessage?: string | undefined;
} & TextInputProps;

export function Input({
  value,
  onChangeText,
  errorMessage,
  ...props
}: InputProps) {
  return (
    <Container>
      <TextInput
        {...props}
        mode="outlined"
        onChangeText={onChangeText}
        value={value}
        error={errorMessage ? true : false}
      />
      {errorMessage && <TextError>{errorMessage}</TextError>}
    </Container>
  );
}
