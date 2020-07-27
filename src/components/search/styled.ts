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
  & .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
  }
  & li {
    list-style: none;
    padding: 12px 12px 12px 24px;
    &:hover {
      background: ${colors.darkred}
    }
    transition: 0.2s;
    cursor: pointer;
  }
`;

export const IconCloseWrapper = styled.div`
  margin: ${sizes.xs};
  cursor: pointer;
  position: absolute;
  right: 0;
`;
