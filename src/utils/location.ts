import {PermissionsAndroid} from 'react-native';

export type Location = {
  latitude: number;
  longitude: number;
};

export async function requestLocationPermission() {
  try {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  } catch (err) {
    console.warn(err);
  }
}

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}

export function calculateDistance(start: Location, end: Location) {
  const EarthRadius = 6371;
  const dLat = deg2rad(end.latitude - start.latitude);
  const dLon = deg2rad(end.longitude - start.longitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(start.latitude)) *
      Math.cos(deg2rad(end.latitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const KmDistance = EarthRadius * c;

  return KmDistance;
}
