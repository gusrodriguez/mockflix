import styled from 'styled-components';
import { colors, sizes } from '../theme';

export const StyledSearchContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 200px auto;
`;

export const StyledForm = styled.form`
  display: flex;
  font-family: 'BebasNeue';
  font-size: 24px;
  & .react-autosuggest__container {
    background: ${colors.white};
    position: relative;
  }
  & li {
    list-style: none;
    padding-bottom: ${sizes.xs};
  }
`;

export const IconCloseWrapper = styled.div`
  margin: ${sizes.xs};
  position: absolute;
  right: 0;
`;
