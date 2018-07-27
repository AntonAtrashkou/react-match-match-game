
import { connect } from 'react-redux';

import { setShirt } from '../../../actions/menuActions';

import Shirt from './Shirt';

const mapDispatchToProps = dispatch => ({
  setShirt: (shirt) => {
    dispatch(setShirt(shirt));
  },
});

export default connect(null, mapDispatchToProps)(Shirt);
