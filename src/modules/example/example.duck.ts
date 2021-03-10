export const types = {
  START: "@EXAMPLE/START",
  SET_STATE: "@EXAMPLE/SET_STATE"
};

export const initialState = {
  message: "first state"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.START:
      return { ...state };

    case types.SET_STATE:
      return { ...state, message: action.message };

    default:
      return state;
  }
};

export const actions = {
  start: () => ({ type: types.START }),
  setMessage: message => ({ type: types.SET_STATE, message })
};
