import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setTime } from '../../actions/gameAction';

import Game from './Game';

const mapStateToProps = state => ({
  currentDifficulty: Object.values(state.menuReducer.difficulty)[0],
  currentShirtUrl: state.menuReducer.shirt,
  userName: `${state.userReducer.firstName} ${state.userReducer.lastName}`,
});

const mapDispatchToProps = dispatch => ({
  setTime: (time) => {
    dispatch(setTime(time));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Game));
