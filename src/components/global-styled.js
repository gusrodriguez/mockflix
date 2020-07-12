import { createGlobalStyle } from 'styled-components';
import { colors } from './theme';
import bebasNeueFont from '../assets/fonts/BebasNeue-Bold.ttf';

export const StyledBody = createGlobalStyle`
  body {
    background-color: ${colors.black};
    min-width: 800px;
    height: 100vh;
    @font-face {
      font-family: 'BebasNeue';
      font-style: normal;
      font-weight: 400;
      src: url(${bebasNeueFont}); format('ttf');
    }
    &:before {
      content:"";
      position:absolute;
      width:100%;
      height:100%;
      left:0;
      top:0;
      z-index:-1;
      opacity:0.3;
      background: url("https://thewallpaper.co//wp-content/uploads/2019/10/preview/movie-cinema-images-movies-hd-wallpaper-posters-digital-art-collage-fan-high-definition-art-jpg.jpg");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;
