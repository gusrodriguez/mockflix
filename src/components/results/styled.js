import styled from 'styled-components';
import  { css } from 'styled-components';

export const StyledResultsContainer = styled.div`
  border: 1px solid red;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 400px;
  justify-content: center;
  margin: 0 auto;
`;

export const StyledArrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  color: white;
  z-index: 100;
  line-height: 1px;
  text-align: center;
  position: absolute;
  top: 200px;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;

export const StyledPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
