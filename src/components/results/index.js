import { connect } from 'react-redux';
import Results from './presentational';
import { loadResults, loadBackground } from './actions';

export const mapStateToProps = (state) => {
  const { movies : { results, backgroundLoaded } } = state;
  return ({
    results,
    backgroundLoaded,
  })
}

export const actions = {
  onLoadResults: loadResults,
  onLoadBackground: loadBackground,
}

export default connect(mapStateToProps, actions)(Results);
