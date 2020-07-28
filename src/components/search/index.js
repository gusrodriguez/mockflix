import { connect } from 'react-redux';
import Search from './presentational';
import { loadBackground, loadSuggestions } from './actions';

export const mapStateToProps = (state) => {
  const { search : { backgroundLoaded } } = state;
  return ({
    backgroundLoaded,
  })
}

export const actions = {
  onLoadBackground: loadBackground,
  onLoadSuggestions: loadSuggestions,
}

export default connect(mapStateToProps, actions)(Search);
