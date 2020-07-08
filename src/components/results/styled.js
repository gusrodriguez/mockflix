import styled from 'styled-components';

export const StyledResultsContainer = styled.div`
  padding-top: 43px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 95%;
  position: relative;
  overflow: hidden;
`;

export const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: 1px;
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;
