import styled from 'styled-components';

export const StyledCardHover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: absolute;
  width: 300px;
  height: 382px;
  visibility: hidden;
  top: 21px;
  backgound-color: rgba(0,0,0,0);
  transition: background-color 300ms;
`;

export const StyledImageWrapper = styled.div`
  cursor: pointer;
  visibility: hidden;
  transition: visiibility 300ms;
`;

export const StyledCardContainer = styled.div`
    padding:1%;
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

