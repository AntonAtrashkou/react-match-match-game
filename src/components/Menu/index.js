import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setDifficulty, setShirt } from '../../actions/menuActions';

import Menu from './Menu';

const mapStateToProps = state => ({
  currentDifficulty: Object.keys(state.menuReducer.difficulty)[0],
});

const mapDispatchToProps = dispatch => ({
  setDifficulty: (diff) => {
    dispatch(setDifficulty(diff));
  },
  setShirt: (shirt) => {
    dispatch(setShirt(shirt));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu));
