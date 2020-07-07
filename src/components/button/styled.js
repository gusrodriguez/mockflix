import styled from 'styled-components';
import { colors } from '../theme'

export const StyledButton = styled.button`
  cursor: pointer;
  text-rendering: auto;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  background-color: #F40612;
  box-sizing: border-box;
  margin: 0em;
  width: 260px;
  border: none;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left: 1px grey solid;
`;

export const StyledButtonText = styled.p`
  margin: 0;
  font-family: BebasNeue;
`;

export const StyledButtonTextContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 28px;
  color: white;
`;
