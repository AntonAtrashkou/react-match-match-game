import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import { saveUser } from '../../actions/usersActions';

import Game from './Game';

const mapStateToProps = state => ({
  currentDifficulty: Object.values(state.menuReducer.difficulty)[0],
  currentShirtUrl: state.menuReducer.shirt,
});

// const mapDispatchToProps = dispatch => ({

// });

export default withRouter(connect(mapStateToProps, null)(Game));
