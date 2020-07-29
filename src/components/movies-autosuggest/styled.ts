import styled from 'styled-components';
import { colors } from '../theme';

export const AutosuggestStylesWrapper = styled.div`
  & .react-autosuggest__container {
    background: ${colors.white};
    position: relative;
    border-radius: 2px;
  }
  & .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
  }

  & .react-autosuggest__suggestion--highlighted {
    background: ${colors.red}
    color: ${colors.white}
  }
  & li {
    list-style: none;
    padding: 12px 12px 12px 24px;
    transition: 0.2s;
    cursor: pointer;
  }
`;
