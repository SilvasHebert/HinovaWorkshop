import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const WorkshopContainer = styled.TouchableOpacity`
  padding: 20px;
  background-color: ${colors.white};
  border: 1px solid ${colors.border};
  border-radius: 12px;
`;

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 100px;
  width: 200px;
  border-radius: 12px;
`;

export const Information = styled.View``;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const ShortDescription = styled.Text``;

export const Address = styled.Text``;
