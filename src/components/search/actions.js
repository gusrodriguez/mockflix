import { createAction } from 'redux-actions';
import backgroundImage from '../../assets/images/movies.jpg'
import { preloadImage } from '../../helpers';

export const finishLoadingBackground = createAction('FINISH_LOADING_BACKGROUND', () => undefined);

export const loadBackground = () =>
  async(dispatch) => {
    await preloadImage(backgroundImage);
    dispatch(finishLoadingBackground());
  }

