import React from 'react';
import {Button} from 'react-native-paper';
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
  Recommendation,
  RecommendationButton,
  RecommendationText,
} from './styles';

export type WorkshopDetailsParams = NativeStackScreenProps<
  AppNavigation,
  'WorkshopDetails'
>;

export function WorkshopDetails({navigation, route}: WorkshopDetailsParams) {
  const workshop = route.params.workshop;

  return (
    <Container>
      <Logo source={{uri: `data:image/png;base64,${workshop.Foto}`}} />
      <Details>
        <Name>{workshop.Nome}</Name>
        <ShortDescription>{workshop.DescricaoCurta}</ShortDescription>
        <Description>{workshop.Descricao}</Description>
        <Address>{workshop.Endereco}</Address>
        <Email>{workshop.Email}</Email>
        <FirstPhone>{workshop.Telefone1}</FirstPhone>
        <SecondPhone>{workshop.Telefone2}</SecondPhone>
      </Details>
      <Recommendation>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Indicate')}>
          Indique um Amigo
        </Button>
      </Recommendation>
    </Container>
  );
}
