import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { createSelector } from 'reselect';

// import { isFetching } from '../../actions/actions';

import App from './App';

// const getData = state => state.processReducer.processDetails.data;

// const getProcessesWithIds = createSelector(
//   getData,
//   data => data.map(proc => ({ id: proc.id, name: proc.name })),
// );

// const mapStateToProps = state => ({
//   processes: getProcessesWithIds(state),
// });

// const mapDispatchToProps = dispatch => ({
//   isFetching: (fetching) => {
//     dispatch(isFetching(fetching));
//   },
// });

export default withRouter(connect(null, null)(App));
