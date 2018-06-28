export const asyncReducerFactory = (name = "") => {
  return (state = { data: null, isLoading: false, error: null }, action) => {
    switch (action.type) {
      case `FETCH_${name}_STARTED`:
        return { data: null, isLoading: true, error: null };
      case `FETCH_${name}_SUCCESS`:
        return { data: action.payload, isLoading: false, error: null };
      case `FETCH_${name}_ERROR`:
        return { data: null, isLoading: false, error: action.payload };
      default:
        return state;
    }
  };
};

export const asyncActionCreatorFactory = (name = "", thunk) => () => {
  return dispatch => {
    console.log(`FETCH_${name}_STARTED`)
    dispatch({ type: `FETCH_${name}_STARTED` });

    return dispatch(thunk)
      .then(data => data.json())
      .then(json => dispatch({ type: `FETCH_${name}_SUCCESS`, payload: json }))
      .catch(err => dispatch({ type: `FETCH_${name}_ERROR`, payload: err }));
  };
};
