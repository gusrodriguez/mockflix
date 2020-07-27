import React from 'react';
import PropTypes from 'prop-types';

function IconClose(props) {
  return (
    <svg className="icon-close" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
      <polygon
        onClick={props.clearInput}
        fill="#AAAAAB"
        points="96,14 82,0 48,34 14,0 0,14 34,48 0,82 14,96 48,62 82,96 96,82 62,48"
      />
    </svg>
  );
}

IconClose.propTypes = {
  clearInput: PropTypes.func.isRequired,
};

export default IconClose;
