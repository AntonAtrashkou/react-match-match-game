const initialState = {
  score: {},
};

const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GOT_SCORE': {
      const { score } = action;
      return Object.assign({}, state, { score });
    }

    default:
      return state;
  }
};

export default scoreReducer;
