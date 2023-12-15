import React from 'react';

import {
  WorkshopContainer,
  Image,
  Information,
  Name,
  ImageContainer,
  ShortDescription,
  Address,
} from './styles';
import {Workshop} from '../../../screens/Home';

export function WorkshopItem({
  workshop,
  onPress,
}: {
  workshop: Workshop;
  onPress: () => void;
}) {
  console.log(onPress);
  return (
    <WorkshopContainer onPress={onPress}>
      <ImageContainer>
        <Image source={{uri: `data:image/png;base64,${workshop.Foto}`}} />
      </ImageContainer>
      <Information>
        <Name>{workshop.Nome}</Name>
        <ShortDescription numberOfLines={1}>
          {workshop.DescricaoCurta}
        </ShortDescription>
      </Information>
    </WorkshopContainer>
  );
}
