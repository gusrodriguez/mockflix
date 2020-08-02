import styled from 'styled-components';
import { colors, sizes } from '../theme';

export const StyledCardHover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: absolute;
  width: 300px;
  height: 382px;
  visibility: hidden;
  top: ${sizes.s};
  backgound-color: rgba(0,0,0,0);
  transition: background-color 300ms;
`;

export const StyledTooltip  = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: BebasNeue;
  visibility: hidden;
  width: 250px;
  height: 100px;
  font-size: ${sizes.m};
  background-color: ${colors.red};
  color: ${colors.white}
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  margin-left: -80px;
  opacity: 0;
  transition: opacity 2s;
  $:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
`;

export const StyledImageWrapper = styled.div`
  cursor: pointer;
  visibility: hidden;
  transition: visiibility 300ms;
  position: relative;
  &:hover {
    ${StyledTooltip} {
        visibility: visible;
        opacity: 1;
      }
   }
`;

export const StyledCardContainer = styled.div`
  padding:${sizes.s};
  position:relative;
  &:hover {
    ${StyledCardHover} {
      visibility: visible;
      background-color: rgba(0, 0, 255,0.3);
    }
    ${StyledImageWrapper} {
      visibility: visible;
    }
  }
`;

