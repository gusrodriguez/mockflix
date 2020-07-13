import styled from 'styled-components';
import  { css } from 'styled-components';

export const StyledCarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: ${props => props.width}px;
  height: 400px;
  justify-content: center;
  margin: 0 auto;
`;

const StyledArrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  color: white;
  z-index: 100;
  line-height: 1px;
  text-align: center;
  position: absolute;
  top: 200px;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
`;

export const StyledPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledLeftArrow = styled(StyledArrow)`
  left: 0;
`;

export const StyledRightArrow = styled(StyledArrow)`
  right: 0;
`;
