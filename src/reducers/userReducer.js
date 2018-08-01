const initialState = {
  firstName: '',
  email: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USER': {
      const { firstName, email } = action.user;
      return Object.assign({}, state, { firstName }, { email });
    }

    default:
      return state;
  }
};

export default userReducer;
