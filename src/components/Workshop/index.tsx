import React from 'react';

import {
  WorkshopContainer,
  Image,
  Name,
  ImageContainer,
  ShortDescription,
  Address,
} from './styles';

import {calDistanceTo} from '../../utils';

export function Workshop({workshop}) {
  return (
    <WorkshopContainer>
      <ImageContainer>
        <Image source={{uri: `data:image/png;base64,${workshop.Foto}`}} />
      </ImageContainer>
      <Name>{workshop.Nome}</Name>
      <ShortDescription numberOfLines={1}>
        {workshop.DescricaoCurta}
      </ShortDescription>

      <Address>
        Teste:
        {calDistanceTo({
          latitude: workshop.Latitude,
          longitude: workshop.Longitude,
        })}
      </Address>

      {/* <Name>{workshop.AvaliacaoUsuario}</Name> */}
    </WorkshopContainer>
  );
}
