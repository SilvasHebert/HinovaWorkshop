import React from 'react';

import axios from 'axios';
import * as yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Button} from 'react-native-paper';

import {Input} from '../../components/Input';
import {Container, Title, Form, Header} from './styles';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';
import {getTodaysDate} from '../../utils/date';

type FormValues = {
  friendsName: string;
  friendsEmail: string;
  friendsPhone: string;
};

export function Indicate() {
  const schema = yup.object({
    friendsName: yup.string().required('Informe o Nome!'),
    friendsEmail: yup
      .string()
      .email('Email inválido')
      .required('Informe o Email!'),
    friendsPhone: yup
      .string()
      .min(14, 'Numero inválido')
      .max(14, 'Numero inválido')
      .required('Informe o Celular'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({resolver: yupResolver<FormValues>(schema)});

  const sendIndication = (data: FormValues) => {
    const {friendsName, friendsPhone, friendsEmail} = data;

    const date = getTodaysDate();

    axios
      .post('/api/Indicacao', {
        Indicacao: {
          CodigoAssociacao: '601',
          DataCriacao: date,
          EmailAssociado: 'alksjd',
          CpfAssociado: '123123',
          NomeAssociado: 'Teste',
          TelefoneAssociado: 'asd',
          PlacaVeiculoAssociado: 'asd',
          NomeAmigo: friendsName,
          TelefoneAmigo: friendsPhone,
          EmailAmigo: friendsEmail,
        },
        Remetente: 'romulo.marques@hinovamobile.com.br',
        Copias: [],
      })
      .then(function (response) {
        const result = response.data;

        if (result.Sucesso) {
          Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Sucesso',
            textBody: result.Sucesso,
            button: 'OK',
          });
        } else if (result.RetornoErro) {
          Dialog.show({
            type: ALERT_TYPE.DANGER,
            title: 'Erro',
            textBody: result.RetornoErro.retornoErro,
            button: 'OK',
          });
        }
      })
      .catch(() => {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: 'Erro',
          textBody:
            'Por motivos desconhecidos, não foi possível enviar a indicação',
          button: 'OK',
        });
      })
      .finally(() => {
        reset({friendsName: '', friendsEmail: '', friendsPhone: ''});
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
      <Header>
        <Title>Preencha os dados do indicado:</Title>
      </Header>

      <Form>
        <Controller
          control={control}
          name="friendsName"
          render={({field: {onChange, value}}) => (
            <Input
              label={'Nome'}
              autoComplete="name"
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
              autoComplete="cc-number"
              label={'Celular'}
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
              label={'Email'}
              autoComplete="email"
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
      </Form>
    </Container>
  );
}
