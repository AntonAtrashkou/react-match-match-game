import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setTime } from '../../actions/gameAction';

import Game from './Game';
import { postScoreAsync } from '../../actions/scoreActions';

const mapStateToProps = state => ({
  currentDifficulty: Object.values(state.menuReducer.difficulty)[0],
  currentShirtUrl: state.menuReducer.shirt,
  userName: state.userReducer.firstName,
  userEmail: state.userReducer.email,
});

const mapDispatchToProps = dispatch => ({
  setTime: (time) => {
    dispatch(setTime(time));
  },
  postScore: (params) => {
    dispatch(postScoreAsync(params));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Game));
