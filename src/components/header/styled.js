import styled from 'styled-components';
import { colors, sizes } from '../theme';

export const StyledHeader= styled.header`
  display: flex;
  align-items: center;
  padding: 10px 10px 10px ${sizes.m};
  font-family: 'BebasNeue';
  width:100%;
  background:${colors.darkgrey};
  color: ${colors.red};
  height:40px;
  padding-top:10px;
  font-weight: 700;
  font-size: 36px;
  border-bottom: 1px solid ${colors.gray};
`;
