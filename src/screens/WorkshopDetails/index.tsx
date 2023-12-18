import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {ShortDescription} from '../../components/WorkshopsList/WorkshopItem/styles';
import {AppNavigation} from '../../routes/app.routes';

import {
  Container,
  Logo,
  Details,
  Name,
  Description,
  Address,
  Email,
  FirstPhone,
  SecondPhone,
} from './styles';

export type WorkshopDetailsParams = NativeStackScreenProps<
  AppNavigation,
  'WorkshopDetails'
>;

export function WorkshopDetails({route}: WorkshopDetailsParams) {
  const workshop = route.params;

  return (
    <Container>
      <Logo source={{uri: `data:image/png;base64,${workshop.Foto}`}} />
      <Details>
        <Name>{workshop.Nome}</Name>
        <ShortDescription>{workshop.DescricaoCurta}</ShortDescription>
        <Address>{workshop.Endereco}</Address>
        <Description>{workshop.Descricao}</Description>
        <Email>{workshop.Email}</Email>
        <FirstPhone>{workshop.Telefone1}</FirstPhone>
        <SecondPhone>{workshop.Telefone2}</SecondPhone>
      </Details>
    </Container>
  );
}
