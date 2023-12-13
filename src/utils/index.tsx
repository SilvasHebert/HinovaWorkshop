import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

type location = {
  longitude: number;
  latitude: number;
};

export function calDistanceBetweenTwoPoints(start: location, end: location) {
  const earthRadiusKm = 6371;
  const dLat = ((end.latitude - start.latitude) * Math.PI) / 180;
  const dLon = ((end.longitude - start.longitude) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((start.latitude * Math.PI) / 180) *
      Math.cos((end.latitude * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distanceKm = earthRadiusKm * c;

  return distanceKm;
}

export function calDistanceTo(destination: location) {
  const granted = PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  if (!granted) {
    return;
  }

  let distanceKm = null;

  Geolocation.getCurrentPosition(
    position => {
      distanceKm = position.coords;
    },
    error => {
      console.log(error.code, error.message);
    },
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  );

  return calDistanceBetweenTwoPoints(distanceKm, destination);
}
