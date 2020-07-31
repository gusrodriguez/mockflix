import styled from 'styled-components';
import { colors, sizes } from '../theme';

const transitionDuration = '300ms';

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
  justify-content: space-between;
`;

export const StyledBackText = styled.div`
  align-items: center;
  font-size: ${sizes.m};
  color: white;
  display: flex;
  margin-right: ${sizes.xs};
  margin-top: 5px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear ${transitionDuration}, opacity ${transitionDuration}, transform ${transitionDuration};

`;

export const StyledBackIconWrapper = styled.div`
  width: 32px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin-right: 36px;
  transition: transform ${transitionDuration};
  &:hover {
    transform: scale(1.3);
  }
  &:hover + ${StyledBackText} {
    visibility: visible;
    opacity: 1;
    transform: translate(-20px);
    transition: visibility 0s linear 0s, opacity ${transitionDuration};
  }
`;


export const StyledBack = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const StyledPlayMessage = styled.div`
  color: ${colors.white};
  font-size :${sizes.m};
`;

export const StyledLogoWrapper = styled.div`
  cursor: pointer;
`;
