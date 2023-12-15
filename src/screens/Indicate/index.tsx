import React from 'react';

import axios from 'axios';
import * as yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Button, TextInput} from 'react-native-paper';

import {Container} from './styles';
import {Text} from 'react-native';
import {Input} from '../../components/Input';

export function Indicate() {
  const schema = yup.object({
    friendsName: yup.string().required('Informe o Nome!'),
    friendsEmail: yup
      .string()
      .email('Email Invalido')
      .required('Informe o Email!'),
    friendsPhone: yup
      .string()
      .min(14, 'Celular Invalido')
      .required('Informe o Celular'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)});

  const sendIndication = data => {
    const {friendsName, friendsPhone, FriendsEmail} = data;

    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const formatedDate = year + '-' + month + '-' + day;

    axios
      .post('/api/Indicacao', {
        Indicacao: {
          CodigoAssociacao: '601',
          DataCriacao: formatedDate,
          CpfAssociado: '123123',
          EmailAssociado: 'alksjd',
          NomeAssociado: 'Teste',
          TelefoneAssociado: 'asd',
          PlacaVeiculoAssociado: 'asd',
          NomeAmigo: friendsName,
          TelefoneAmigo: friendsPhone,
          EmailAmigo: FriendsEmail,
        },
        Remetente: 'romulo.marques@hinovamobile.com.br',
        Copias: [],
      })
      .then(function (response) {
        console.log(response);
      });
  };

  const phoneMask = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d{4})(\d)/, '$1-$2');
  };

  return (
    <Container>
      <Controller
        control={control}
        name="friendsName"
        render={({field: {onChange, value}}) => (
          <Input
            label={'Nome do Indicado'}
            onChangeText={onChange}
            value={value}
            errorMessage={errors?.friendsName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="friendsPhone"
        render={({field: {onChange, value}}) => (
          <Input
            keyboardType="number-pad"
            label={'Celular do Indicado'}
            onChangeText={text => onChange(phoneMask(text))}
            value={value}
            errorMessage={errors?.friendsPhone?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="friendsEmail"
        render={({field: {onChange, value}}) => (
          <Input
            label={'Email do Indicado'}
            keyboardType="email-address"
            value={value}
            onChangeText={onChange}
            errorMessage={errors?.friendsEmail?.message}
          />
        )}
      />

      <Button mode="contained" onPress={handleSubmit(sendIndication)}>
        Enviar
      </Button>
    </Container>
  );
}
