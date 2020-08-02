import styled from 'styled-components';
import { colors } from '../theme'

export const StyledButton = styled.button`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center
  cursor: pointer;
  width: 260px;
  height: 68px;
  background-color: ${colors.red};
  border: none;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left: 1px grey solid;
  transition: 0.3s;
  &:hover {
    background-color: ${colors.darkred};
    border: 1px darkgrey solid;
  }
  &:focus {
    outline:0;
  }
`;

export const StyledButtonText = styled.p`
  font-family: BebasNeue;
`;

export const StyledButtonTextContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 28px;
  color: white;
`;
