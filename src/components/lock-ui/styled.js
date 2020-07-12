import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledLockUI = styled.div`
  position:fixed;
  width:100%;
  left:0;
  right:0;
  top:0;
  bottom:0;
  background-color: rgba(255,255,255,0.7);
  z-index:9999;
  &:after {
    content:'';
    display:block;
    position:absolute;
    left:48%;
    top:40%;
    width:40px;
    height:40px;
    border-style:solid;
    border-color:black;
    border-top-color:transparent;
    border-width: 4px;
    border-radius:50%;
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
  }
`;

