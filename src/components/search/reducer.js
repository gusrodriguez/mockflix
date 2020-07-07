const search = (state = {}, action) => {
    switch (action.type) {
      case 'NOTHING':
        return {...state}
      default:
        return state;
    }
  };

  export default search;
