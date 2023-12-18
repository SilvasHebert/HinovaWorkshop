import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs({
  color: colors.primary,
  size: 'large',
})``;
