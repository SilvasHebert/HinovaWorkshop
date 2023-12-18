import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.KeyboardAvoidingView`
  padding: 20px;
  /* gap: 20px; */
  height: 100%;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 26px;
  width: 70%;
`;

export const Header = styled.View`
  height: 30%;
  justify-content: center;
`;

export const Form = styled.View`
  gap: 20px;
`;
