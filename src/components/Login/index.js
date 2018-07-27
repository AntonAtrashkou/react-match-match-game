import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { saveUser } from '../../actions/usersActions';

import Login from './Login';

// const mapStateToProps = state => ({
//   processes: getProcessesWithIds(state),
// });

const mapDispatchToProps = dispatch => ({
  saveUser: (user) => {
    dispatch(saveUser(user));
  },
});

export default withRouter(connect(null, mapDispatchToProps)(Login));
