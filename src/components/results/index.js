import { connect } from 'react-redux';
import Results from './presentational';
import { loadResults } from './actions';

export const mapStateToProps = (state) => {
  const { movies : { results } } = state;
  return ({
    results,
  })
}

export const actions = {
  onLoadResults: loadResults,
}

export default connect(mapStateToProps, actions)(Results);
