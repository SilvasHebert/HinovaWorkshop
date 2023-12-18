import styled from 'styled-components/native';
import colors from '../../../styles/colors';
import {Text} from 'react-native-paper';

export const WorkshopContainer = styled.TouchableOpacity`
  background-color: ${colors.primary};
  border-radius: 12px;
`;

export const ImageContainer = styled.View`
  align-items: center;
  margin: 10px;
  border-radius: 15px;
  background-color: ${colors.white};
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 100px;
  width: 70%;
  border-radius: 12px;
`;

export const Information = styled.View`
  padding: 20px;
  padding-top: 0px;
  gap: 10px;
  border-radius: 12px;
  flex-direction: row;
`;

export const Left = styled.View`
  flex: 2;
`;

export const Name = styled(Text)`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.background};
`;

export const ShortDescription = styled(Text)``;

export const Address = styled(Text)``;

export const Right = styled.View``;

export const DistaceContainer = styled.View`
  background-color: ${colors.white};
  border-radius: 20px;
  padding: 3px;
  padding-left: 6px;
  padding-right: 6px;
`;

export const Distance = styled(Text)`
  font-weight: bold;
  color: ${colors.black};
`;
