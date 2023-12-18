import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppNavigation} from '../../routes/app.routes';

import {
  Container,
  Logo,
  Details,
  Name,
  Description,
  Address,
  Contacts,
  Email,
  FirstPhone,
  SecondPhone,
  ShortDescription,
  Section,
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
        <Name>
          {workshop.Nome} -{' '}
          <ShortDescription>{workshop.DescricaoCurta}</ShortDescription>
        </Name>

        <Contacts>
          <Section>Contatos</Section>
          {workshop.Email ? <Email>{workshop.Email}</Email> : null}
          {workshop.Telefone1 ? (
            <FirstPhone>{workshop.Telefone1}</FirstPhone>
          ) : null}
          {workshop.Telefone2 ? (
            <SecondPhone>{workshop.Telefone2}</SecondPhone>
          ) : null}
        </Contacts>
        <Section>Endereço</Section>

        <Address>{workshop.Endereco}</Address>

        <Section>Descrição e Serviços</Section>

        {workshop.Descricao.split('\\n').map(paragraph => {
          return <Description>{paragraph}</Description>;
        })}
      </Details>
    </Container>
  );
}
