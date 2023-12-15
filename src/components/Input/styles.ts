import styled from 'styled-components/native';
import {TextInput as TextInputPaper} from 'react-native-paper';

import colors from '../../styles/colors';

export const Container = styled.View`
  gap: 10px;
`;

export const TextInput = styled(TextInputPaper).attrs({
  outlineStyle: {
    borderRadius: 15,
  },
})``;

export const TextError = styled.Text`
  color: ${colors.error};
  font-size: 16px;
`;
