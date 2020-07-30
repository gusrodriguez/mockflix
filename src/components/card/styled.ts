import styled from 'styled-components';
import { colors } from '../theme';

export const StyledCardHover = styled.div`
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  background: ${colors.darkgrey};
  z-index: 1;
  position: absolute;
  width: 300px;
  height: 382px;
  display: none;
  top: 21px;
`;

export const StyledCardContainer = styled.div`
    padding:1%;
    position:relative;
    &:hover {
      ${StyledCardHover} {
        display: flex;
      }
    }
`;

export const StyledImageWrapper = styled.div`
cursor: pointer;
`;
