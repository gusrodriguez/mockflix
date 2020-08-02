import styled from 'styled-components';
import { colors, sizes } from '../theme';

export const StyledNoResultsContainer = styled.div`
  margin-top: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column
`;

export const StyledText = styled.div`
  display: flex;
  color: ${colors.white};
  font-family: 'BebasNeue';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  `;

  export const StyledLink = styled.div`
  cursor: pointer;
  padding: 0 ${sizes.xs} 0 ${sizes.xs};
  transition: color 200ms linear
  color: ${colors.darkred};
  &:hover {
    color: ${colors.white};
  }
`;
