import styled from 'styled-components/native';
import colors from '../../styles/colors';

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

export const Name = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${colors.primary};
`;

export const ShortDescription = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const Description = styled.Text``;

export const Address = styled.Text``;

export const Email = styled.Text``;

export const FirstPhone = styled.Text``;

export const SecondPhone = styled.Text``;

export const Recommendation = styled.View`
  padding: 20px;
`;

export const RecommendationButton = styled.TouchableOpacity`
  background-color: ${colors.primary};
  height: 50px;
  width: 100%;
  border-radius: 25px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const RecommendationText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: 18px;
`;
