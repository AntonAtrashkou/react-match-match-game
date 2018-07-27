const initialState = {
  firstName: '',
  lastName: '',
  email: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USER': {
      const { firstName, lastName, email } = action.user;
      return Object.assign({}, state, { firstName }, { lastName }, { email });
    }

    default:
      return state;
  }
};

export default userReducer;
