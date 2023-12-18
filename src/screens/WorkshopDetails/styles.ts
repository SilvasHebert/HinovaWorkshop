import styled from 'styled-components/native';
import colors from '../../styles/colors';
import {Text} from 'react-native-paper';

export const Container = styled.ScrollView``;

export const Logo = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 150px;
  width: width;
`;

export const Details = styled.View`
  gap: 20px;
  padding: 20px;
`;

export const Name = styled(Text)`
  font-weight: bold;
  font-size: 20px;
  color: ${colors.primary};
`;

export const ShortDescription = styled(Text)`
  font-weight: bold;
  font-size: 16px;
`;

export const Description = styled(Text)``;

export const Address = styled(Text)``;

export const Email = styled(Text)``;

export const FirstPhone = styled(Text)``;

export const SecondPhone = styled(Text)``;
