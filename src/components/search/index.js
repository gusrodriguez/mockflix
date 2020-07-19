import { connect } from 'react-redux';
import Search from './presentational';
import { loadBackground } from './actions';

export const mapStateToProps = (state) => {
  const { search : { backgroundLoaded } } = state;
  return ({
    backgroundLoaded,
  })
}

export const actions = {
  onLoadBackground: loadBackground,
}

export default connect(mapStateToProps, actions)(Search);
