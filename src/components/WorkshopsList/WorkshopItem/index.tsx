import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

import {Workshop} from '../../../screens/Home';
import {
  calculateDistance,
  requestLocationPermission,
} from '../../../utils/location';
import {
  WorkshopContainer,
  Image,
  Information,
  Left,
  Name,
  ImageContainer,
  ShortDescription,
  Right,
  Distance,
  DistaceContainer,
} from './styles';

export function WorkshopItem({
  workshop,
  onPress,
}: {
  workshop: Workshop;
  onPress: () => void;
}) {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [workshopDistance, setWorkshopDistance] = useState('');

  useEffect(() => {
    requestLocationPermission();

    Geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords;
      setCurrentLocation({latitude, longitude});
    });
  }, []);

  useEffect(() => {
    if (currentLocation === null) {
      return;
    }

    const distace = calculateDistance(currentLocation, {
      latitude: workshop.Latitude,
      longitude: workshop.Longitude,
    });

    if (distace) {
      setWorkshopDistance(Math.floor(distace) + ' Km');
    }
  }, [currentLocation, workshop]);

  return (
    <WorkshopContainer onPress={onPress}>
      <ImageContainer>
        <Image source={{uri: `data:image/png;base64,${workshop.Foto}`}} />
      </ImageContainer>
      <Information>
        <Left>
          <Name>{workshop.Nome}</Name>
          <ShortDescription numberOfLines={1}>
            {workshop.DescricaoCurta}
          </ShortDescription>
        </Left>
        <Right>
          <DistaceContainer>
            <Distance>{workshopDistance}</Distance>
          </DistaceContainer>
        </Right>
      </Information>
    </WorkshopContainer>
  );
}
