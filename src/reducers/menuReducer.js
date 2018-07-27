const initialState = {
  shirt: '',
  difficulty: { easy: [5, 2] },
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SHIRT': {
      const { shirt } = action;
      return Object.assign({}, state, { shirt });
    }

    case 'SET_DIFFICULTY': {
      const { difficulty } = action;
      return Object.assign({}, state, { difficulty });
    }

    default:
      return state;
  }
};

export default menuReducer;
