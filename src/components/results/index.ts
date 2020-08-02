import { connect } from 'react-redux';
import Results from './presentational';
import { loadResults, loadBackground } from './actions';
import { AppState  } from '../../types';

export const mapStateToProps = (state: AppState) => {
  const { movies : { results, backgroundLoaded, status } } = state;

  return ({
    results,
    backgroundLoaded,
    status,
  })
}

export const actions = {
  onLoadResults: loadResults,
  onLoadBackground: loadBackground,
}

export default connect(mapStateToProps, actions)(Results);
