import styled from 'styled-components/native';
import colors from '../../styles/colors';
import {Text} from 'react-native-paper';
import {ScrollView} from 'react-native';

export const Container = styled.View`
  height: 100%;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 20%;
  width: width;
  margin: 20px;
  border-radius: 12px;
`;

export const Section = styled.Text`
  padding-top: 10px;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.black};
`;

export const Details = styled(ScrollView).attrs({
  contentContainerStyle: {
    gap: 10,
  },
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
})`
  background-color: ${colors.primary};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
`;

export const Name = styled(Text)`
  font-weight: bold;
  font-size: 20px;
  color: ${colors.black};
`;

export const ShortDescription = styled(Text)`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.background};
`;

export const Description = styled(Text)`
  color: ${colors.background};
`;

export const Address = styled(Text)`
  color: ${colors.background};
`;

export const Contacts = styled.View``;

export const Email = styled(Text)`
  color: ${colors.background};
  font-size: 15px;
`;

export const FirstPhone = styled(Text)`
  color: ${colors.background};
  font-size: 15px;
`;

export const SecondPhone = styled(Text)`
  color: ${colors.background};
  font-size: 15px;
`;
