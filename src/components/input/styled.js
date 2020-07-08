import styled from 'styled-components';
import { sizes } from '../theme';

export const StyledInput = styled.input`
  font-family: 'BebasNeue';
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  padding: 0;
  height: 66px;
  border: 1px darkgrey solid;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  text-indent: ${sizes.m};
`;

