import styled from 'styled-components';
import { sizes, colors } from '../theme';

export const IconCloseWrapper = styled.div`
  margin: ${sizes.xs};
  cursor: pointer;
  position: absolute;
  right: 0;
`;

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
