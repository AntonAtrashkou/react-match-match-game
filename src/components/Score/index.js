import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getScoreAsync } from '../../actions/scoreActions';

import Score from './Score';

const mapStateToProps = state => ({
  score: state.scoreReducer.score,
});

const mapDispatchToProps = dispatch => ({
  getScore: () => {
    dispatch(getScoreAsync());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Score));
