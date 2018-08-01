const initialState = {
  status: '',
  time: '',
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    // case 'SET_GAME_STATUS': {
    //   const { status } = action;
    //   return Object.assign({}, state, { status });
    // }

    case 'SET_TIME': {
      const { time } = action;
      return Object.assign({}, state, { time });
    }

    default:
      return state;
  }
};

export default gameReducer;
